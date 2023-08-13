import React from "react";
import style from "./styles.module.css";
import myImage1 from "../img/real1.jpg";
import myImage2 from "../img/real2.jpg";
import myImage3 from "../img/real3.jpg";
import myImage4 from "../img/real4.jpg";
import myImage5 from "../img/real5.jpg";
import myImage6 from "../img/real6.jpg";

export default function Home() {
  return (
    <div>
      <section className={style["sec-1"]}>
        <div className={style["comp-name"]}>
          <h1>JAI BHAWANI CONSTRUCTION</h1>
        </div>
      </section>

      <section className={style["sec-2"]}>
        <div className={style.main}>
          <div className={style["main-icon"]}>
            <div className={style.headpara}>
              <h4>VISION</h4>
              <p className={style.parag}>
                Over the last few decades. India has made phenomenal progress in
                field of engineering involving planning, design & construction
                of large projects of various sizes and types.
              </p>
            </div>
          </div>
          <div className={style["main-icon"]}>
            <div className={style.headpara}>
              <h4>THE PEOPLE</h4>
              <p className={style.parag}>
                Over the last few decades. India has made phenomenal progress in
                field of engineering involving planning, design & construction
                of large projects of various sizes and types.
              </p>
            </div>
          </div>
          <div className={style["main-icon"]}>
            <div className={style.headpara}>
              <h4>MISSION</h4>
              <p className={style.parag}>
                Over the last few decades. India has made phenomenal progress in
                field of engineering involving planning, design & construction
                of large projects of various sizes and types.
              </p>
            </div>
          </div>
        </div>
        <div className={style.main}>
          <div className={style["main-icon"]}>
            <div className={style.headpara}>
              <h4>STRENGTH</h4>
              <p className={style.parag}>
                Over the last few decades. India has made phenomenal progress in
                field of engineering involving planning, design & construction
                of large projects of various sizes and types.
              </p>
            </div>
          </div>
          <div className={style["main-icon"]}>
            <div className={style.headpara}>
              <h4>DIRECTOR DESK</h4>
              <p className={style.parag}>
                Over the last few decades. India has made phenomenal progress in
                field of engineering involving planning, design & construction
                of large projects of various sizes and types.
              </p>
            </div>
          </div>
          <div className={style["main-icon"]}>
            <div className={style.headpara}>
              <h4>RESOURCES</h4>
              <p className={style.parag}>
                Over the last few decades. India has made phenomenal progress in
                field of engineering involving planning, design & construction
                of large projects of various sizes and types.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={style["sec-3"]}>
        <div className={style["sec4-div1"]}>
          <h4>
            TO BECOME THE MOST SUCCESSFUL AND RESPECTED CONSTRUCTION COMPANY IN
            INDIA
          </h4>
          <p>
            Our mission is to grow personally,professionally and
            spiritually by using our compassion,unique perspective, and our
            belief in others inherent goodness,integrity and enormous potential.
          </p>
        </div>
      </section>

      <section className={style["sec-4"]}>
        <h2 className={style.head}>RUNNING PROJECTS</h2>

        <div className={style["img-div1"]}>
          <img src={myImage1} alt="Image Not Found" />
          <img
            src={myImage2}
            className={style["mid-img"]}
            alt="Image Not Found"
          />
          <img src={myImage3} alt="Image Not Found" />
        </div>
      </section>

      <section className={style["sec-3"]}>
        <div className={style["sec4-div1"]}>
          <h4>TRANSFORMING VISION INTO MISION</h4>
          <p>
            Jai Bhawani Group company exists to benefit everyone it touches.The
            basic proposition of our business is simple,solid and timeless. When
            we construct value and joy then we successfully nurture and develop
            brands.That is the key to fulfilling our ultimate obligation to
            provide consistently attractive returns to the owners.
          </p>
        </div>
      </section>

      <section className={style["sec-6"]}>
        <h2 className={style.head}>COMPLETED PROJECTS</h2>

        <div className={style["img-div1"]}>
          <img src={myImage4} alt="Image Not Found" />
          <img
            src={myImage5}
            className={style["mid-img"]}
            alt="Image Not Found"
          />
          <img src={myImage6} alt="Image Not Found" />
        </div>
      </section>
    </div>
  );
}
