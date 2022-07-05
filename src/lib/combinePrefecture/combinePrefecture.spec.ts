import { Population, Prefecture } from "../../types";
import { combinePrefecture } from "./combinePrefecture";

describe("combinePrefecture", () => {
  test("県データに人口データを注入する", () => {
    const pref: Prefecture = {
      prefCode: 1,
      prefName: "北海道",
    };
    const populations: Population[] = [
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
    ];

    expect(combinePrefecture(pref, populations)).toEqual({
      prefCode: 1,
      prefName: "北海道",
    });
  });
});
