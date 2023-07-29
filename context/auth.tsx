import React, { useMemo, useState } from "react";
import { supabase } from "@app/config/supaClient";
import { useRouter } from "next/router";
import { User } from "@supabase/supabase-js";

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
        alert("Login failed");
      } else {
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
        alert("signup failed");
      } else {
        setData(data.user);
        router.push("/movies");
      }
    }
  }

  async function signOut() {
    const { error } = await supabase.auth.signOut();
    console.error(error);
  }

  const values = useMemo(
    () => ({
      data,
      login: signInWithEmail,
      logout: signOut,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
