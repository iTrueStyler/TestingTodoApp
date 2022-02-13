import React from "react";
import ReactLogo from "../assets/Dragon-Logo.svg";
const MainPage = () => {
  return (
    <>
      <div className="main-page">
        <div className="main-page__logo-block">
          <img className="main-page__logo-img" src={ReactLogo} alt="" />
        </div>
        <div className="main-page__description-block">
          <h3 className="main-page__description-title">Description</h3>
          <h4 className="main-page__description-content">Todo App:</h4>
          <ul>
            <li>Axios(REST API)</li>
            <li>Redux(with hooks and thunk)</li>
            <li>React-router</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MainPage;
