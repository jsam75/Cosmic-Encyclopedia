import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      <h1>404 — Not Found</h1>
      <p>That page does not exist.</p>
      <Link to="/">Go Home</Link>
    </div>
  );
}

/*Notes:
1. App's safety net. It answers: what happens if the user goes to a URL we don't recognize?,
   how do we fail gracefully instead of crashing or showing nothing?
   This page is rendered when no route matches (uses the "*" route in router.jsx)
2. What lives here: a clear 404/Not Found message, a short explanation, a way out.
   Do NOT put in here: data lookups, hooks, category/item logic, navigation menus
   This page should be simple, static, and predictable.
3. It exists to give app: controlled failure state, better UX, clearer debugging
   during development.
4. Universal in real world apps.
*/
