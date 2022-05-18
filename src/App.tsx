import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import {
  QueryClient,
  QueryClientProvider,
  QueryErrorResetBoundary,
} from "react-query";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { ErrorModal } from "./components/modal/ErrorModal";
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
          <QueryErrorResetBoundary>
            {({ reset }) => (
              <ErrorBoundary
                onReset={reset}
                fallbackRender={({ resetErrorBoundary, error }) => (
                  <Modal>
                    <ErrorModal
                      error={error}
                      onClick={() => resetErrorBoundary()}
                    />
                  </Modal>
                )}
              >
                <Home />
              </ErrorBoundary>
            )}
          </QueryErrorResetBoundary>
        </Suspense>
      </QueryClientProvider>
    </React.StrictMode>
  );
};
