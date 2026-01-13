import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="nav">
      <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
        Home
      </NavLink>

      <NavLink to="/planets" className={({ isActive }) => isActive ? "active" : ""}>
        Planets
      </NavLink>

      <NavLink to="/stars" className={({ isActive }) => isActive ? "active" : ""}>
        Stars
      </NavLink>

      <NavLink to="/nebulae" className={({ isActive }) => isActive ? "active" : ""}>
        Nebulae
      </NavLink>

      <NavLink to="/galaxies" className={({ isActive }) => isActive ? "active" : ""}>
        Galaxies
      </NavLink>
    </nav>
  );
}

/*Notes:
1. App's primary navigation UI.  It answers: where can I go from here?, what sections does this
   app have?, which section am I currently in?
   It is always visible and not tied to a specific route's data.
2. What lives here: navigation links <NavLink />, links to top level routes (i.e., /home, /planets
   /stars, etc), activate state styling logic (isActive), classNames to connect to CSS stylings.
   Do NOT put in here: route definitions, page-specific logic, data lookups, URL params, 
   business logic.
   NavBar's job is movement, not content.
3. By separating: it can live inside RootLayout, it renders once and stays stable, it doesn't
   re-fetch or re-calculate data, page components can stay focused on their own job.
   This prevents "navigation logic leaking into pages".
4. Universal in real world apps.  Can actually get swap outs between layers (public vs auth).
*/
