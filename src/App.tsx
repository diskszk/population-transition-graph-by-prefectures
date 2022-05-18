import React, { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { LoadingModal } from "./components/modal/LoadingModal";
import { Home } from "./pages/Home";
import { Modal } from "./partials/Modal";

// reset css https://github.com/zacanger/styled-reset
const GlobalStyle = createGlobalStyle`
  ${reset};
`;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

export const App: React.FC = () => {
  return (
    <React.StrictMode>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <Suspense
          fallback={
            <Modal>
              <LoadingModal />
            </Modal>
          }
        >
          <Home />
        </Suspense>
      </QueryClientProvider>
    </React.StrictMode>
  );
};
