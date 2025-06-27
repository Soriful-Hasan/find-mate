import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const RoomAvailAbleChart = ({ listingData, theme }) => {
  const isDark = theme === "dark";

  // Count available and not available posts
  const availableCount = listingData.filter(
    (post) => post.availability === "Available"
  ).length;
  const notAvailableCount = listingData.length - availableCount;

  const data = {
    labels: ["Available", "Not Available"],
    datasets: [
      {
        label: "Availability",
        data: [availableCount, notAvailableCount],
        backgroundColor: ["#4BC0C0", "#FF6384"],
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
          color: isDark ? "#ffffff" : "#000000", 
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
      className={`w-full max-w-sm mx-auto p-4 rounded-xl m transition-colors duration-300 ${
        isDark ? "bg-[#2A2E37] text-white" : "bg-white text-black"
      }`}
    >
      <h2 className="text-xl font-semibold mt-4 mb-4 text-center">
        Post Availability Status
      </h2>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default RoomAvailAbleChart;
