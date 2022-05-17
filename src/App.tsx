import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { Home } from "./pages/Home";

// reset css https://github.com/zacanger/styled-reset
const GlobalStyle = createGlobalStyle`
  ${reset};
`;

const queryClient = new QueryClient();

export const App: React.FC = () => {
  return (
    <React.StrictMode>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    </React.StrictMode>
  );
};
