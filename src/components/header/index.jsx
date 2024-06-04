import React, { useContext, useState } from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
import { DarkMode } from "../../context/context";
export default function Header() {
  const {
    state: { darkmode, lanuage },
    CHANGEMODE,

  } = useContext(DarkMode);
  return (
    <header>
      <div className="container header-container">
        <nav>

          <ul className="list">
            <li className="list-item">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="list-item">
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="list-item">
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
        <button
          onClick={() => {
            CHANGEMODE();
          }}
          className="header-btn"
        >
          {darkmode ? "LightMode" : "DarkMode"}
        </button>
      </div>
    </header>
  );
}

