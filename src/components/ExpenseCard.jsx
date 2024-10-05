import React, { useState, useEffect } from "react";
import "../App.css";
import TranscationCard from "./transcationCard";
import ExpenseProgress from "./TopExpense";
import AddExpenseModal from "./AddexpenseModal";
import AddWalletModal from "./AddWalletModal";
import ExpenseChart from "./Chart"; // Import the chart component

const ExpenseCard = () => {
  const [isExpenseModalOpen, setIsExpenseModalOpen] = useState(false); // Add Income modal
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false); // Add Expense modal
  const [expenses, setExpenses] = useState([]); // Expenses array
  const [walletBalance, setWalletBalance] = useState(0); // Wallet balance

  // Load data from localStorage when the component mounts
  useEffect(() => {
    const storedExpenses = localStorage.getItem('expenses');
    const storedWalletBalance = localStorage.getItem('walletBalance');

    if (storedExpenses) {
      try {
        setExpenses(JSON.parse(storedExpenses));
      } catch (e) {
        console.error("Error parsing expenses from localStorage:", e);
        setExpenses([]); // Default to an empty array if parsing fails
      }
    }

    if (storedWalletBalance) {
      const parsedBalance = parseFloat(storedWalletBalance);
      setWalletBalance(isNaN(parsedBalance) ? 0 : parsedBalance);
    }
  }, []);

  useEffect(() => {
    if (expenses.length > 0) {
      localStorage.setItem('expenses', JSON.stringify(expenses));
    }
    localStorage.setItem('walletBalance', walletBalance.toString());
  }, [expenses, walletBalance]);

  const handleAddExpenseClick = () => {
    setIsExpenseModalOpen(true);
  };

  const handleAddWalletClick = () => {
    setIsWalletModalOpen(true);
  };

  const handleCloseExpenseModal = () => {
    setIsExpenseModalOpen(false);
  };

  const handleCloseWalletModal = () => {
    setIsWalletModalOpen(false);
  };

  const handleAddIncome = (incomeAmount) => {
    const parsedIncome = parseFloat(incomeAmount);
    if (!isNaN(parsedIncome)) {
      setWalletBalance(walletBalance + parsedIncome);
    }
    setIsExpenseModalOpen(false);
  };

  const handleAddWallet = (newExpense) => {
    if (newExpense && !isNaN(newExpense.amount)) {
      setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
      setWalletBalance(walletBalance - newExpense.amount);
    }
    setIsWalletModalOpen(false);
  };

  return (
    <div className="expenseTrackerContainer">
      {/* Wallet Balance and Expense Summary */}
      <div className="expenseSummary">
        <div className="totalSummary">
          <div className="summaryBox walletBalance">
            <p>
              Wallet Balance: <span className="walletAmount">₹{walletBalance}</span>
            </p>
            <button className="addBtn" onClick={handleAddExpenseClick}>
              + Add Income
            </button>
          </div>
          <div className="summaryBox expenseTotal">
            <p>
              Expenses: <span className="expenseAmount">₹{expenses.reduce((total, exp) => total + exp.amount, 0)}</span>
            </p>
            <button className="addBtn" onClick={handleAddWalletClick}>
              + Add Expense
            </button>
          </div>
        </div>
      </div>

      {/* Recent Transactions and Top Expenses */}
      <div className="transactionsExpenses">
        <TranscationCard expenses={expenses} />
        <ExpenseProgress expenses={expenses} />
        {/* Add the ExpenseChart component */}
        <ExpenseChart expenses={expenses} />
      </div>

      {/* Modals */}
      {isExpenseModalOpen && (
        <AddExpenseModal onClose={handleCloseExpenseModal} onAddExpense={handleAddIncome} />
      )}
      {isWalletModalOpen && (
        <AddWalletModal onClose={handleCloseWalletModal} onAddWallet={handleAddWallet} />
      )}
    </div>
  );
};

export default ExpenseCard;
