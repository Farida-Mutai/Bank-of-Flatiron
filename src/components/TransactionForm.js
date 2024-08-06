
//TransactionForm.js
import React, { useState } from 'react';

function TransactionForm({ onAdd }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  

  const handleSubmit = (event) => {
    event.preventDefault();
    if (description && amount && category) {
      onAdd({ description, amount: parseFloat(amount), category });
      setDescription('');
      setAmount('');
      setCategory('');
      setDate('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        placeholder="Date"
      />
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default TransactionForm;
