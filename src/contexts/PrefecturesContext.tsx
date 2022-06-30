import { ReactNode, createContext, useState } from "react";
import { Prefecture } from "../types";

export const prefecturesContext = createContext<Prefecture[]>([]);
export const setPrefecturesContext = createContext<
  React.Dispatch<React.SetStateAction<Prefecture[]>>
>(() => undefined);

type Props = {
  children: ReactNode;
};

export const PrefecturesProvider: React.FC<Props> = ({ children }) => {
  const [prefectures, setPrefectures] = useState<Prefecture[]>([]);

  return (
    <prefecturesContext.Provider value={prefectures}>
      <setPrefecturesContext.Provider value={setPrefectures}>
        {children}
      </setPrefecturesContext.Provider>
    </prefecturesContext.Provider>
  );
};
