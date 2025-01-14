import React, { useState } from 'react';

function App() {
  const [numbers, setNumbers] = useState([]);

  const generateNumbers = () => {
    const newNumbers = Array.from({ length: 1132 }, (_, i) => i + 1);
    setNumbers(newNumbers);
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex flex-col items-center gap-4">
      <h1 className="text-2xl font-bold">Number Generator</h1>
      <button
        onClick={generateNumbers}
        className="bg-blue-500 text-white py-2 px-4 rounded-lg mb-4 text-center cursor-pointer hover:bg-blue-700"
      >
        Generate Numbers
      </button>
      <ul className="list-none p-0 grid grid-cols-4 gap-4">
        {numbers.map((number) => (
          <li
            key={number}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg text-center cursor-pointer hover:bg-blue-700"
          >
            {number}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;