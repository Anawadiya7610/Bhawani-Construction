import React from "react";
import style from "./styles.module.css";
export default function index() {
  return (
    <div>
      <section className={style.sec1}>
        <div className={style.image}></div>
      </section>
      <form className={style.cols}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          id="name"
          className={style.inputs}
          required
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          id="email"
          className={style.inputs}
          required
        />
        <input
          type="text"
          placeholder="Subject"
          name="subject"
          id="subject"
          className={style.inputs}
          required
        />

        <textarea
          placeholder="message"
          name="message"
          id="message"
          cols="15"
          rows="10"
          className={style.textarea}
        ></textarea>

        <button className={style.button}>Send Message</button>
      </form>

      <section className={style.sec2}>
        <div className={style.address}>
          <h2>ADDRESS</h2>
          <h5 className={style.head}>JAI BHAWANI CONSTRUCTION</h5>
          <p className={style.parag}>405-A Ekta Nagar - C Dhawas</p>
          <p className={style.parag}> Behind Heerapura Power House,</p>
          <p className={style.parag}>Ajmer Road Jaipur 302021</p>
        </div>

        <p className={style.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.3803275491036!2d75.72534251436534!3d26.891422267481577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db4b84db2cac1%3A0xd9b258eea9665e8b!2sHeerapura%2C%20Heerawala%2C%20Jaipur%2C%20Rajasthan%20302034!5e0!3m2!1sen!2sin!4v1668685154062!5m2!1sen!2sin"
            width="400"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </p>
      </section>
    </div>
  );
}
