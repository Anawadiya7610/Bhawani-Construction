import React,{useState} from "react";
import styledow from "./styles.module.css";

export default function Download() {
  const [user,setUser] = useState({
    name:"",
    fname:"",
    email:"",
    mobile:"",
    address:"",
    pincode:"",
  });
  
  const handleChange = (e)=>{
    const { name, value: elementValue,type,checked } = e.target;
    let value = type === "checkbox" ? checked : elementValue;
    setUser({ ...user, [name]: value });
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log("user values" , user);
  }

  return (
    <div className={styledow['div-main']}>
      <form className={styledow.form} onSubmit={handleSubmit}>
        <div className={styledow['form-div']}>
          <div className={styledow.div1}>
            <label htmlFor="firstname">Name </label>
            <input type="text" name="name"  id="firstname" className={styledow.inputText}  onChange={handleChange} value={user.name} required />

            <label htmlFor="father">father Name </label>
            <input type="text" name="fname" className={styledow.inputText}  onChange={handleChange} value={user.fname} id="father" required />


            <label htmlFor="email">Email </label>
            <input type="email" name="email" className={styledow.inputText}  onChange={handleChange} value={user.email} id="email" required />

          </div>
          <div className={styledow.div2}>
            <label htmlFor="mobile">Mobile </label>
            <input type="tel" name="mobile" className={styledow.inputText}  onChange={handleChange} value={user.mobile} id="mobile" required />


            <label htmlFor="address">Address </label>
            <input type="text" name="address" className={styledow.inputText}  onChange={handleChange} value={user.address} id="address" required />


            <label htmlFor="pin">Pincode </label>
            <input type="tel" name="pincode" id="pin" className={styledow.inputText}  onChange={handleChange} value={user.pincode} required />

          </div>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
