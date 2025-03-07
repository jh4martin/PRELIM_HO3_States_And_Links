import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

const About = ({ message }) => {
  // Default content if no message is passed
  const defaultMessage =
    "Welcome to the About Page! Here, you can learn more about our app.";

  return (
    <div className="container">
      <h2>About Page</h2>
      <p>{message ? message : defaultMessage}</p>
      {message && (
        <p>
          Welcome to my website this website is all about the to do list Page
          created in this website
        </p>
      )}
    </div>
  );
};

About.propTypes = {
  message: PropTypes.string,
};

export default About;
