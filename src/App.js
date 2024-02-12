import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Journals from "./Pages/Journals";
import JournalDetails from "./Pages/JournalDetails";
import Projects from "./Pages/Projects";
import "./const"
import "./App.css";
import { cities } from "./const";

// TODO: deal with journals
const routeItems = [
  {
    path: 'about',
    element: <About />
  },
  // {
  //   path: 'journals/garments',
  //   // element: <Journals journalItems={ my_cities }/>
  // },
  {
    path: 'journals/cities',
    element: <Journals journalItems={ cities }/>
  },
  {
    path: 'projects',
    element: <Projects />
  },
  // no match
  {
    path: "*",
    element: <About />
  }
];

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
          {
            routeItems.map((item) => (
              <Route path={item.path} element={item.element} />
            ))
          }
        {/* </Route> */}
      </Routes>
    </>
  );
}

export default App;