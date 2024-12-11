import styles from "../styles/Singup.module.css"
import React, { useState } from 'react';

const LoginSignup = () => {
  const [action,setAction] = useState("Login")

  return (
   <div classname='container'>


     <div className='header'>
        <div className="text">{action}</div>
           <div className = "underline"></div>
     </div>
      <div className='inputs'>
        {action === "Login" ? <div></div> : <div className="input">
          <img src="" alt=" " />
          <input placeholder = "Name" type="text" />
        </div>}


       <div className = "input">
       <img src="" alt=" " />
       <input type= "email"/>
         </div>


       <div className = "input">
       <img src="" alt=" " />
       <input type= "password"/>
           </div>

     </div>

      {action === "Sign Up" ?<div></div>: <div className="forgot-password"> Lost Password? <span>Click Here !</span>  </div>}
     <div className="submit-container ">
        <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up")}}> </div>
       <div className={action==="Login"?"submit gray":"submit"} onClick={() => { setAction("Login")}}>Login</div>

     </div>



   </div >

 )

}