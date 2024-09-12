import React from "react";
import Icon from "../../../assets/icons";
import logo from "../../../assets/image/logo.png";
import NavBar from "../NavBar";

const Header = () => {
  return (
    <>
      <div className="headerMainContainer">
        <img src={logo} alt="Logo" width={381} height={63} />
        <NavBar />
        <div className="callButton">
          <Icon
            name={"callIcon"}
            fill={"white"}
            viewBox={"0 0 20 20"}
            width={"20"}
            height={"20"}
          />
          <a href="tel:+13103886435">
            <p style={{ color: "white" }}>Call Now +1 310 388 6435</p>
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
