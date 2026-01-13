import { RouterProvider } from "react-router-dom";
import { router } from "./router";

export default function App() {
  return <RouterProvider router={router} />;
}



/*Notes:
1. The bootstrapper of the app.  It answers: what is the top-level thing my app renders?
   In this case, we only needed to provide the router to the app.
2. What lives here: top-level providers: RouterProvider, theme provider, auth providers, and 
   minimal global wrappers, if needed.
   Do NOT put in here: route definitions, page content, data
3. Extremely common.  App.jsx can appear "thin" and with mostly providers
*/