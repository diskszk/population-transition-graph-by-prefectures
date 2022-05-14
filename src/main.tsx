import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import App from "./App";

// reset css https://github.com/zacanger/styled-reset
const GlobalStyle = createGlobalStyle`
  ${reset};
`;

const el = document.getElementById("root");
const queryClient = new QueryClient();

// @typescript-eslint/no-non-null-assertion のwarnを避ける為if文を追加
if (el) {
  ReactDOM.createRoot(el).render(
    <React.StrictMode>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </React.StrictMode>
  );
}
