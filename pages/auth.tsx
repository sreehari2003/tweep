import { Form, Navbar } from "@app/components";
import { useAuth } from "@app/hooks/useAuth";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Auth = () => {
  const router = useRouter();
  const ctx = useAuth();
  useEffect(() => {
    if (ctx.data) {
      router.push("/movies");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ctx.data]);
  return (
    <div className="h-full flex flex-col w-full items-center justify-center mt-8">
      <Navbar />
      <div className="mt-4 w-full">
        <Form />
      </div>
    </div>
  );
};

export default Auth;
