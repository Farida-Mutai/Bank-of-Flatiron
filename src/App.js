import React, { useState, useEffect } from 'react';
import TransactionTable from './TransactionTable';
import TransactionForm from './TransactionForm';


function App() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortCategory, setSortCategory] = useState('description');

  // Fetch data from db.json
  useEffect(() => {
    fetch('/db.json')
      .then(response => response.json())
      .then(data => setTransactions(data.transactions));
  }, []);

  // Add a new transaction
  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  // Delete a transaction
  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(transaction => transaction.id !== id));
  };

  // Filter transactions based on search term
  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort transactions based on selected category
  const sortedTransactions = [...filteredTransactions].sort((a, b) => {
    if (sortCategory === 'description') {
      return a.description.localeCompare(b.description);
    } else {
      return a.category.localeCompare(b.category);
    }
  });

  return (
    <div className="App">
      <h1>Transaction Manager</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={() => setSortCategory(sortCategory === 'description' ? 'category' : 'description')}>
        Sort by {sortCategory === 'description' ? 'Category' : 'Description'}
      </button>
      <TransactionForm addTransaction={addTransaction} />
      <TransactionTable
        transactions={sortedTransactions}
        deleteTransaction={deleteTransaction}
      />
    </div>
  );
}

export default App;
