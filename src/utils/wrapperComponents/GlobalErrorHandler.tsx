import { useEffect } from "react";

const GlobalErrorHandler = () => {
  useEffect(() => {
    const handleGlobalError = (event: ErrorEvent) => {
      console.error("Global Error caught: ", event.message);
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      console.error("Unhandled Promise Rejection: ", event.reason);
    };

    window.addEventListener("error", handleGlobalError);
    window.addEventListener("unhandledrejection", handleUnhandledRejection);

    return () => {
      window.removeEventListener("error", handleGlobalError);
      window.removeEventListener(
        "unhandledrejection",
        handleUnhandledRejection
      );
    };
  }, []);

  return null;
};

export default GlobalErrorHandler;
