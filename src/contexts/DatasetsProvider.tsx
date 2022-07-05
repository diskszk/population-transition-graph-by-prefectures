import { createContext, Dispatch, ReactNode, useReducer } from "react";
import { Dataset } from "../types";
import { Action, reducer } from "../reducers/datasetsReducer";

export const DatasetsValueContext = createContext<Dataset[]>([]);
export const DatasetsSetContext = createContext<Dispatch<Action>>(() => void 0);

type Props = {
  children: ReactNode;
};

export const DatasetsProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <DatasetsValueContext.Provider value={state}>
      <DatasetsSetContext.Provider value={dispatch}>
        {children}
      </DatasetsSetContext.Provider>
    </DatasetsValueContext.Provider>
  );
};
