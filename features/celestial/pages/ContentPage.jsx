import { useParams } from "react-router-dom";
import { CELESTIAL } from "../data/celestialData";
import NavigateBackButton from "../../../app/components/NavigateBackButton";

export default function ContentPage() {
  const { category, id } = useParams();

  const items = CELESTIAL[category];
  const item = items?.find((obj) => obj.id === id);

  if (!items) {
    return (
      <div>
      <h2>Unknown category</h2>
      <Link to="/">Go Home</Link>
      </div>
    );
  }

    if (!item) {
      return (
        <div>
        <NavigateBackButton />
          <h2>Not Found</h2>
          <p>No entry for "{id}" in "{category}".</p>
        </div>
      );
    }

    return (
      <div>
        <NavigateBackButton />
        <h1>{item.title}</h1>
        <p>{item.content}</p>
      </div>
    );
  }

  /*Notes:
  1. This type of page is the detail page for: /:category/:id, it reads both URL params:
     category and id, it finds the one specific object user clicked, it displays the "facts"
     If CategoryPage is the "inventory shelf", then ContentPage is the "product page"
  2. What lives here: useParams() to read category + id, lookup logic (get category list, find item)
     "not found" handling, NavigateBackButton for better UX.
     Do Not put this here: whole dataset definition (keep in /data), list mapping UI (that's 
     CategoryPage), router setup (router.jsx), global nav/layout
  3. Exists to separate "many items" from "one item".  Very common in real world apps.
  */