import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "app/providers/ThemeProvider";
import { ErrorBoundary } from "app/providers/ErrorBoundary";
import { Suspense } from "react";
import App from "app/App";
// Initialization of translations
import "shared/config/i18n/i18n";

render(
  <Suspense fallback={<div>Loading...</div>}>
    <ErrorBoundary>
      <BrowserRouter>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </Suspense>,
  document.getElementById("root"),
);
