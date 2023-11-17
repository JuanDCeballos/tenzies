import Die from './components/Die';
import './App.css';

const App = () => {
  const randomNumber = () => Math.floor(Math.random() * (6 - 1 + 1) + 1);

  return (
    <div className='container'>
      <main className='game-container'>
        <div className='dies-container'>
          <Die value={randomNumber()} />
          <Die value={randomNumber()} />
          <Die value={randomNumber()} />
          <Die value={randomNumber()} />
          <Die value={randomNumber()} />
          <Die value={randomNumber()} />
          <Die value={randomNumber()} />
          <Die value={randomNumber()} />
          <Die value={randomNumber()} />
          <Die value={randomNumber()} />
        </div>
      </main>
    </div>
  );
};

export default App;
