// src/component/Main/Main.js
import React from "react";
import "../../css/Main.css";
import Main_Header from "./Main_Header";
import profileImage from "../../assets/profile.png"; // 프로필 이미지 경로

const Main = ({ introText, frontEndText }) => {
  return (
    <div className="Main">
      <Main_Header />
      <div className="Main-content">
        <div className="text-container">
          <h1 className="front-end-title">{frontEndText}</h1>
        </div>
        <div className="text-container1">
          <p className="intro-description">{introText}</p>
        </div>
        <div className="profile">
        <img src={profileImage} alt="Profile" className="profile-image" />
        </div>
      </div>
    </div>
  );
};

export default Main;
