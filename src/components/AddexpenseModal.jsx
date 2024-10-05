import React, { useState } from 'react';
import '../App.css'; // Add necessary styles

const AddexpenseModal = ({ onClose, onAddExpense }) => {
  const [amount, setAmount] = useState('');

  const handleAddExpense = () => {
    // Add the expense amount to the list of expenses
    onAddExpense(amount);
    onClose(); // Close the modal after adding the expense
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <h2 className="modalTitle">Add Balance</h2>
        <input
          type="number"
          placeholder="Income Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="modalInput"
        />
        <div className="modalActions">
          <button className="addBtn" onClick={handleAddExpense}>
            Add Balance
          </button>
          <button className="cancelBtn" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddexpenseModal;
