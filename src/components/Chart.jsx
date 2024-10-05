import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register required Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const ExpenseChart = ({ expenses }) => {
  // Prepare data for the chart
  const labels = expenses.map((expense) => expense.category || "Other");
  const amounts = expenses.map((expense) => expense.amount);

  const data = {
    labels,
    datasets: [
      {
        label: "Expenses",
        data: amounts,
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
        borderColor: "#fff",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
    },
  };

  return (
    <div>
      <h3>Expenses Breakdown</h3>
      {/* Pie chart */}
      <Pie data={data} options={options} />
    </div>
  );
};

export default ExpenseChart;
