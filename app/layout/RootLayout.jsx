import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function RootLayout() {
  return (
    <div>
      <NavBar />
      <main style={{ padding: "1rem" }}>
        <Outlet />
      </main>
    </div>
  );
}

/*Notes:
1. Sometimes called layout route, is the app's shared shell.  It answers: what UI should appear
   on every page? and where do the routed pages render inside that UI?  (i.e., NavBar at top,
   main content area, footer, background, container, etc)
2. <Outlet /> is the "placeholder" where React Router inserts the matched child route. RootLayout
   basically says, "Always render NavBar. Then render whichever page matches the URL inside
   <Outlet />".
3. What lives here: <NavBar />, <Outlet />, global layout wrappers(i.e., <main>, containers, 
   spacing, etc), shared UI that must exist across routes (i.e., header, footer, etc)
   Do NOT put in here: page-specific content, route definitions, data lookup logic, hooks
   RootLayout is all about structure, not content
4. Very common in real world apps.  Actually large apps have multiple layout files (public facing,
   auth layout, app layout for dashboards with logins, etc)
*/