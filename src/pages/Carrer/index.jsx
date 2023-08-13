import React from "react";
import carrerStyle from "./carrer.module.css";
export default function index() {
  return (
    <div>
      <section className={carrerStyle.sec1}>
        <div className={carrerStyle.image}></div>
      </section>
      <form className={carrerStyle.cols}>
        <label className={carrerStyle.label} htmlFor="name">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className={carrerStyle.inputValue}
          required
        />
        <label className={carrerStyle.label} htmlFor="email">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className={carrerStyle.inputValue}
          required
        />
        <label className={carrerStyle.label} htmlFor="number">
          Mobile
        </label>
        <input
          type="tel"
          name="number"
          id="number"
          className={carrerStyle.inputValue}
          required
        />
        <div className={carrerStyle.resumediv}>
          <div  className="d-flex align-items-center w-50">
            <label htmlFor="resume" className={carrerStyle.resume}>
              Resume
            </label>
            <input type="file" className={carrerStyle.file} required />
          </div>
          <div className={`d-flex align-items-center justify-content-md-start justify-content-lg-end w-50 ${carrerStyle.spacingTop}`}>
            <label className={carrerStyle.postLabel} htmlFor="post">
              Post applied for{" "}
            </label>
            <div className={carrerStyle.select}>
              <select name="post" id="post">
                <option value="supervisor">Supervisor</option>
                <option value="mistri">Mistri</option>
                <option value="sideengenier">SideEngenier</option>
                <option value="electricity">Electricity-Contractor</option>
                <option value="tilles">Tilles-Contractor</option>
              </select>
            </div>
          </div>
        </div>
        <div className={carrerStyle.btnSubmit}>
          <button className={carrerStyle.button}>Submit</button>
        </div>
      </form>
    </div>
  );
}
