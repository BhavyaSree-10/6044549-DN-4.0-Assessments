import React, { useState } from 'react';

function CurrencyConvertor() {
  const [rupees, setRupees] = useState('');
  const [euro, setEuro] = useState('');

  const handleSubmit = () => {
    const converted = (parseFloat(rupees) / 90).toFixed(2); // 1 Euro = approx 90 INR
    setEuro(converted);
  };

  return (
    <div>
      <h2>Currency Convertor (INR ➝ EUR)</h2>
      <input
        type="text"
        placeholder="Enter amount in INR"
        value={rupees}
        onChange={(e) => setRupees(e.target.value)}
      />
      <button onClick={handleSubmit}>Convert</button>
      <p>Converted Amount in Euro: € {euro}</p>
    </div>
  );
}

export default CurrencyConvertor;
