import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function DoughnutChart() {

    const data={
        labels:["ram", "sham","dhawan","neel","nitin"],
        datasets:[{
            label:"vpotes in election 2014",
            data:[56,73,54,98,65],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(215, 129, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)'],
                borderColor:  'rgba(255, 99, 132, 1)',
                hoverBackgroundColor: "rgba(255, 99, 132, 0.5)", // Color on hover
                hoverBorderColor: "rgba(255, 99, 132, 1)",

        },{
            label:"votes in election 2024",
            data:[56,73,54,98,65],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(215, 129, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)'],
                borderColor:  'rgba(255, 63, 132, 1)',
                hoverBackgroundColor: "rgba(255, 99, 132, 0.5)", // Color on hover
                hoverBorderColor: "rgba(255, 99, 132, 1)",

        }]

    };
    const options={
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: "votes in  election 2024",
          },
        },
       
    }
  return (
    <>
    <Doughnut data={data} options={options} />
    
    </>
  )
}

export default DoughnutChart