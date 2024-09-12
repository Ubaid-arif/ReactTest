import React from "react";
import Icon from "../../../assets/icons";

const Slider = () => {
  const handleNavigate = (platform) => {
    switch (platform) {
      case "insta":
        window.location.href = "https://www.instagram.com/";
        break;
      case "linkedin":
        window.location.href = "https://www.linkedin.com/";
        break;
      case "facebook":
        window.location.href = "https://www.facebook.com/";
        break;
      default:
        break;
    }
  };

  return (
    <div className="silderMainComponent">
      <div className="leftContainer">
        <div className="textConatiner">
          {" "}
          <p className="mainText">
            Engineering your <span style={{ color: "#DC5F00" }}>digital </span>
            tomorrow.
          </p>{" "}
        </div>
      </div>
      <div className="rightContainer">
        <div className="insindeConatiner">
          <p> We are the Mobile Business Builder </p>
          <Icon
            onClick={() => handleNavigate("insta")}
            name={"instaIcon"}
            fill={"red"}
            viewBox={"0 0 46 46"}
            width={"46"}
            height={"46"}
          />
          <Icon
            onClick={() => handleNavigate("linkedin")}
            name={"LinkindIcon"}
            fill={"blue"}
            viewBox={"0 0 46 46"}
            width={"46"}
            height={"46"}
          />
          <Icon
            onClick={() => handleNavigate("facebook")}
            name={"facebookIcon"}
            fill={"blue"}
            viewBox={"0 0 46 46"}
            width={"46"}
            height={"46"}
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
