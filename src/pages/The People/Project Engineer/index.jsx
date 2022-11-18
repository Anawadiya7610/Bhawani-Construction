import React from "react";
import style from  "./styles.module.css";

export default function index() {
  return (
    <div>
      <section className={style.sec1}>
        <h1>THE PEOPLE</h1>

        <p className={`${style.textblue}  ${style.smalltext}`}>Bhawani Construction Team</p>
        <span className={style.textblue}>
          Power of Bhawani Construction is its TEAM
        </span>
        <p>
          <b>The company's most prized assets are its people</b> . A highly
          motivated team of qualified and experienced construction managers,
          engineers, supervisors and sub-contractracters, which form backbone of
          the company. Quality is a team effort and every employee holds himself
          responcible for the quality of the final product. The willingness of
          dedicated workforce to go the extra mile to deliver quality. Which has
          been a key factor in enabling the company to force lasting bonds with
          satisfied & valued customers.
        </p>

        <p>
          <b> We don't build structures, we build relationships</b>.
          Relationships cemented in steel and firmly grounded in a solid
          foundation of customer trust and confidence. A fact that reflects our
          firm belief, that long term success can only come from mutually
          satisfying relationships with our customers. A trust that we
          continuously enhance by responding to their needs quickly, effectively
          and economically.
        </p>
      </section>

      <h1 className={style.textleft}>Project Engineer</h1>
      <section className={style.sec2}>
        <div className={style.dir1}>
          <div className={style.img}>
            <img src="http://www.brplk.co/images/avatar.jpg" alt="Not Found" />
          </div>
          <div className={style.imgside}>
            <p>
              <span> Suhani kumawat</span>
            </p>
            <p className={style.littlebold}>Project Engineer</p>
            <p>About 9 years experience in private sector.</p>
          </div>
        </div>
      </section>
      <section className={`${style.sec2} ${style.sec3}`}>
        <div className={style.dir1}>
          <div className={style.img}>
            <img src="http://www.brplk.co/images/avatar.jpg" alt="Not Found" />
          </div>
          <div className={style.imgside}>
            <p>
              <span> Jitendra Kumawat</span>
            </p>
            <p className={style.littlebold}>Project Engineer</p>
            <p>About 12 years experience in private sector.</p>
          </div>
        </div>
      </section>

      <section className={`${style.sec2} ${style.sec3}`}>
        <div className={style.dir1}>
          <div className={style.img}>
            <img src="http://www.brplk.co/images/avatar.jpg" alt="Not Found" />
          </div>
          <div className={style.imgside}>
            <p>
              <span> Lalit Sharma</span>
            </p>
            <p className={style.littlebold}>Project Engineer</p>
            <p>About 4 years experience in private sector.</p>
          </div>
        </div>
      </section>

      <section className={`${style.sec2} ${style.sec3}`}>
        <div className={style.dir1}>
          <div className={style.img}>
            <img src="http://www.brplk.co/images/avatar.jpg" alt="Not Found" />
          </div>
          <div className={style.imgside}>
            <p>
              <span> Madhu Kumawat</span>
            </p>
            <p className={style.littlebold}>Project Engineer</p>
            <p>About 8 years experience in private sector.</p>
          </div>
        </div>
      </section>

      <section className={`${style.sec2} ${style.sec3}`}>
        <div className={style.dir1}>
          <div className={style.img}>
            <img src="http://www.brplk.co/images/avatar.jpg" alt="Not Found" />
          </div>
          <div className={style.imgside}>
            <p>
              <span> Sohan Rao</span>
            </p>
            <p className={style.littlebold}>Project Engineer</p>
            <p>About 5 years experience in private sector.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
