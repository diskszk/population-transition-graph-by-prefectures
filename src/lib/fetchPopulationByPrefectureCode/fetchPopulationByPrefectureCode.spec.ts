import { Population } from "../../types";
import { fetchPopulationByPrefectureCode } from "./fetchPopulationByPrefectureCode";

describe("fetchPopulationByPrefectureCode", () => {
  let result: Population[];

  beforeEach(async () => {
    result = await fetchPopulationByPrefectureCode(1);
  });

  test("都道府県コードと合致する都道府県の年代別の人口を取得する", () => {
    // 北海道の1960年の1960年の人口は5039206人
    expect(result[0].value).toBe(5039206);
  });
});
