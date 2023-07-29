import React, { useContext } from "react";
import { AuthContext } from "@app/context/auth";

export const useAuth = () => {
  const data = useContext(AuthContext);
  if (!data) {
    throw new Error("cant access data");
  }
  return data;
};
