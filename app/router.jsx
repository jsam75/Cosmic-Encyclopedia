import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/RootLayout";

import HomePage from "../features/celestial/pages/HomePage";
import CategoryPage from "../features/celestial/pages/CategoryPage";
import ContentPage from "../features/celestial/pages/ContentPage";
import NotFoundPage from "../features/celestial/pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/:category", element: <CategoryPage /> },
      { path: "/:category/:id", element: <ContentPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

/*Notes:
1. router.jsx files are common in real world (may go by different titles, but same principle)
   It's the single source of truth: which URLs your app supports, which components should render
   for each URL, and what is the route hierarchy.  It's a Table of Contents + Traffic Controller
   Why this is good: to keep App.jsx from becoming a bloated "god file", also makes updates more sane.
2. What lives here: route definitions, nesting structure, imports of page components, 
   layout import (RootLayout.jsx)
   Do Not put in this file: UI markup, data, hooks, business logic (helper fntns, filtering, etc)
3. Standard Production Pattern:
   App.jsx - mount the router
   router.jsx - define the routes
   RootLayout.jsx - shared shell + Outlet
*/