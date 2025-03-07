import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import TodoList from "./Todolist";
import "./styles.css";

const App = () => {
  const [message, setMessage] = useState("");

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home setMessage={setMessage} />} />
        <Route path="/about" element={<About message={message} />} />
        <Route path="/todolist" element={<TodoList />} />
      </Routes>
    </Router>
  );
};

export default App;
