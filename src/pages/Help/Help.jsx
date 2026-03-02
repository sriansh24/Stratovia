import React from "react";
import MainLayoutHeader from "../../layouts/Header/Header";
// import MainLayoutFooter from "../../layouts/Footer/Footer";
import "../../assets/css/TemporaryCss/temporary.css";

function Help() {
  return (
    <>
      <MainLayoutHeader />
      <div className="coming-wrapper bg-image">
        <h1 className="float-text">
          {Array.from("Coming Soon 🚀").map((char, index) => (
            <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
              {char}
            </span>
          ))}
        </h1>
        <hr />
        <h3>Thank You ForVisit 🙂</h3>
      </div>
      {/* <MainLayoutFooter /> */}
    </>
  );
}

export default Help;
