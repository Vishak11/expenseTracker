import React from 'react';
import { FaEdit, FaTrashAlt, FaWifi, FaGift, FaCarAlt } from 'react-icons/fa';
import '../App.css'; 

// Map some icons based on expense types or categories (just as an example)
const expenseIcons = {
  Samosa: <FaWifi />,
  Movie: <FaGift />,
  Auto: <FaCarAlt />
};

const TranscationCard = ({ expenses }) => {
  return (
    <div className="recentTransactionsContainer">
      <h2 className="expenseHeader">Recent Transactions</h2>
      {expenses.map((expense, index) => (
        <div key={index} className="expenseItem">
          <div className="expenseIcon">{expenseIcons[expense.name] || <FaGift />}</div>
          <div className="expenseDetails">
            <div className="expenseName">{expense.name}</div>
            <div className="expenseDate">{new Date().toLocaleDateString()}</div> {/* Simplified for now */}
          </div>
          <div className="expenseAmount">₹{expense.amount}</div>
          <div className="expenseActions">
            <button className="editBtn">
              <FaEdit />
            </button>
            <button className="deleteBtn">
              <FaTrashAlt />
            </button>
          </div>
        </div>
      ))}
      {/* Pagination - Optional */}
      <div className="paginationControls">
        <button className="paginationBtn">←</button>
        <span className="paginationPage">1</span>
        <button className="paginationBtn">→</button>
      </div>
    </div>
  );
};

export default TranscationCard;
