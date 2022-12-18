import React from "react";
import classes from "../assets/styles/landingpage/Footer.module.css"
import twitterIcon from "../assets/images/twitterIcon.png"
import youtubeIcon from "../assets/images/youtubeIcon.png"
import discordIcon from "../assets/images/discordIcon.png"

const Footer =()=>{
    return(
        <div className={classes.cont}>
        <div className={classes.top}>
          <div className={classes.line}>Subscription</div>
          <div className={classes.line}>Services</div>
          <div className={classes.line}>Job post</div>
          <div className={classes.line}>Account balance</div>
          <div className={classes.line}>Contracts</div>
       
          <div className={classes.line}>Earnings</div>
          <div className={classes.line}>Details</div>
          <div className={classes.line}>Truck Details</div>
          <div className={classes.line}>Proposals</div>
          <div className={classes.line}>Drivers details</div>
          <div className={classes.line}>Terms and Conditions</div>
          <div className={classes.line}>FAQ</div>
          <div className={classes.line}>Contact us</div>
          <div className={classes.line}>Careers</div>
          <div className={classes.line}>Help and Support</div>
        </div>
        <div className={classes.bottom}>
          <div className={classes.heading}>Follow Us</div>
          <div className={classes.icons}>
          <img src={twitterIcon} alt=""/>
          <img src={youtubeIcon} alt=""/>
          <img src={discordIcon} alt=""/>
          </div>
        </div>
        </div>
    )
}

export default Footer