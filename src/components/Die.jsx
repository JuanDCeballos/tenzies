const Die = ({ value, isHeld }) => {
  return (
    <div className={`die ${isHeld ? 'held' : 'no-held'}`}>
      <p>{value}</p>
    </div>
  );
};

export default Die;
