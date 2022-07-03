import { Reducer, useReducer } from "react";
import { createDatasets } from "../../lib/createDatasets";
import { Dataset, Prefecture } from "../../types";

export type ReturnType = {
  datasets: Dataset[];
  toggleHidden: (code: number) => void;
};

type Action = {
  type: "TOGGLE_HIDDEN";
  payload: number;
};

const reducer: Reducer<Dataset[], Action> = (state, action): Dataset[] => {
  switch (action.type) {
    case "TOGGLE_HIDDEN": {
      return state.map((item) =>
        item.prefCode === action.payload
          ? { ...item, hidden: !item.hidden }
          : item
      );
    }
    default: {
      return state;
    }
  }
};

export function useDatasets(prefectures: Prefecture[]): ReturnType {
  const [state, dispatch] = useReducer(reducer, createDatasets(prefectures));

  return {
    datasets: state,
    toggleHidden: (code: number) =>
      dispatch({ type: "TOGGLE_HIDDEN", payload: code }),
  };
}
