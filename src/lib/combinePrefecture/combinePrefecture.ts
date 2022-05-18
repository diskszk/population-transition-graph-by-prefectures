import { Prefecture, Population } from "../../types";

// TODO: testがない
export function combinePrefecture(
  prefecture: Prefecture,
  populations: Population[]
): Prefecture {
  return { ...prefecture, populations: populations };
}
