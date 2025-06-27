// PostAmountChart.jsx
import React, { useContext } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { userContext } from "../../../Authentication/AuthProvider";

ChartJS.register(ArcElement, Tooltip, Legend);

const AmountChart = ({ listingData }) => {
  const { theme } = useContext(userContext);
  const isDark = theme === "dark";

  const labels = listingData.map((post) => post.title);
  const amounts = listingData.map((post) => parseFloat(post.amount));

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Post Rent Amount",
        data: amounts,
        backgroundColor: [
          "#36A2EB",
          "#FF6384",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: isDark ? "#ffffff" : "#000000", // Legend text color
        },
      },
      tooltip: {
        backgroundColor: isDark ? "#333" : "#fff",
        titleColor: isDark ? "#fff" : "#000",
        bodyColor: isDark ? "#ddd" : "#333",
      },
    },
  };

  return (
    <div
      className={`w-full max-w-sm mx-auto p-4 rounded-xl shadow-sm transition-colors duration-300 ${
        isDark ? "bg-[#2A2E37] text-white" : "bg-white text-black"
      }`}
    >
      <h2 className="text-xl font-semibold mt-4 mb-4 text-center">
        Post Rent Amount Chart
      </h2>
      <Doughnut data={chartData} options={options} />
    </div>
  );
};

export default AmountChart;
