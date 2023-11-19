import Die from './components/Die';
import './App.css';
import { useState } from 'react';
import { nanoid } from 'nanoid';

const App = () => {
  const randomNumber = () => Math.floor(Math.random() * (6 - 1 + 1) + 1);

  const generateNewDie = () => {
    return {
      id: nanoid(),
      value: randomNumber(),
      isHeld: false,
    };
  };

  const allNewDice = () => {
    const dicesArr = [];
    for (let i = 0; i < 10; i++) {
      dicesArr.push(generateNewDie());
    }
    return dicesArr;
  };

  const rollDice = () => {
    setDice((prevDice) =>
      prevDice.map((die) => {
        return die.isHeld ? die : generateNewDie();
      })
    );
  };

  const holdDice = (id) => {
    setDice((prevDice) =>
      prevDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  };

  const [dice, setDice] = useState(allNewDice());

  return (
    <div className='container'>
      <main className='game-container'>
        <div className='game-description'>
          <h1 className='title'>Tenzies</h1>
          <p className='instructions'>
            Roll until all dice are the same. Click each die to freeze it at its
            current value between rolls.
          </p>
        </div>
        <div className='dies-container'>
          {dice.map((die) => (
            <Die
              key={die.id}
              value={die.value}
              isHeld={die.isHeld}
              holdDice={() => holdDice(die.id)}
            />
          ))}
        </div>
        <button className='cta' onClick={rollDice}>
          Roll
        </button>
      </main>
    </div>
  );
};

export default App;
