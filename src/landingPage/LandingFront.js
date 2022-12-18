import React from "react";
import classes from "../assets/styles/landingpage/LandingFront.module.css"
import image1 from "../assets/images/image1.png"

const LandingFront =()=>{
    return(
        <div className="w-full h-74 bg-[#080821]">
            <div className={classes.right}>
                <img src={image1} alt="" />
            </div>
            <div className={classes.left}>
                <div>
                    <div className="font-bold text-[#F46300] text-[45px]" >FIND THE BEST<br/> SUITABLE SERVICES</div>
                    <div className="text-base md:text-lg lg:text-lg xl:text-xl text-white mb-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</div>
                    <div className="inline-block px-8 py-3 bg-[#F46300] text-white font-medium text-[32px] leading-tight  rounded-full active:shadow-lg transition duration-150 ease-in-out hover:cursor-pointer">Start Now</div>
                </div>
            </div>
            
        </div>
    )
}

export default LandingFront