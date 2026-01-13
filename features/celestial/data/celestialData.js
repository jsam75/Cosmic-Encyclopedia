export const CELESTIAL = {
  planets: [
    {
      id: "earth",
      title: "Earth",
      content: "Earth is the only known planet to support life."
    },
    {
      id: "mars",
      title: "Mars",
      content: "Mars is often called the Red Planet."
    }
  ],

  stars: [
    {
      id: "sun",
      title: "The Sun",
      content: "The Sun is the star at the center of our solar system."
    }
  ],

  galaxies: [
    {
      id: "milky-way",
      title: "Milky Way",
      content: "The Milky Way is the galaxy that contains our solar system."
    }
  ]
};

/*Notes:
1. data files are an app's data source. It answers: what information exists in the app?,
   what categories are valid? what items belong to each category?
2. What lives here: structured, predictable data (CELESTIAL object), stable identifiers,
   content fields, category groupings.
   Do NOT put in here: JSX, components, hooks, routing logic, UI concerns.
3. THIS FILE SHOULD BE PURE JAVASCRIPT!
4. This is part of the complex data separation architecture.  The pages don't care where the 
   data comes from- they only care about it's shape. (object-nested, array-flat, etc)
5. In the real world, data files evolve into: API calls, database queries, services, repositories.
   But, the "consumer code" (i.e., CategoryPage, ContentPage) barely changes- good architecture.
 
*/
