import React from "react";
import style from "./styles.module.css";

console.log(style)

export default function index() {
  return (
    <div>
      <section className={style.sec1}>
        <div className={style.image}></div>
      </section>
      <h1 className={style.heading1}>Tools & Plant Equipments</h1>
      <table className={style.tab}>
            <thead className={style.tabHead}>
              <th className={style.sno}>S.No.</th>
              <th className={style.project}>Name Of Equipements</th>
              <th className={style.area}>Units</th>
            
            </thead>
            <tbody>
              <tr className={style['row-white']}>
                <td className={style['tb-data']}>1.</td>
                <td className={style['tb-data']}>Batching Plants</td>
                <td className={style['tb-data']}>20 Nos.</td>

              </tr>

              <tr className={style['row-white']}>
                <td className={style['tb-data']}>2.</td>
                <td className={style['tb-data']}>Concrete Pump</td>
                <td className={style['tb-data']}>10 Nos..</td>
              </tr>
              <tr className={style['row-blue']}>
                <td className={style['tb-data']}>3.</td>
                <td className={style['tb-data']}>Concrete Mixture</td>
                <td className={style['tb-data']}>15 Nos.</td>
              </tr>
              <tr className={style['row-white']}>
                <td className={style['tb-data']}>4.</td>
                <td className={style['tb-data']}>Concrete Weight Batcher</td>
                <td className={style['tb-data']}>25 Nos.</td>
              </tr>
              <tr className={style['row-blue']}>
                <td className={style['tb-data']}>5.</td>
                <td className={style['tb-data']}>Concrete Vibrator (Needle)</td>
                <td className={style['tb-data']}>100 Nos.</td>
              </tr>
              <tr className={style['row-white']}>
                <td className={style['tb-data']}>6.</td>
                <td className={style['tb-data']}>Concrete vibrator (Plate) </td>
                <td className={style['tb-data']}>25 Nos.</td>
              </tr>
              <tr className={style['row-blue']}>
                <td className={style['tb-data']}>7.</td>
                <td className={style['tb-data']}>Material Lift with trolly</td>
                <td className={style['tb-data']}>30 Nos.</td>
              </tr>
              <tr className={style['row-white']}>
                <td className={style['tb-data']}>8.</td>
                <td className={style['tb-data']}>	Tower Crane</td>
                <td className={style['tb-data']}>10 Nos.</td>
              </tr>
              <tr className={style['row-blue']}>
                <td className={style['tb-data']}>9.</td>
                <td className={style['tb-data']}>	Earth Compactor Elec.</td>
                <td className={style['tb-data']}>10 Nos.</td>
              </tr>
              <tr className={style['row-white']}>
                <td className={style['tb-data']}>10.</td>
                <td className={style['tb-data']}>Steel Shuttering</td>
                <td className={style['tb-data']}> 7 lac sq. ft.</td>
              </tr>
              <tr className={style['row-blue']}>
                <td className={style['tb-data']}>11.</td>
                <td className={style['tb-data']}>Plywood Shuttering</td>
                <td className={style['tb-data']}>  2 lac sq. ft.</td>
              </tr>
              <tr className={style['row-white']}>
                <td className={style['tb-data']}>12.</td>
                <td className={style['tb-data']}>Props. and Trusses</td>
                <td className={style['tb-data']}> 2 lac sq. ft.</td>
                
              </tr>
            </tbody>
          </table>

          <h1 >Quality Control Laboratory</h1>

          <table  className={style.tab}>
              <tr className={style['row-blue']}>
                 <td className={style.sno1}>1</td>
                 <td className={style.detail}>Compressive Strength Testing machine
                 (A) Manual     (B) Digital</td>
              </tr>
              <tr className={style['row-white']}>
                 <td>2</td>
                 <td>	Sieve Shaker</td>
              </tr>
              <tr className={style['row-blue']}>
                 <td>3</td>
                 <td>Oven</td>
              </tr>
              <tr className={style['row-white']}>
                 <td>4</td>
                 <td>	Auto Level</td>
              </tr>
              <tr className={style['row-blue']}>
                 <td>5</td>
                 <td>Electronic Weight Machine</td>
              </tr>
              <tr className={style['row-white']}>
                 <td>6</td>
                 <td>	Measuring Jar</td>
              </tr>
              <tr className={style['row-blue']}>
                 <td>7</td>
                 <td>	Screw Gauge</td>
              </tr>
              <tr className={style['row-white']}>
                 <td>8</td>
                 <td>Vernier Callipers</td>
              </tr>
              <tr className={style['row-blue']}>
                 <td>9</td>
                 <td>Slump Aparatus</td>
              </tr>
              <tr className={style['row-white']}>
                 <td>10</td>
                 <td>RMM (Rapid Moisture Meter)</td>
              </tr>
          </table>
    </div>
  );
}
