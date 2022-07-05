import { Prefecture } from "../../types";
import { convertToDatasetFromPrefectures } from "./convertToDatasetFromPrefectures";

describe("convertToDatasetFromPopulations", () => {
  test("渡された都道府県データ、人口データからグラフ描画用のデータを生成する", () => {
    const data: Prefecture[] = [
      {
        prefCode: 1,
        prefName: "北海道",
      },
    ];

    const result = convertToDatasetFromPrefectures(data);

    expect(result[0]).toEqual({
      label: "北海道",
      data: [0],
      borderColor: "rgba(255, 99, 132, 0.2)",
      prefCode: 1,
      hidden: false,
    });
  });
});
