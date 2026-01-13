import { useNavigate } from "react-router-dom";

export default function NavigateBackButton() {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(-1)} style={{ marginBottom: "1rem" }}>
      ← Back
    </button>
  );
}

/*Notes:
1. Small, reusable utility component. It answers: how do I get back from where I just was?
   It's not route-specific and not data-specific.
2. What lives here: useNavigate(), simple button UI, logic like navigate(-1).
   Do NOT put in here: page content, route params, data lookups, conditional rendering based
   on category/id.
   Keep this component ready to drop in and use anywhere.
3. This page exists to centralize logic (so you don't repeat it on every page).  Makes it better
   to maintain.  Follows the DRY principle.
4. Universal in real world apps.  Can have multiple types of back buttons (icon, pagination,
   modal close, etc)
5. As app grows, folder structure adjusts accordingly. This may live in components, ui, or common
  folders for example.
*/