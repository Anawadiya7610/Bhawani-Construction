import React from 'react';
import style from "./styles.module.css";
import visionImg from"./vision.jpg";
export default function Vision() {
  return (
    <div>
       <section className={style['clientsec-1']}>
         <img src={visionImg} alt="Image Not Found" />
       </section>
       <h4>To become the most successful and respected construction company in india.</h4>
      
       <div  className={style['para-div']}>

       <p><span>Our mission</span> is to grow personally,professionally,emotionally and spiritually by using our compassion, unique perspective,and our belief in other's inherent goodness,integrity and enormous potential.</p>

       <p><span> Jai Bhwani Group Promise </span>: Ashok Kumawat company exists to benifit everyone it touches. The basic proposition of our business is simple, solid and timeless. When we construct value and joy then we successfully nurture and develop brands. Thjat is the key to fulfilling our ultimate obligation to provide consistently attractive returns to the owners. </p>
       </div>
    </div>
  )
}
