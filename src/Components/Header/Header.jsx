import React from "react";
import CTA from "../Header/CTA";

const Header = () => {
  return (
    <Header>
      <div className="container header__container">
        <h5> Hey!, I'm </h5>
        <h1> Akash S M </h1>
        <h5 className="text-light"> Full Stack Developer </h5>

        <CTA />

        <div className="me">
          <img src="" alt="" />
        </div>
      </div>
    </Header>
  );
};

export default Header;
