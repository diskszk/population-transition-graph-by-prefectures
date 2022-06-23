import { Prefecture } from "../../types";
import { createDatasets } from "./createDatasets";

describe("createDatasets", () => {
  test("渡された都道府県データ、人口データからグラフ描画用のデータを生成する", () => {
    const data: Prefecture[] = [
      {
        prefCode: 1,
        prefName: "北海道",
        populations: [
          { year: 1960, value: 5039206 },
          { year: 1965, value: 5171800 },
          { year: 1970, value: 5184287 },
          { year: 1975, value: 5338206 },
          { year: 1980, value: 5575989 },
          { year: 1985, value: 5679439 },
          { year: 1990, value: 5643647 },
          { year: 1995, value: 5692321 },
          { year: 2000, value: 5683062 },
          { year: 2005, value: 5627737 },
          { year: 2010, value: 5506419 },
          { year: 2015, value: 5381733 },
          { year: 2020, value: 5216615 },
          { year: 2025, value: 5016554 },
          { year: 2030, value: 4791592 },
          { year: 2035, value: 4546357 },
          { year: 2040, value: 4280427 },
          { year: 2045, value: 4004973 },
        ],
      },
    ];

    const result = createDatasets(data);

    expect(result[0]).toEqual({
      label: "北海道",
      data: [5184287, 5575989, 5643647, 5683062, 5506419, 5216615],
      borderColor: "rgba(255, 99, 132, 0.2)",
      prefCode: 1,
    });
  });
});
