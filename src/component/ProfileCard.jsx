import React from "react";
import "./ProfileCard.css";
import logo from "./img/logo192.png";

const ProfileCard = () => {
  return (
    <div className="wrapper">
      <img className="logo" src={logo} alt="" />
      <div className="name">Nico</div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        expedita doloremque nobis blanditiis exercitationem rem, sint accusamus
        labore ipsam.
      </p>
    </div>
  );
};

export default ProfileCard;
