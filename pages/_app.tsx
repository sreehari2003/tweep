import "@app/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { Toaster } from "sonner";
import { AuthCtx } from "@app/context/auth";
import { useEffect, useState } from "react";
import { DefaulSeo } from "@app/components/DefaulSeo";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthCtx>
        <DefaulSeo />
        <Toaster />
        <Component {...pageProps} />
      </AuthCtx>
    </QueryClientProvider>
  );
}
