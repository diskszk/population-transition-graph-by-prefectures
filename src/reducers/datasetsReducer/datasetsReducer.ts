import { Reducer } from "react";
import { Dataset } from "../../types";

export const ADD_DATASET = "ADD_DATASET" as const;
export const REMOVE_DATASET = "REMOVE_DATASET" as const;
export const TOGGLE_HIDDEN = "TOGGLE_HIDDEN" as const;

type AddDatasetAction = {
  type: typeof ADD_DATASET;
  payload: Dataset;
};
type RemoveDatasetAction = {
  type: typeof REMOVE_DATASET;
  payload: number;
};
type ToggleHiddenAction = {
  type: typeof TOGGLE_HIDDEN;
  payload: number;
};

export type Action =
  | AddDatasetAction
  | RemoveDatasetAction
  | ToggleHiddenAction;

export const reducer: Reducer<Dataset[], Action> = (
  state,
  action
): Dataset[] => {
  switch (action.type) {
    case ADD_DATASET: {
      return [...state, { ...action.payload }];
    }

    case REMOVE_DATASET: {
      return state.filter(({ prefCode }) => prefCode !== action.payload);
    }

    case TOGGLE_HIDDEN: {
      return state.map((item) =>
        item.prefCode === action.payload
          ? { ...item, hidden: !item.hidden }
          : item
      );
    }

    default: {
      throw new Error(`Unhandled action type`);
    }
  }
};
