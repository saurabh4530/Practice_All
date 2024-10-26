//@ts-nocheck
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  plugins,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BarChart() {
  const data = {
    labels: ["jan", "feb", "march", "april", "may", "june"],
    datasets: [
      {
        label: "sale in 2024 ",
        data: [16, 28, 30, 40, 15, 25],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255, 99, 132, 0.5)", // Color on hover
        hoverBorderColor: "rgba(255, 99, 132, 1)",
      },
      {
        label: "sale in 2020 ",
        data: [10, 20, 30, 40, 15, 25],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255, 99, 132, 0.5)", // Color on hover
        hoverBorderColor: "rgba(255, 99, 132, 1)",
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        label: "sales data",
        position: "bottom",
      },
    },
    scales: {
      y: {
        beginAtZero: true,

        ticks: {
          color: "blue",
          stepSize: 12,
        },
      },
      x: {
        beginAtZero: true,
      },
    },
  };
  return <Bar data={data} options={options} />;
}

export default BarChart;
