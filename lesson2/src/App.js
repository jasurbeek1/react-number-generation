import React, { useState } from 'react';

const NumberAnalyzer = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [color, setColor] = useState('');

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setInput(inputValue);

    // Sonni tekshirish va holatni aniqlash
    const number = parseFloat(inputValue);

    if (isNaN(number)) {
      setResult('Invalid Input');
      setColor('red');
    } else {
      if (number < 0) {
        setResult('Negative');
        setColor('red');
      } else if (number > 10) {
        setResult('Positive');
        setColor('green');
      } else {
        setResult('Natural');
        setColor('blue');
      }
    }
  };

  return (
    <div>
      <h2>Number Analyzer</h2>
      <input
        type="number"
        placeholder="Enter a number"
        value={input}
        onChange={handleInputChange}
      />
      <p style={{ color: color }}>{result}</p>
    </div>
  );
};

export default NumberAnalyzer;
