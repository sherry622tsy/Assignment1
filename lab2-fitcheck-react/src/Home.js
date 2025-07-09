import React, { useState, useRef } from 'react';

function Home() {
  const [count, setCount] = useState(0);
  const headingRef = useRef(null);

  const handleClick = () => {
    setCount(count + 1);
    headingRef.current.style.color = 'green'; // 操作 DOM
  };

  return (
    <div>
      <h2 ref={headingRef}>Welcome to FitCheck Home</h2>
      <p>You clicked {count} times.</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default Home;
