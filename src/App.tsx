import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import {
  QueryClient,
  QueryClientProvider,
  QueryErrorResetBoundary,
} from "react-query";
import { ErrorModal } from "./components/modal/ErrorModal";
import { LoadingModal } from "./components/modal/LoadingModal";
import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/GlobalStyles";

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
        <Suspense fallback={<LoadingModal />}>
          <QueryErrorResetBoundary>
            {({ reset }) => (
              <ErrorBoundary
                onReset={reset}
                fallbackRender={({ resetErrorBoundary, error }) => (
                  <ErrorModal
                    error={error}
                    onClick={() => resetErrorBoundary()}
                  />
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
