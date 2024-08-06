// src/App.js
import React, { useState, useEffect } from "react";
import "./App.css";
import Main from "./component/Main/Main";

const App = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [showFrontEnd, setShowFrontEnd] = useState(false);
  const [introText, setIntroText] = useState("프론트엔드 개발자 서주완 입니다."); // 인트로 텍스트
  const [frontEndText, setFrontEndText] = useState("Front-End"); // 프론트엔드 텍스트

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowIntro(false);
      setShowFrontEnd(true);
    }, 3000);

    const timer2 = setTimeout(() => {
      setShowFrontEnd(false);
    }, 6000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="App">
      {showIntro && (
        <div className={`intro ${!showIntro ? "intro-exit" : ""}`}>
          <p className="introP">
            프론트엔드 개발자 <span className="bold-text"> "서주완" </span>입니다.
          </p>
        </div>
      )}
      {showFrontEnd && (
        <div className="frontEnd frontEnd-active">
          <p className="frontP">{frontEndText}</p>
        </div>
      )}
      {!showIntro && !showFrontEnd && (
        <Main introText={introText} frontEndText={frontEndText} />
      )}
    </div>
  );
};

export default App;
