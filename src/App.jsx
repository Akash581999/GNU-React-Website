import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount(count + 1);
  };

  const deleteCount = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello Akash!
      </h1>
      <button type="button" className='bg-red-500 text-1xl text-white rounded-xl p-2 hover:text-2xl font-bold'
        onClick={deleteCount}>Delete
      </button>&nbsp;
      count is {count}&nbsp;
      <button type="button" className='bg-green-500 text-1xl text-white rounded-xl p-2 hover:text-2xl font-bold'
        onClick={addCount}>Add
      </button>
    </>
  );
}

export default App;
