import { Form, Navbar } from "@app/components";
import React from "react";

const Auth = () => {
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
