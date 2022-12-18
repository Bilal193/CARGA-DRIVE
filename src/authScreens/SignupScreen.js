import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import classes from "../assets/styles/auth/SignupScreen.module.css"
import clientIcon from "../assets/images/ikony-01 1.png"
import userIcon from "../assets/images/ikony-02 2.png"
import { useNavigate } from "react-router-dom";


const SignupScreen =()=>{
   
    const navigate = useNavigate();

    const handleLogin=()=>{
        navigate("/login")
    }
    const handleChoice=(val)=>{
        if (val==="client"){
            navigate("/choice")
        }
        if (val==="driver"){
       navigate("/driver")
        }
    }
    return(
        <div>
        <Navbar/>
        <div className={classes.cont}>
            <div className={classes.signupWrap}>
            <div className={classes.heading}>Register as a client or driver</div>
            <div className={classes.option}>
                <div className={classes.imgWrap}>
                    <img src={userIcon} alt=""/>
                </div>
                <div className={classes.imgText} onClick={()=>handleChoice("driver")}>I’m a driver looking for work</div>
            </div>
            <div className={classes.option}>
                <div className={classes.imgWrap}>
                    <img src={clientIcon} alt=""/>
                 </div>
                <div className={classes.imgText} onClick={()=>handleChoice("client")}>I’m a client, hiring for services</div>
            </div>
            
            <div className={classes.loginBtn}>
                 Create Account
            </div>
              <div className={classes.question}>Already have an Account? <span onClick={()=>handleLogin()}>Login</span></div>
            </div>
           
        </div>
      </div>
    )
}

export default SignupScreen