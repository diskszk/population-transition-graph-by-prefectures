import { usePrefecturesSetValue } from "../../contexts/PrefecturesContext";
import { Prefecture } from "../../types";

export type ReturnType = {
  addPrefecture: (val: Prefecture) => void;
};

export function usePrefectureAddValue(): ReturnType {
  const setPrefectures = usePrefecturesSetValue();

  return {
    addPrefecture: (prefecture: Prefecture) =>
      setPrefectures((prev) => [...prev, { ...prefecture }]),
  };
}
