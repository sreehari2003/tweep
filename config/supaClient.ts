import { createClient } from "@supabase/supabase-js";
import { ENV } from "@app/config/env";
import { deleteCookie, getCookie, setCookie } from "cookies-next";

export const supabase = createClient(ENV.uri, ENV.anon, {
  auth: {
    storageKey: "supabase-auth-token",
    storage: {
      // @ts-ignore
      getItem(key) {
        return getCookie(key);
      },
      setItem(key, value) {
        return setCookie(key, value, {
          httpOnly: false,
          sameSite: "lax",
          maxAge: Date.now() + 1000 * 60 * 60 * 24 * 365,
          expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365),
          secure:
            typeof document !== "undefined" &&
            document.location?.protocol === "https",
        });
      },
      removeItem(key) {
        return deleteCookie(key);
      },
    },
  },
});
