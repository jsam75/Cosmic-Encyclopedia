import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './app/App.jsx'

console.log("react version:", React.version);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

/*Notes:
1. Main.jsx is the entry point where React attaches to the DOM. It answers: where does React
   mount in the HTML?, what is the first React component?
2. It typically grabs #root, creates the React root, renders <App /> (often inside 
   <StrictMode>).
3. What lives here: createRoot(), <StrictMode>, import App
   Do NOT put in here: routing logic, app UI, feature logic
*/
