import React, { useState } from 'react';

// Define the TransactionForm component
function TransactionForm({ onAdd }) {
  // State variables to manage form input values
  const [description, setDescription] = useState('');  // Description of the transaction
  const [amount, setAmount] = useState('');  // Amount of the transaction
  const [category, setCategory] = useState('');  // Category of the transaction
  const [date, setDate] = useState('');  // Date of the transaction
  
  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();  // Prevent the default form submission behavior

    // Check if required fields are filled
    if (description && amount && category) {
      // Call the onAdd function passed as a prop, passing the new transaction data
      onAdd({ description, amount: parseFloat(amount), category });

      // Clear form fields after submission
      setDescription('');
      setAmount('');
      setCategory('');
      setDate('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input field for description */}
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      
      {/* Input field for amount */}
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
      />
      
      {/* Input field for category */}
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
      />
      
      {/* Input field for date */}
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        placeholder="Date"
      />
      
      {/* Submit button to add the transaction */}
      <button type="submit">Add Transaction</button>
    </form>
  );
}

// Export the TransactionForm component for use in other parts of the application
export default TransactionForm;
