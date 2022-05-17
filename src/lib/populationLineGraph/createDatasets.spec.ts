import { Prefecture } from "../../types";
import { createDatasets } from "./createDatasets";

describe("createDatasets", () => {
  test("渡された都道府県データ、人口データからグラフ描画用のデータを生成する", () => {
    const data: Prefecture[] = [
      {
        prefCode: 1,
        prefName: "北海道",
        populations: [
          {
            year: 1960,
            value: 10,
          },
          {
            year: 1970,
            value: 100,
          },
          {
            year: 1980,
            value: 200,
          },
          {
            year: 1990,
            value: 300,
          },
          {
            year: 2000,
            value: 400,
          },
          {
            year: 2010,
            value: 500,
          },
          {
            year: 2020,
            value: 600,
          },
          {
            year: 2030,
            value: 700,
          },
        ],
      },
    ];

    const result = createDatasets(data);

    expect(result[0]).toEqual({
      label: "北海道",
      data: [100, 200, 300, 400, 500, 600],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.2)",
    });
  });
});
