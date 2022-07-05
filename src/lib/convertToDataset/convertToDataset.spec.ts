import { convertToDataset } from "./convertToDataset";
import { Dataset, Population, Prefecture } from "../../types";

describe("convertToDataset", () => {
  const prefecture: Prefecture = {
    prefName: "北海道",
    prefCode: 1,
    populations: [],
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
  ];

  test("Dataset型の戻り値を返す", () => {
    const dataset: Dataset = {
      label: "北海道",
      data: [5184287, 5575989, 5643647, 5683062, 5506419, 5216615],
      prefCode: 1,
      hidden: false,
    };

    expect(convertToDataset(prefecture, populations)).toEqual(dataset);
  });
});
