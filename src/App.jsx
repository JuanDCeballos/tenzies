import Die from './components/Die';
import './App.css';
import { useState } from 'react';

const App = () => {
  const randomNumber = () => Math.floor(Math.random() * (6 - 1 + 1) + 1);

  const allNewDice = () => {
    const dicesArr = [];
    for (let i = 0; i < 10; i++) {
      dicesArr.push(randomNumber());
    }
    return dicesArr;
  };

  const rollDice = () => {
    setDice(allNewDice);
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
          {dice.map((die, i) => (
            <Die key={i} value={die} />
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
