import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "right" as const,
      labels: {
        boxHeight: 1,
      },
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      display: true,
      title: {
        display: true,
        text: "年度",
      },
    },
    y: {
      display: true,
      title: {
        display: true,
        text: "人口数",
      },
    },
  },
};

export const labels = ["", "1980", "1990", "2000", "2010", "2020"];

export default ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
