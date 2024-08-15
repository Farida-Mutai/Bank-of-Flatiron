import React from 'react';

// Define the TransactionTable component
function TransactionTable({ transactions, onDelete, onSort }) {
  return (
    <div>
      {/* Buttons to sort transactions by different criteria */}
      <button onClick={() => onSort('description')}>Sort by Description</button>
      <button onClick={() => onSort('category')}>Sort by Category</button>
      
      {/* Table to display transactions */}
      <table>
        <thead>
          <tr>
            {/* Table headers */}
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Map over the transactions array to create table rows */}
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              {/* Table data cells */}
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.category}</td>
              
              {/* Action button to delete a transaction */}
              <td>
                <button onClick={() => onDelete(transaction.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Export the TransactionTable component for use in other parts of the application
export default TransactionTable;
