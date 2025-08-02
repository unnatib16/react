import React, { useState } from 'react';
import EventHandler from './EventHandler.jsx';

function App() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div>
      <button onClick={() => setShowMessage(!showMessage)}>
        Toggle Message
      </button>

      {showMessage && <p>Hello, React Event Handling!</p>}

      <EventHandler />
    </div>
  );
}

export default App;
