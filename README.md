# Cosmic-Encyclopedia
Springboard SEC React Router Exercise

This exercise was a doozy!  I think I accomplished the entire checklist of "what not to do".  I kept a Word document going to describe the issues and will paste them in here.  

I drilled down into architecture for this exercise.  So far, the course videos have not really focused on this, however, I think this is part of the battle for the build.  As apps get more complex, knowing what to put where or what should live inside a particular file becomes a tangly mess.  I did not have any brain space left over for CSS this time.

I also put architecture summary notes for every specific file in this exercise.  These can act as breadcrumbs (no pun intended) to give me something to refer to later on.

Here is the file structure for this exercise:

src/
  main.jsx
  index.css
  app/
    App.jsx
    router.jsx
    layout/
      RootLayout.jsx
    components/
      NavBar.jsx
      NavigateBackButton.jsx
  features/
    celestial/
      data/
        celestialData.js
      pages/
        HomePage.jsx
        CategoryPage.jsx
        ContentPage.jsx
        NotFoundPage.jsx


Here are my notes for trouble-shooting the significant routing issues I had:

1.	As apps get more complex, move away from using “Components” folder.  Technically everything is a component, and the term becomes too vague.   Industry standard is to use feature-based architecture.  Name folders according to their role, not by React terms.  

2.	Rule: Fix your wiring first!  Get all the pages linked and talking to each other and displayed with no errors before adding anything else.  The tendency may be to get impatient and build for a little while before addressing the wiring issues.  You will rue the day you do this because more code only compounds the problem and makes it WAY more difficult.
Remember ./something = “same folder”, but ../something = “one folder up”  Had to use terminal to get into project.  I started it in the wrong folder.  This architecture has a lot more nesting than anything I’ve ever done, so figuring out where I was and what was going on caused some confusion at first.

3.	Ties in with #2, always put a minimal placeholder (aka a “stub”) in each file you create.  Otherwise, you will get a chain reaction of errors while trying to “wire” the app:
export default function PageStub () {
return <div>Page Loading…</div>;      (or a return null)
}
//even a return null is enough to stop the error cascade
There are varying degrees of errors.

  Quick Sticky Rule:
•	Bad import/export = app can’t boot
•	Render bug inside a component = app boots but may render wrong/blank

5. After adding stubs, I still had tons of errors. Breakdown of what happened:
•	react-router-dom was not installed
•	Imports existed, but the package didn’t
•	Vite + browser tried to resolve something anyway
•	Result: Invalid hook call inside router internals
•	Error messages pointed everywhere except the real cause

  Sticky rule:
If a library is imported and hooks fail mysteriously, check npm ls <library> immediately.
