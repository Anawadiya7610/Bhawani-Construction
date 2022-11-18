import React, { useState } from "react";
import realImg from "./real.jpg";
import style from "./styles.module.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={style.header}>
      <div className={style["header-main"]}>
        <div className={style["img-div"]}>
          <img src={realImg} alt="not found" />
        </div>
        <div className={style["list-div"]}>
          <ul
            className={`${style.navul} ${style.navMobile} ${
              isOpen ? `${style.activeNav}` : ``
            }`}
          >
            <li className={style.Navli}>
              <Link className={style.deactive} to="/">
                Home
              </Link>
            </li>

            <li className={`${style.Navli}  ${style.about}`}>
              <a href="#">About</a>
              <ul className={style.active}>
                <li>
                  <Link className={style.deactive} to="/client">
                    Client
                  </Link>
                </li>
                <li>
                  <Link className={style.deactive} to="/vision">
                    Vision
                  </Link>
                </li>
                <li>
                  <Link className={style.deactive} to="/download">
                    Download
                  </Link>
                </li>
              </ul>
            </li>
            <li className={style.Navli}>
              <Link className={style.deactive} to="/contact">
                Contact
              </Link>
            </li>
            <li className={`${style.Navli}  ${style.project}`}>
              <a href="#">Project</a>

              <ul className={`${style.active}  ${style.proactive}`}>
                <li>
                  <Link className={style.deactive} to="/running">
                    Running
                  </Link>
                </li>
                <li>
                  <Link className={style.deactive} to="/complete">
                    Complete
                  </Link>
                </li>
              </ul>
            </li>
            <li className={style.Navli}>
              <Link className={style.deactive} to="/resources">
                Resources
              </Link>
            </li>
            <li className={style.Navli}>
              <Link className={style.deactive} to="/career">
                Career
              </Link>
            </li>
            <li className={`${style.Navli}  ${style.people}`}>
              <a href="#">The People</a>
              <ul className={`${style.active}  ${style.peoactive}`}>
                <li>
                  <Link className={style.deactive} to="/director">
                    Director
                  </Link>
                </li>
                <li>
                  <Link className={style.deactive} to="/general">
                    General Manager
                  </Link>
                </li>
                <li>
                  <Link className={style.deactive} to="/project">
                    Project Manager
                  </Link>
                </li>
                <li>
                  <Link className={style.deactive} to="/engineer">
                    Project Engineer
                  </Link>
                </li>
                <li>
                  <Link className={style.deactive} to="/quality">
                    Quality Control
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <button className={style.barx} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <i class={`fa-solid fa-bars fa-2x ${style.bar}`}></i>
          ) : (
            <i class="fa-solid fa-xmark"></i>
          )}
        </button>
      </div>
    </header>
  );
}
