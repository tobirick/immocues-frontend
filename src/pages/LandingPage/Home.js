import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="content-wrapper">
      <div className="pt-3">
        <Link to="/login" className="button-primary">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Home;
