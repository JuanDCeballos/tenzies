const Die = ({ value, isHeld, holdDice }) => {
  return (
    <div className={`die ${isHeld ? 'held' : 'no-held'}`} onClick={holdDice}>
      <p>{value}</p>
    </div>
  );
};

export default Die;
