import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">
      <Link to="/">MyLogo</Link>
    </div>
    <div className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/todolist">Todo List</Link>
    </div>
  </nav>
);

export default Navbar;
