import React from "react";
import style from "./styles.module.css";
export default function index() {
  return (
    <div>
      <section className={style.sec1}>
        <div className={style.image}>
             <span>
            <h1>Running Projects</h1>
            </span>
        </div>
      </section>


      <section className={style.sec2}>
        <h1>
          <u>Running Projects</u>
        </h1>

        <table className={style.tab}>
          <thead className={style['tab-head']}>
            <th className={style.sno}>S.No</th>
            <th className={style.project}>Our Ongoing Projects</th>
            <th className={style.area}>Area</th>
            <th className={style.duration}> Estimated Duration</th>
            <th  className={style.btnImg}>Images</th>
          </thead>
          <tbody>
            <tr className={style['row-white']}>
              <td className={style['tb-data']}>1.</td>
              <td className={style['tb-data']}>Hotel Dhayal</td>
              <td className={style['tb-data']}>125000 Sq. Ft.</td>
              <td className={style['tb-data']}> Target in 10 Months</td>
              <td className={style['tb-data']}>
              <button className={style['btn-Img']}>View Image</button></td>
            </tr>
            
            <tr className={style['row-white']}>
              <td className={style['tb-data']}>2.</td>
              <td className={style['tb-data']}>Diamond Mall</td>
              <td className={style['tb-data']}>224000 Sq. Ft.</td>
              <td className={style['tb-data']}>Target in 14 Months</td>
              <td className={style['tb-data']}>
              <button className={style['btn-Img']}>View Image</button></td>
            </tr>
            <tr className={style['row-blue']}>
              <td className={style['tb-data']}>3.</td>
              <td className={style['tb-data']}>Aaryan Mall</td>
              <td className={style['tb-data']}>214210 Sq. Ft.</td>
              <td className={style['tb-data']}>Target in 12 Months</td>
              <td className={style['tb-data']}>
              <button className={style['btn-Img']}>View Image</button></td>
            </tr>
            <tr className={style['row-white']}>
              <td className={style['tb-data']}>4.</td>
              <td className={style['tb-data']}>Sharawat</td>
              <td className={style['tb-data']}>432101 Sq. Ft.</td>
              <td className={style['tb-data']}>Target in 20 Months</td>
              <td className={style['tb-data']}>
              <button className={style['btn-Img']}>View Image</button></td>
            </tr>
            <tr className={style['row-blue']}>
              <td className={style['tb-data']}>5.</td>
              <td className={style['tb-data']}>Vaishali Tower</td>
              <td className={style['tb-data']}>144215 Sq. Ft.</td>
              <td className={style['tb-data']}>Target in 09 Months</td>
              <td className={style['tb-data']}>
              <button className={style['btn-Img']}>View Image</button></td>
            </tr>
            <tr className={style['row-white']}>
              <td className={style['tb-data']}>6.</td>
              <td className={style['tb-data']}>Kedia </td>
              <td className={style['tb-data']}>173454 Sq. Ft.</td>
              <td className={style['tb-data']}>Target in 13 Months</td>
              <td className={style['tb-data']}>
              <button className={style['btn-Img']}>View Image</button></td>
            </tr>
            <tr className={style['row-blue']}>
              <td className={style['tb-data']}>7.</td>
              <td className={style['tb-data']}>UDB</td>
              <td className={style['tb-data']}>324000 Sq. Ft.</td>
              <td className={style['tb-data']}>Target in 18 Months</td>
              <td className={style['tb-data']}>
              <button className={style['btn-Img']}>View Image</button></td>
            </tr>
            <tr className={style['row-white']}>
              <td className={style['tb-data']}>8.</td>
              <td className={style['tb-data']}>Dream Mall</td>
              <td className={style['tb-data']}>193000 Sq. Ft.</td>
              <td className={style['tb-data']}>Target in 12 Months</td>
              <td className={style['tb-data']}>
              <button className={style['btn-Img']}>View Image</button></td>
            </tr>
            <tr className={style['row-blue']}>
              <td className={style['tb-data']}>9.</td>
              <td className={style['tb-data']}>Sanganer</td>
              <td className={style['tb-data']}>137000 Sq. Ft.</td>
              <td className={style['tb-data']}>Target in 14 Months</td>
              <td className={style['tb-data']}>
              <button className={style['btn-Img']}>View Image</button></td>
            </tr>
            <tr className={style['row-white']}>
              <td className={style['tb-data']}>10.</td>
              <td className={style['tb-data']}>Malviya</td>
              <td className={style['tb-data']}>55000 Sq. Ft.</td>
              <td className={style['tb-data']}>Target in 05 Months</td>
              <td className={style['tb-data']}>
              <button className={style['btn-Img']}>View Image</button></td>
            </tr>
            <tr className={style['row-blue']}>
              <td className={style['tb-data']}>11.</td>
              <td className={style['tb-data']}>Sodala</td>
              <td className={style['tb-data']}>40500 Sq. Ft.</td>
              <td className={style['tb-data']}>Target in 05 Months</td>
              <td className={style['tb-data']}>
              <button className={style['btn-Img']}>View Image</button></td>
            </tr>
            <tr className={style['row-white']}>
              <td className={style['tb-data']}>12.</td>
              <td className={style['tb-data']}>Exellent Mall</td>
              <td className={style['tb-data']}>70300 Sq. Ft.</td>
              <td className={style['tb-data']}>Target in 08 Months</td>
              <td className={style['tb-data']}> 
              <button className={style['btn-Img']}>View Image</button></td>
            </tr>
           
           
        
                      
          </tbody>
        </table>
      </section>
    </div>
  );
}
