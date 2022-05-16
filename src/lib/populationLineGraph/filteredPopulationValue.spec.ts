import { Prefecture } from "../../types";
import { filteredPopulationValue } from "./filteredPopulationValue";

describe("filteredPopulationValue", () => {
  test("人口データの配列を渡すと人口数の配列を返す", () => {
    const data: Prefecture = {
      prefCode: 7,
      prefName: "茨城県",
      populations: [
        {
          year: 1970,
          value: 100,
        },
      ],
    };

    const result = filteredPopulationValue(data);

    expect(result).toEqual([100]);
  });

  test("人口データの配列を渡すと1970年以降2020年以前の人口数を返す", () => {
    const data: Prefecture = {
      prefCode: 7,
      prefName: "茨城県",
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
    };

    const result = filteredPopulationValue(data);

    expect(result).toEqual([100, 200, 300, 400, 500, 600]);
  });
});
