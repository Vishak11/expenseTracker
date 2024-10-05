import React, { useState } from 'react';
import '../App.css'; // Add necessary styles

const AddWalletModal = ({ onClose, onAddWallet }) => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');

  const handleAddWallet = () => {
    const newExpense = {
      name: title, // 'title' mapped to 'name'
      amount: parseFloat(price), // 'price' mapped to 'amount'
      category,
      date
    };
    onAddWallet(newExpense); // Call the parent function to add the expense
    onClose(); // Close the modal after adding the expense
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <h2 className="modalTitle">Add Expense</h2>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="modalInput"
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="modalInput"
        />
        <input
          type="text"
          placeholder="Select Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="modalInput"
        />
        <input
          type="text"
          placeholder="dd/mm/yyyy"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="modalInput"
        />
        <div className="modalActions">
          <button className="addBtn" onClick={handleAddWallet}>
            Add Expense
          </button>
          <button className="cancelBtn" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddWalletModal;
