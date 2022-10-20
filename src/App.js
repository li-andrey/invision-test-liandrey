import React from "react";
import Home from "./components/pages/Home";
import Edit from "./components/pages/Edit";

import { Routes, Route, NavLink } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <header>
        <NavLink to="/" style={{ padding: "1rem" }}>
          Главная
        </NavLink>
        <NavLink to="/edit" style={{ padding: "1rem" }}>
          Редактор
        </NavLink>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="edit" element={<Edit />} />
      </Routes>
    </div>
  );
};

export default App;
