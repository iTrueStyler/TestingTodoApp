import React from "react";

import { Link } from "react-router-dom";
import { useLocation, useParams } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return location.pathname === "/todos" ? (
    <div className="header">
      <div className="header__link">
        <Link to="/">Go to Main Page</Link>
      </div>
    </div>
  ) : (
    <div className="header">
      <div className="header__link">
        <Link to="/todos">Go to Work Page</Link>
      </div>
    </div>
  );
};

export default Header;
