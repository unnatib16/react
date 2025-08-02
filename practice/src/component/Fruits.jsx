import React from 'react';

function Fruits() {
  const items = ['Apple', 'Banana', 'Orange', 'Mango'];

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default Fruits;
