import React from "react";
import { Layout, Menu, Button } from "antd";
import "./Logo-styles.css";

function Logo(props: any) {
  return (
    <a href="/" className="logoOuter">
      <p>
        <span className="on font-sansita logoTxt">Dear</span>
        <span
          className={`terra font-sansita logoTxt ${
            props.terraColor ? props.terraColor : ""
          }`}
        >
          {" "}
          Burger
        </span>
      </p>
    </a>
  );
}

export default Logo;
