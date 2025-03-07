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
      {message && <p>This is my website, you can sit back and relax.</p>}
    </div>
  );
};

About.propTypes = {
  message: PropTypes.string,
};

export default About;
