import React from 'react';

function TransactionTable({ transactions, onDelete, onSort }) {
  return (
    <div>
      <button onClick={() => onSort('description')}>Sort by Description</button> 

      <button onClick={() => onSort('category')}>Sort by Category</button>
      <table>
        <thead>
          <tr>
          <th>Date

        </th>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Actions</th>



          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
             <tr key={transaction.id}>
             <td>{transaction.date}</td>
             <td>{transaction.description}</td>
             <td>{transaction.amount}</td>
             <td>{transaction.category}</td>

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

export default TransactionTable;