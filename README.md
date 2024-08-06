
# Transaction Management App

A simple React application for managing transactions. This app allows users to view, add, filter, sort, and delete transactions.

## Features

- **View Transactions**: Display a table of all transactions.
- **Add Transactions**: Fill out and submit a form to add a new transaction to the table (no backend persistence required).
- **Filter Transactions**: Search for transactions by typing into a search bar. The table will only show transactions with a description matching the search term.
- **Sort Transactions** (Bonus): Sort transactions alphabetically by category or description.
- **Delete Transactions** (Bonus): Remove a transaction from the table.

## Setup Instruction.
 Once you have the plan in place for the application you want to build take the following steps:

Create a new project folder.
Create a new GitHub repository (NB: ENSURE IT IS PRIVATE).
Add your TM as a contributor to the project. (This is only for grading purposes)
Please make sure you regularly commit to the repository.
Project Guidelines
Your project should conform to the following set of guidelines:

Core Deliverables
As a user, I can:

See a table of all transactions.
 Fill out and submit the form to add a new transaction. This should add the new transaction to the table * the new transaction does not have to be persisted to the backend *
Filter transactions by typing into the search bar. Only transactions with a description matching the search term should be shown in the transactions table.

**Clone the Repository**

   ```bash
   git clone https://github.com/Farida-Mutai/transaction-app


Project Structure
public/db.json: Contains sample transaction data for local simulation.
src/components/TransactionTable.js: Component for displaying the transaction table.
src/components/TransactionForm.js: Component for adding new transactions.
src/App.js: Main component that integrates TransactionTable and TransactionForm, and manages the state.
src/App.css: Basic styling for the application.

License
This project is licensed under the Apache License 2.0Contact
For questions or feedback, please contact 
farida.mutai@student.moringaschool.com

