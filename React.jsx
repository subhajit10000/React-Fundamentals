import React, { useState, useEffect, useContext, createContext } from 'react';

export default function ReactFundamentalsNotes() {
  /* 
  React Fundamentals in JSX
  
    1. Components
  Components are reusable pieces of UI. They are JavaScript functions that return JSX.
  A component name must start with a capital letter.
  */
  function Greeting({ name }) {
    return <h1>Hello {name}</h1>;
  }

  /* 
    2. JSX
  JSX is a syntax extension for JavaScript. It looks like HTML but gets compiled to React.createElement calls.
  You can embed any JavaScript expression inside curly braces.
  */
  const element = <p>2 plus 2 equals {2 + 2}</p>;

  /*
    3. Props
  Props are inputs to components. They are read only and passed from parent to child.
  Props let you configure a component without changing its code.
  */
  function UserCard({ username, age }) {
    return (
      <div>
        <p>User: {username}</p>
        <p>Age: {age}</p>
      </div>
    );
  }

  /*
    4. State
  State is data that changes over time. useState returns the current value and a setter function.
  When state changes, React re-renders the component.
  */
  function Counter() {
    const [count, setCount] = useState(0);
    
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Add 1</button>
      </div>
    );
  }

  /*
    5. Events
  React uses camelCase for events like onClick, onChange. You pass a function, not a string.
  */
  function ClickButton() {
    function handleClick() {
      console.log('Button clicked');
    }
    return <button onClick={handleClick}>Click me</button>;
  }

  /*
    6. Conditional Rendering
  Use ternary operators or logical && to render UI based on state or props.
  */
  function LoginMessage({ isLoggedIn }) {
    return (
      <div>
        {isLoggedIn ? <p>Welcome back</p> : <p>Please log in</p>}
        {isLoggedIn && <button>Logout</button>}
      </div>
    );
  }

  function FruitList() {
    const fruits = ['Apple', 'Banana', 'Mango'];
    return (
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    );
  }

  function Timer() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
      const id = setInterval(() => setSeconds(s => s + 1), 1000);
      return () => clearInterval(id); // cleanup on unmount
    }, []);

    return <p>Seconds: {seconds}</p>;
  }

  const ThemeContext = createContext('light');

  function ThemedButton() {
    const theme = useContext(ThemeContext);
    return <button className={theme}>Theme is {theme}</button>;
  }

  function Parent() {
    const [message, setMessage] = useState('');
    return <Child onMessage={setMessage} />;
  }
  
  function Child({ onMessage }) {
    return <button onClick={() => onMessage('Hello from child')}>Send</button>;
  }

  return (
    <div>
      <h2>React Fundamentals Notes</h2>
      <Greeting name="Student" />
      <Counter />
      <FruitList />
      <LoginMessage isLoggedIn={true} />
      <Timer />
      <ThemeContext.Provider value="dark">
        <ThemedButton />
      </ThemeContext.Provider>
    </div>
  );
}
