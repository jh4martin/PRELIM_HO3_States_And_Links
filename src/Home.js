import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./styles.css";

const Home = ({ setMessage }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    setMessage("You just navigated from the Home page!");
    navigate("/about");
  };

  return (
    <div className="container">
      <h2>Home Page</h2>
      <p>Click below to learn more about our app.</p>
      <button onClick={handleNavigate}>Go to About</button>
    </div>
  );
};

Home.propTypes = {
  setMessage: PropTypes.func.isRequired,
};

export default Home;
