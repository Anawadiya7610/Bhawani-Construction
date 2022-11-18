import React from "react";
import style from "./style.module.css";
export default function index() {
  return (
    <div>
      <section className={style.sec1}>
        <div className={style.image}></div>
      </section>
      <form className={style.cols}>
        <label className={style.label} htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className={style.inputValue}
          required
        />
        <label className={style.label} htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          className={style.inputValue}
          required
        />
        <label className={style.label} htmlFor="number">Mobile</label>
        <input
          type="tel"
          name="number"
          id="number"
          className={style.inputValue}
          required
        />
        <div className={style.resumediv}>
          <label  htmlFor="resume" className={style.resume}>
            Resume 
          </label>
          <input type="file" className={style.file} required />

          <label className={style.postLabel} htmlFor="post">Post applied for </label>
          <div className={style.select}>
            <select name="post" id="post">
              <option value="supervisor">Supervisor</option>
              <option value="mistri">Mistri</option>
              <option value="sideengenier">SideEngenier</option>
              <option value="electricity">Electricity-Contractor</option>
              <option value="tilles">Tilles-Contractor</option>
            </select>
          </div>
        </div>
        <div className={style.btnSubmit}>
          <button className={style.button}>Submit</button>
        </div>
      </form>
    </div>
  );
}
