import React, { useState } from 'react';

// Define the TransactionForm component
function TransactionForm({ onAdd }) {
  // State variables to manage form input values
  const [description, setDescription] = useState('');  // Stores the description of the transaction
  const [amount, setAmount] = useState('');  // Stores the amount of the transaction as a string
  const [category, setCategory] = useState('');  // Stores the category of the transaction
  const [date, setDate] = useState('');  // Stores the date of the transaction
  
  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();  // Prevents the default form submission which reloads the page

    // Check if all required fields are filled
    if (description && amount && category) {
      // Call the onAdd function passed as a prop with the new transaction data
      
      onAdd({ description, amount: parseFloat(amount), category });

      // Clear form fields after submission
      setDescription('');  // Reset description to an empty string
      setAmount('');  // Reset amount to an empty string
      setCategory('');  // Reset category to an empty string
      setDate('');  // Reset date to an empty string
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input field for the description of the transaction */}
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"  // Placeholder text when field is empty
      />
      
      {/* Input field for the amount of the transaction */}
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"  // Placeholder text when field is empty
      />
      
      {/* Input field for the category of the transaction */}
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"  // Placeholder text when field is empty
      />
      
      {/* Input field for the date of the transaction */}
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        placeholder="Date"  // Placeholder text when field is empty (though placeholder is generally not shown for date inputs)
      />
      
      {/* Button to submit the form and add the transaction */}
      <button type="submit">Add Transaction</button>
    </form>
  );
}

// Export the TransactionForm component for use in other parts of the application
export default TransactionForm;
