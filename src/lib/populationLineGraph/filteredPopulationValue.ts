import { Prefecture } from "../../types";

const TARGET_MIN_YEAR = 1970;
const TARGET_MAX_YEAR = 2020;

export function filteredPopulationValue(prefecture: Prefecture): number[] {
  const filteredPopulations = prefecture.populations.filter(
    ({ year }) => year >= TARGET_MIN_YEAR && year <= TARGET_MAX_YEAR
  );

  return filteredPopulations.map(({ value }) => value);
}
