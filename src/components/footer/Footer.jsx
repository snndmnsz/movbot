import React from "react";
import style from "./footer.module.css";
import logo from "../../assets/images/image1.png";
function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.footer__container}>
        <div className={style.footer__logo}>
          <img src={logo} alt="logo" />
          MOVBOT
        </div>

        <p className={style.footer__text}>
          Movie recommendation website powered with machine learning.
          {/* <br />
          CSE 3044 Term Project created by Sinan Dumansiz and Kerem Kosif. */}
          <br />
          Source code available on Github.
        </p>
      </div>
    </div>
  );
}

export default Footer;
