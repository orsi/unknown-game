/** @jsx h */
import { serve } from "https://deno.land/std@0.133.0/http/server.ts";
import { router } from "https://crux.land/router@0.0.11";
import { h, ssr } from "https://crux.land/nanossr@0.0.4";
import App from "./src/App.tsx";

serve(router(
  {
    "/": () => ssr(() => <App />),
  },
  () => ssr(() => <App />),
));
console.log("Serve at http://localhost:8000");
