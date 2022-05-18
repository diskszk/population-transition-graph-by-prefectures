import { useMutation } from "react-query";
import { fetchPopulationByPrefectureCode } from "../../lib/fetchPopulationByPrefectureCode";
import { Population } from "../../types";

export function useFetchPopulationByPrefectureCode() {
  return useMutation(
    (prefCode: number) => fetchPopulationByPrefectureCode(prefCode),
    {
      onSuccess: (data: Population[]) => {
        if (data) {
          console.log(data);
          return;
        }
        return;
      },
    }
  );
}
