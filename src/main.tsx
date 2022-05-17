import ReactDOM from "react-dom/client";
import { App } from "./App";

const el = document.getElementById("root");

// @typescript-eslint/no-non-null-assertion のwarnを避ける為if文を追加
if (!el) {
  throw new Error("Failed to find the root element");
}
ReactDOM.createRoot(el).render(<App />);
