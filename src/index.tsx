import { render } from "react-dom";
import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "app/providers/ThemeProvider";
import { ErrorBoundary } from "app/providers/ErrorBoundary";
import { StoreProvider } from "app/providers/StoreProvider";
import App from "app/App";
import "shared/config/i18n/i18n";
import "app/styles/index.scss";

render(
  <Suspense fallback={<div>Loading...</div>}>
    <StoreProvider>
      <ErrorBoundary>
        <BrowserRouter>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </ErrorBoundary>
    </StoreProvider>
  </Suspense>,
  document.getElementById("root"),
);
