export const API_KEY: string = process.env.VITE_API_KEY || ("" as const);

// グラフに表示する年度の範囲
export const TARGET_MIN_YEAR = 1970 as const;
export const TARGET_MAX_YEAR = 2020 as const;
