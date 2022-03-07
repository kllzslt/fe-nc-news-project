import './App.css';
import AllArticle from './components/allArticle';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/nav";
import { useState } from "react";
import Filter from "./components/filter";
import Coding from "./components/coding";
import Cooking from "./components/cooking";
import Football from "./components/football";


function App() {
  const [byCategory, setByCategory] = useState("all");
  return (
    <BrowserRouter>
    <div className="App">
    <Nav />
        {
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Filter setByCategory={setByCategory} />
                  <AllArticle sortByCategory={byCategory} />
                </>
              }
            />
            <Route path="/coding" element={<Coding />} />
            <Route path="/cooking" element={<Cooking />} />
            <Route path="/football" element={<Football />} />
          </Routes>
}
    </div>
    </BrowserRouter>
  );
}

export default App;
