import React, { useState } from 'react';

function EventExamples() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    sayHello();
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const sayHello = () => {
    console.log("Hello! Counter updated.");
  };

  const sayWelcome = (message) => {
    alert(`Welcome message: ${message}`);
  };

  const onPress = () => {
    alert("I was clicked");
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <br /><br />

      <button onClick={() => sayWelcome("Welcome to React Events!")}>Say Welcome</button>

      <br /><br />

      <button onClick={onPress}>OnPress</button>
    </div>
  );
}

export default EventExamples;
