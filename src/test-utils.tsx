import { ReactNode } from "react";
import { PrefecturesProvider } from "./contexts/PrefecturesContext";

export const ContextWrapper = (props: { children: ReactNode }) => (
  <PrefecturesProvider>{props.children}</PrefecturesProvider>
);
