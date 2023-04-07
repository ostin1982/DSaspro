import * as Sentry from "@sentry/react";
import { IS_PRODUCTION, SENTRY_DSN } from "@/shared/config";

if (IS_PRODUCTION) {
  const integrations = [new Sentry.BrowserTracing(), new Sentry.Replay()];

  const options = {
    dsn: SENTRY_DSN,
    integrations,
    // Performance Monitoring
    tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
    // Session Replay
    replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
    replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
  };

  Sentry.init(options);
}
