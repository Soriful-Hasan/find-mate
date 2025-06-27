import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const LikeChart = ({ listingData, theme }) => {
  const isDark = theme === "dark";
  const backgroundColors = [
    "#4CAF50",
    "#FF9800",
    "#03A9F4",
    "#E91E63",
    "#9C27B0",
    "#00BCD4",
    "#FFEB3B",
    "#795548",
    "#2196F3",
    "#FF5722",
  ];

  const chartData = {
    labels: listingData?.map((item) => item.title),
    datasets: [
      {
        label: "Likes",
        data: listingData?.map((item) => item.like),
        backgroundColor: listingData?.map(
          (_, i) => backgroundColors[i % backgroundColors.length]
        ),
        borderRadius: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: theme === "dark" ? "#ffffff" : "#000000", // label text color
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
          color: theme === "dark" ? "#ffffff" : "#000000", // y-axis text color
        },
        grid: {
          color: theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
        },
      },
      x: {
        ticks: {
          color: theme === "dark" ? "#ffffff" : "#000000", // x-axis text color
        },
        grid: {
          color:
            theme === "dark" ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)",
        },
      },
    },
  };

  return (
    <div
      className={`w-full mb-10 mx-auto px-4 py-6 rounded-2xl  transition-colors duration-300 ${
        isDark ? "bg-[#2A2E37] text-white" : "bg-white text-black"
      }`}
    >
      <h2 className="text-xl font-bold mb-4 text-center">Likes per Listing</h2>

      {/* Responsive Chart Container */}
      <div className="relative h-[300px] sm:h-[400px] md:h-[500px]">
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default LikeChart;
