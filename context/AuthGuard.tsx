import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@app/hooks/useAuth";

type Itype = {
  children: React.ReactNode;
};

export const AuthGuard = ({ children }: Itype): JSX.Element => {
  const router = useRouter();
  const ctx = useAuth();
  useEffect(() => {
    if (!ctx.data) {
      router.push("/auth");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ctx.data, router]);

  return <>{children}</>;
};
