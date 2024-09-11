import { useState } from 'react';

function CountTime() {
  const [time, setTime] = useState(60);

  const [clearTimeId, setClearTimeId] = useState(null);

  const handleStart = () => {
    let timeId = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);
    setClearTimeId(timeId);
  };

  const handleStop = () => {
    clearInterval(clearTimeId);
  };

  const [search, setSearch] = useState('');

  return (
    <>
      <div>{time} s</div>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
      <input type="text" onChange={(e) => setSearch(e.target.value)} />
      <p>{search}</p>
    </>
  );
}

export default CountTime;
