import { Link, useParams } from "react-router-dom";
import { CELESTIAL } from "../data/celestialData";

function isBadCategory(category, data) {
  return !Object.prototype.hasOwnProperty.call(data, category);
}


export default function CategoryPage() {
  const { category } = useParams();

  if (isBadCategory(category, CELESTIAL)){
    return (
      <div>
        <h2>Unknown Category</h2>
        <p>Please choose a valid category.</p>
      </div>
    );
  }

  const items = CELESTIAL[category];

  return (
    <div>
      <h2>Category: {category}</h2>
          <ul>
          {items.map((item) => (
            <li key={item.id}>
              <Link to={`/${category}/${item.id}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
    </div>
  );
}

/*Notes:
1. Called a route-level page component for: /:category, reads URL parameter, shows list view of
   category, creates links to the detail pages (/:category/:id)
   This is very common page to have in the real world, may be titled different, but same idea. 
   This is basically a type of "index page" for a section of the app.
2. What should live here: useParams() to read category, lookup logic CELESTIAL[category],
   basic validation ("unknown category" handling), rendering a list of items, <Link>s to 
   the detail route.
   Do Not put this in here: the dataset object itself (keep in /data), complex helper logic that's
   reused across multiple pages (move to utils/ if it grows), router definitions, global layout/nav
3. This type of page exists to separate "collection view" from "detail view":
   CategoryPage = show me all the planets
   ContentPage= show me Earth
*/
