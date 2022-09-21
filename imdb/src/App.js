import "./App.css";
import Home from "./landind page/Home";
import Movies from "./movies page/Movies";
import Tvshows from "./tvshows page/Tvshows";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import { useState } from "react";

function App() {
  let activeStyle = {
    color: "white",
    textDecoration: 'none'
  };

  let activeClassName = "active";
  return (
    <>
      <div className="navbar">
        <div className="dugme">
          <NavLink
            className={({ isActive }) => (isActive ? activeClassName : "links")}
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <h4>Home </h4>
          </NavLink>
        </div>

        <div className="dugme">
          <NavLink
            className="links"
            to="/tvshows"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <h4>Tvshows </h4>
          </NavLink>
        </div>

        <div className="dugme">
          <NavLink
            className="links"
            to="/movies"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <h4>Movies </h4>
          </NavLink>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tvshows" element={<Tvshows />} />
      </Routes>
    </>
  );
}

export default App;
