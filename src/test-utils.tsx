import { ReactNode } from "react";
import { DatasetsProvider } from "./contexts/DatasetsProvider";
import { PrefecturesProvider } from "./contexts/PrefecturesContext";

export const ContextWrapper = (props: { children: ReactNode }) => (
  <PrefecturesProvider>{props.children}</PrefecturesProvider>
);

export const DatasetContextWrapper = (props: { children: ReactNode }) => (
  <DatasetsProvider>{props.children}</DatasetsProvider>
);
