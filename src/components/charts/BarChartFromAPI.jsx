//import React, { useState, useEffect } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const DynamicBarChartWithAPI = () => {
  const [chartData, setChartData] = useState({
    labels: [], // Initialize with empty labels
    datasets: [
      {
        label: "Sales", // Initial label
        data: [], // Empty data array
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    // Fetch data from an API
    const fetchData = async () => {
      try {
        // Example API call (replace with your own API endpoint)
        const response = await axios.get("https://fakestoreapi.com/products");

        // Assume response.data is an array of objects like:
        // [{ month: "January", value: 3000 }, { month: "February", value: 4000 }, ...]
        const fetchedLabels = response.data.map((item) => (item.title).slice(0,4)); // Extract months for x-axis
        const fetchedData = response.data.map((item) => item.price); // Extract sales data for y-axis

        // Update chart data with fetched values
        setChartData({
          labels: fetchedLabels,
          datasets: [
            {
              label: "Sales 2023",
              data: fetchedData, // Dynamic data from API
              backgroundColor: "rgba(153, 102, 255, 0.2)",
              borderColor: "rgba(153, 102, 255, 1)",
              borderWidth: 1,
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData(); // Call the function to fetch data
  }, []); // Empty dependency array to run once on mount

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: true, position: "top" },
      title: { display: true, text: "Sales Data from API" },
    },
    scales: {
      x: { beginAtZero: true },
      y: { beginAtZero: true,
        
    ticks:{
        stepSize:32     
    }

       },
    },
  };

  return <Bar data={chartData} options={chartOptions} />;
};

export default DynamicBarChartWithAPI;
