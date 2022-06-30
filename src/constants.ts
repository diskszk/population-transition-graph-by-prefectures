export const API_KEY: string = process.env.VITE_API_KEY || ("" as const);

// グラフに表示する年度の範囲
export const TARGET_MIN_YEAR = 1970 as const;
export const TARGET_MAX_YEAR = 2020 as const;

export const GRAPH_LINE_COLORS = [
  "rgba(255, 99, 132, 0.2)",
  "rgba(255, 159, 64, 0.2)",
  "rgba(255, 205, 86, 0.2)",
  "rgba(75, 192, 192, 0.2)",
  "rgba(54, 162, 235, 0.2)",
  "rgba(153, 102, 255, 0.2)",
  "rgba(201, 203, 207, 0.2)",
  "rgba(255,182,193, 0.2)",
  "rgba(135,206,250, 0.2)",
  "rgba(0, 255, 0, 0.2)",
];

export const COLOR_CODE = {
  spaceGray: "rgba(201, 203, 207, 0.2)",
};
