import { Prefecture } from "../../types";
import { filterPopulationValue } from "./filterPopulationValue";

describe("filterPopulationValue", () => {
  test("人口データの配列を渡すと人口数の配列を返す", () => {
    const data: Prefecture = {
      prefCode: 7,
      prefName: "茨城県",
    };

    const result = filterPopulationValue(data);

    expect(result).toEqual([0]);
  });

  test("人口データの配列を渡すと1970年以降2020年以前の10年ごとの人口数を返す", () => {
    const data: Prefecture = {
      prefCode: 7,
      prefName: "茨城県",
    };

    const result = filterPopulationValue(data);

    expect(result).toEqual([0]);
  });
});
