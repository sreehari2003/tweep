import React from "react";
import { DefaultSeo } from "next-seo";

export const DefaulSeo = () => {
  return (
    <DefaultSeo
      openGraph={{
        type: "website",
        locale: "en_IE",
        url: "https://tweep-ten.vercel.app/",
        siteName: "tweep",
      }}
      title="tweep"
      description="tweep is defi protocol web app with movie collection, you can use email password to login, we are used my multiple companies world wide including mgnr"
    />
  );
};
