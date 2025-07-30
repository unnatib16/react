import React, { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer); // clean up on unmount
  }, []);

  return (
    <div>
      <h2>It is {time}.</h2>
    </div>
  );
}

export default Clock;
