import Die from './components/Die';
import './App.css';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti';

const App = () => {
  const [currentRolls, setCurrentRolls] = useState(0);
  const [bestRoll, setBestRoll] = useState(
    () => JSON.parse(localStorage.getItem('allTimeBest')) || 0
  );

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
    if (!tenzies) {
      setDice((prevDice) =>
        prevDice.map((die) => {
          return die.isHeld ? die : generateNewDie();
        })
      );
      setCurrentRolls((prevRoll) => prevRoll + 1);
    } else {
      setTenzies(false);
      setDice(allNewDice());
      setCurrentRolls(0);
    }
  };

  const holdDice = (id) => {
    setDice((prevDice) =>
      prevDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  };

  const [dice, setDice] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);

  useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const firstValue = dice[0].value;
    const allSameValue = dice.every((die) => die.value === firstValue);
    if (allHeld && allSameValue) {
      if (bestRoll === 0) {
        setBestRoll(currentRolls);
      } else if (currentRolls < bestRoll) {
        setBestRoll(currentRolls);
      }

      setTenzies(true);
    }
  }, [dice]);

  useEffect(() => {
    localStorage.setItem('allTimeBest', JSON.stringify(bestRoll));
  }, [bestRoll]);

  return (
    <div className='container'>
      {tenzies && <Confetti />}
      <main className='game-container'>
        <div className='game-description'>
          <h1 className='title'>Tenzies</h1>
          <p className='instructions'>
            Roll until all dice are the same. Click each die to freeze it at its
            current value between rolls.
          </p>
        </div>
        <div className='game-stats'>
          <h2>Number of Rolls</h2>
          <div className='rolls-container'>
            <p>Current {currentRolls}</p>
            <p>All time best {bestRoll}</p>
          </div>
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
          {tenzies ? 'New game' : 'Roll'}
        </button>
      </main>
    </div>
  );
};

export default App;
