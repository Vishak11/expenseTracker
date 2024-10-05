import React from 'react';
import '../App.css';

const expenses = [
  { category: 'Entertainment', amount: 70 },
  { category: 'Food', amount: 30 },
  { category: 'Travel', amount: 10 },
];

const ExpenseProgress = () => {
  return (
    <div className="topExpensesContainer">
      <h2 className="expenseHeader">Top Expenses</h2>
      <div className="expenseBars">
        {expenses.map((expense, index) => (
          <div key={index} className="expenseRow">
            <div className="expenseCategory">{expense.category}</div>
            <div className="expenseBarWrapper">
              <div
                className="expenseBar"
                style={{ width: `${expense.amount}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpenseProgress;
