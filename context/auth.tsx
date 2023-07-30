import React, { useEffect, useMemo, useState } from "react";
import { supabase } from "@app/config/supaClient";
import { useRouter } from "next/router";
import { User } from "@supabase/supabase-js";
import { toast } from "sonner";
import { QueryClient, useQueryClient } from "@tanstack/react-query";

type Itype = {
  children: React.ReactNode;
};

type IProp = {
  login: (
    name?: string,
    password?: string,
    type?: "IN" | "UP"
  ) => Promise<void>;
  logout: () => Promise<void>;
  data: User | null;
};

export const AuthContext = React.createContext({} as IProp);

export const AuthCtx = ({ children }: Itype) => {
  const [data, setData] = useState<User | null>(null);
  const router = useRouter();
  async function signInWithEmail(
    email: string = "",
    password: string = "",
    type: "UP" | "IN" = "UP"
  ) {
    if (type === "IN") {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      if (error) {
        toast.error("login failed");
      } else {
        toast("Login successfull");
        setData(data.user);
        router.push("/movies");
      }
    }
    if (type === "UP") {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });
      if (error) {
        toast.error("signup failed");
      } else {
        toast("signup successfull");
        setData(data.user);
        router.push("/movies");
      }
    }
  }

  useEffect(() => {
    (async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setData(user);
    })();
  }, []);

  const client = useQueryClient();
  async function signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error("signup failed");
    } else {
      setData(null);
      toast.success("signout successfull");
      router.push("/");
      client.invalidateQueries(["movies"]);
    }
  }

  const values = useMemo(
    () => ({
      data,
      login: signInWithEmail,
      logout: signOut,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [data, signOut]
  );

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
