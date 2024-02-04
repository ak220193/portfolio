import React from "react";
import "./Header.css";
import CV from "../../Components/Header/CV";

const Header = () => {
  return (
    <Header>
      <div className="container header__container">
        <h5> Hi I'am </h5>
        <h1> AKASH S M </h1>
        <h5 className="text-light"> Full Stack developer </h5>

        <CV />
      </div>
    </Header>
  );
};

export default Header;
