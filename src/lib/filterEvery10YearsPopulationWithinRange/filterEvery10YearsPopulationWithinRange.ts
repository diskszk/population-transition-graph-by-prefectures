import { TARGET_MIN_YEAR, TARGET_MAX_YEAR } from "../../constants";
import { Population } from "../../types";

export function filterEvery10YearsPopulationWithinRange(
  populations: Population[]
): Population[] {
  // 1970年以降、2020年以前のデータをfilterする
  const filteredPopulations = populations.filter(
    ({ year }) => year >= TARGET_MIN_YEAR && year <= TARGET_MAX_YEAR
  );

  // 10年ごとのデータをフィルターする(XX00年, XX10年, ...)
  const every10YearsPopulations = filteredPopulations.filter(
    ({ year }) => year % 10 === 0
  );

  return every10YearsPopulations;
}
