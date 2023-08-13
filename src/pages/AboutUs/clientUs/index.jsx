import React from "react";
import style from "./styles.module.css";
import Banner from "./banner.png";
import Img1 from "./abl.jpg";
import Img2 from "./img2.jpg";
import Img3 from "./img3.jpg";
import Img4 from "./img4.jpg";
import Img5 from "./img5.jpg";
import Img6 from "./img6.jpg";
import Img7 from "./img7.jpg";
import Img8 from "./img8.jpg";

export default function Client() {
  return (
    <div className={style["main-div"]}>
      <section className={style["client-sec1"]}>
        <img src={Banner} alt="not found" />
      </section>
      <section className={style["client-sec2"]}>
        <div class="container">
          <div class="row">
            <div class="col-sm-6 col-md-3">
              {" "}
              <img src={Img1} alt="Image Not Found" className={style["imgClient"]}  />
            </div>
            <div class="col-sm-6 col-md-3">
              {" "}
              <img src={Img2} alt="Image Not Found" className={style["imgClient"]}  />
            </div>
            <div class="col-sm-6 col-md-3">
              {" "}
              <img src={Img3} alt="Image Not Found" className={style["imgClient"]}  />
            </div>
            <div class="col-sm-6 col-md-3">
              {" "}
              <img src={Img4} alt="Image Not Found" className={style["imgClient"]}  />
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-sm-6 col-md-3">
              <img src={Img5} alt="Image Not Found" className={style["imgClient"]}  />
            </div>
            <div class="col-sm-6 col-md-3">
              <img src={Img6} alt="Image Not Found" className={style["imgClient"]} />
            </div>
            <div class="col-sm-6 col-md-3">
              <img src={Img7} alt="Image Not Found" className={style["imgClient"]} />
            </div>
            <div class="col-sm-6 col-md-3">
              <img src={Img8} alt="Image Not Found" className={style["imgClient"]} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
