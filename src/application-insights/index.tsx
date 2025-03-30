import React from "react";
import { ApplicationInsights } from "@microsoft/applicationinsights-web";
import {
  AppInsightsContext,
  AppInsightsErrorBoundary,
  ReactPlugin,
} from "@microsoft/applicationinsights-react-js";

const reactPlugin = new ReactPlugin();

const appInsights = new ApplicationInsights({
  config: {
    connectionString: "YOUR_CONNECTION_STRING_GOES_HERE",
    extensions: [reactPlugin],
    enableAutoRouteTracking: true,
  },
});

function loadAppInsights() {
  try {
    appInsights.loadAppInsights();
  } catch (error) {
    console.error(error);
  }
}

export function AppInsightsProvider({ children }: React.PropsWithChildren) {
  React.useEffect(loadAppInsights, []);

  return (
    <AppInsightsContext.Provider value={reactPlugin}>
      <ErrorBoundary>{children}</ErrorBoundary>
    </AppInsightsContext.Provider>
  );
}

export function ErrorBoundary({ children }: React.PropsWithChildren) {
  return (
    <AppInsightsErrorBoundary
      onError={() => <h1>I believe something went wrong</h1>}
      appInsights={reactPlugin}
    >
      <>{children}</>
    </AppInsightsErrorBoundary>
  );
}
