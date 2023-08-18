import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Journals from "./Pages/Journals";
import JournalDetails from "./Pages/JournalDetails";
import Projects from "./Pages/Projects";
import "./const"
import "./App.css";
import { my_cities, travel_cities } from "./const";

// TODO: deal with journals
const routeItems = [
  {
    path: '',
    element: <Home />
  },
  {
    path: 'about',
    element: <About />
  },
  {
    path: 'journals/mycities',
    element: <Journals journalItems={ my_cities }/>
  },
  {
    path: 'journals/travels',
    element: <Journals journalItems={ travel_cities }/>
  },
  {
    path: 'projects',
    element: <Projects />
  },
  // no match
  {
    path: "*",
    element: <Home />
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