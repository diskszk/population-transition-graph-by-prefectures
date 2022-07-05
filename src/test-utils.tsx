import { ReactNode } from "react";
import { DatasetsProvider } from "./contexts/DatasetsProvider";

export const DatasetContextWrapper = (props: { children: ReactNode }) => (
  <DatasetsProvider>{props.children}</DatasetsProvider>
);
