import "@app/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { Toaster } from "sonner";
import { AuthCtx } from "@app/context/auth";
import { useState } from "react";
import Router from "next/router";
import { Loader } from "@app/components";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setLoading] = useState(false);

  // listening for route change events
  Router.events.on("routeChangeStart", () => {
    // when route change loading screen popup
    setLoading(true);
  });
  Router.events.on("routeChangeComplete", () => {
    setLoading(false);
  });

  if (isLoading) {
    return (
      <QueryClientProvider client={queryClient}>
        <AuthCtx>
          <Toaster />
          <Loader />
          <div className="d-none">
            <Component {...pageProps} />
          </div>
        </AuthCtx>
      </QueryClientProvider>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <AuthCtx>
        <Toaster />
        <Component {...pageProps} />
      </AuthCtx>
    </QueryClientProvider>
  );
}
