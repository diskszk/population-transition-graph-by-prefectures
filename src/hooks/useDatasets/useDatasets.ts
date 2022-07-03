import { Dispatch, Reducer, useReducer } from "react";
import { Dataset } from "../../types";

export type ReturnType = {
  datasets: Dataset[];
  dispatch: Dispatch<Action>;
};

// add/removeに分ける必要あり？
export const UPDATE_DATASET = "UPDATE_DATASET" as const;
export const TOGGLE_HIDDEN = "TOGGLE_HIDDEN" as const;

type UpdateDatasetAction = {
  type: typeof UPDATE_DATASET;
  payload: Dataset[];
};
type ToggleHiddenAction = {
  type: typeof TOGGLE_HIDDEN;
  payload: number;
};

type Action = UpdateDatasetAction | ToggleHiddenAction;

const reducer: Reducer<Dataset[], Action> = (state, action): Dataset[] => {
  switch (action.type) {
    case UPDATE_DATASET: {
      return [...action.payload];
    }

    case TOGGLE_HIDDEN: {
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

export function useDatasets(): ReturnType {
  const [state, dispatch] = useReducer(reducer, []);

  return {
    datasets: state,
    dispatch,
  };
}
