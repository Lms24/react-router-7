import * as Sentry from "@sentry/node";

Sentry.init({
  dsn: "https://092f43a2a3be487ebb1c52dc13fb4cb2@o447951.ingest.us.sentry.io/4504956706619392",
  tracesSampleRate: 1.0, // Capture 100% of the transactions
  debug: true,
});
