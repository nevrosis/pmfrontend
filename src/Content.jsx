import React from 'react'
import { useState } from 'react';

const Content = () => {

  const [name, setName] = useState('Dave');

  const handleClick = () => {
    console.log(1);
  }

  const handleClick2 = (name) => {
    setName(name);
    console.log(`${name}`);
  }
  const handleClick3 = (e) => {
    console.dir(e.target.innerHTML);
  }

  return (
    <main>
      Content {name}! <br />
      <button onClick={handleClick}>B</button>
      <button onClick={() => handleClick2('davedd')}>B</button>
      <button onClick={(e) => handleClick3(e)}>B</button>
    </main>
  )
}

export default Content