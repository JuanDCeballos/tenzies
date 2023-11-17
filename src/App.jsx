import Die from './components/Die';
import './App.css';
import { useState } from 'react';
import { nanoid } from 'nanoid';

const App = () => {
  const randomNumber = () => Math.floor(Math.random() * (6 - 1 + 1) + 1);

  const allNewDice = () => {
    const dicesArr = [];
    for (let i = 0; i < 10; i++) {
      const diceObj = {
        id: nanoid(),
        value: randomNumber(),
        isHeld: false,
      };
      dicesArr.push(diceObj);
    }
    return dicesArr;
  };

  const rollDice = () => {
    setDice(allNewDice());
  };

  const [dice, setDice] = useState(allNewDice());

  return (
    <div className='container'>
      <main className='game-container'>
        <div>
          <h1>Tenzies</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
            mollitia dolorem, deserunt autem libero temporibus modi voluptatum.
            Architecto a unde aspernatur itaque aut deleniti laborum sed non
            corrupti natus! Eos!
          </p>
        </div>
        <div className='dies-container'>
          {dice.map((die) => (
            <Die key={die.id} value={die.value} />
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
