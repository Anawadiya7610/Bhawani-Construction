import React from "react";
import realImg from "./real.jpg";
import style from "./styles.module.css";
export default function Footer() {
  return (
    <section className={style.secFooter}>
      <div className={style.main1}>
        <div className={style.footDiv}>
          <div className={style.img}>
            <img src={realImg} />
          </div>
        </div>
        <div className={style.footDiv}>
          <h2>ADDRESS</h2>
          <h6>JAI BHAWANI CONSTRUCTION</h6>
          <p className={style.footPara}>405-A Ekta Nagar - C Dhawas</p>
          <p className={style.footPara}> Behind Heerapura Power House,</p>
          <p className={style.footPara}>Ajmer Road Jaipur 302021</p>
        </div>
        <div className={style.footDiv}>
          <h2>CONTACT DETAILS</h2>
          <p className={style.footPara}> EMAIL : jbc4601@gmail.com</p>
          <p className={style.footPara}>PHONE NO : 1234567890</p>
          <ul>
            <li className={style.faceli}>
              <a href="https://www.facebook.com/ashok.anawadiya/">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={style.main2}>
      <p> Copyright © 2022 All rights Reserved | Design by Ashok Anawadiya </p>
      </div>
    </section>
  );
}
