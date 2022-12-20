import React, { useState,useRef } from 'react';
import classes from "../assets/styles/client/Client.module.css"
import magnifier from "../assets/images/Icons/magnifying-glass 1.svg"
import proposal from "../assets/images/Icons/Mask group.svg"
import contract from "../assets/images/Icons/Vector.svg"
import chat from "../assets/images/Icons/Vectorchat.svg"
import setting from "../assets/images/Icons/Group.svg"
import logout from "../assets/images/Icons/Vectorlogout.svg"
import ClientNavbar from '../navbar/ClientNavbar';
import { IoIosArrowForward } from "react-icons/io";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const PostJob = () => {
    
    
    return (
        <>
            <ClientNavbar />
            <div className={classes.dflex}>
                <div className={classes.flex1}><DashBoard /></div>
                <div className={classes.flex2}><JobDetails /></div>


            </div>
        </>
    )
}
const DashBoard = () => {
    
    const listItems = [
        {
            title: 'Post job',
            icon: magnifier,
            id: 1,
            class: `${classes.title} ${classes.isActive}`
        
        },
        {
            title: 'Proposals',
            icon: proposal,
            id: 2,
            class: `${classes.title}`
        },
        {
            title: 'Contracts',
            icon: contract,
            id: 3,
            class: `${classes.title}`
        },
        {
            title: 'Chat',
            icon: chat,
            id: 4,
            class: `${classes.title}`
        },
        {
            title: 'Settings',
            icon: setting,
            id: 5,
            class: `${classes.title}`
        },
        {
            title: 'Logout',
            icon: logout,
            id: 6,
            class: `${classes.title}`
        },
    ]
    return (
        <>
            <div className={classes.sideContainer}>
                {listItems.map(i => (
                    <div className={classes.listItem}>
                        <div className={classes.Icon}>
                            <img className={classes.art} src={i.icon} alt="" />
                        </div>
                        <button className={i.class}>
                            {i.title}
                           
                        </button>
                    </div>

                ))}
            </div>

        </>
    )

};
const JobDetails = () => {
    const [pickupDate, setpickupDate] = useState(new Date());
    const [deliveryDate, setdeliveryDate] = useState(new Date());
    const hiddenFileInput = React.useRef(null);
    
    const fileUploadHandler=(e)=>{
        e.preventDefault();
        // console.log('click')
        hiddenFileInput.current.click();

    }
    const handleChange = e => {
        const fileUploaded = e.target.files[0];


    };
    return (
        <>
            <form className={classes.colflex}>
                <label className={classes.label} htmlFor="jobtitle" style={{ "margin-top": '10px' }}>Job title</label>
                <input type="text" name="jobtitle" id="jobtitle" className={classes.titleText} placeholder='Need to transfer goods' />
                <label className={classes.label} style={{ "margin-top": '20px' }}
                    htmlFor="description">Description</label>
                <textarea className={classes.textarea} name="description" id="description" cols="30" rows="10" placeholder='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sit sunt eos, blanditiis incidunt deleniti? Enim, placeat quis et voluptates in dolores consectetur earum, cupiditate magnam praesentium, nihil dolore suscipit.'></textarea>
                <div className={classes.row}>
                    <div className={classes.coldate}>
                        <div className={classes.dateflex} style={{ 'marginRight': '30px' }}>
                            <label className={classes.label} htmlFor="pickupdate">Pickup date</label>
                            <DatePicker className={classes.datefield} name="pickupdate" id='pickupdate' selected={pickupDate} onChange={(date) => setpickupDate(date)}
                            />
                        </div>
                        <div className={classes.dateflex}>
                            <label className={classes.label} htmlFor="delivery">Delivery</label>
                            <DatePicker className={classes.datefield} name="delivery" id='delivery' selected={deliveryDate} onChange={(date) => setdeliveryDate(date)}
                            />
                        </div>
                    </div>

                    <div className={classes.coldim}>
                        <div className={classes.dim} style={{ 'marginLeft': "0" }}>
                            <label htmlFor="width" className={classes.label} >Width</label>
                            <input id='width' className={classes.dimfield} type="text" placeholder='1.5m' />
                        </div>
                        <div className={classes.dim}>
                            <label htmlFor="height" className={classes.label} >Height</label>
                            <input id='height' className={classes.dimfield} type="text" placeholder='1.5m' />
                        </div>
                        <div className={classes.dim}>
                            <label htmlFor="length" className={classes.label} >Length</label>
                            <input id='length' className={classes.dimfield} type="text" placeholder='1.5m' />
                        </div>
                        <div className={classes.dim}>
                            <label htmlFor="weight" className={classes.label} >Weight</label>
                            <input id='weight' className={classes.dimfield} style={{ 'width': '120px' }} type="text" placeholder='1.5m' />
                        </div>



                    </div>

                </div>
                <div className={classes.fileupload}>
                    <div style={{'display':'flex', 'flexDirection':'column'}}>
                        <label className={classes.label} htmlFor="fileupload">Picture of cargo </label>
                        <button className={classes.uploadfield} id="fileupload" onClick={fileUploadHandler}>
                            <div className={classes.attachafile} > <p>Attach a file</p></div>
                            <div className={classes.uploadicon}></div>
                        </button>
                        <input type="file" id='uploadfileinput' ref={hiddenFileInput} onChange={handleChange} style={{display:'none'}} />
                    </div>
                    <button className={classes.button} style={{'width':'192px', 'alignSelf':'end', 'marginLeft':'55px'}}>check car type</button>
                </div>
                <div className={classes.cartype}>
                    <div className={classes.calculated}>Calculated car type:</div>
                    <div className={classes.type}>2DA</div>


                </div>
                <div className={classes.buttonrow}><button className={classes.button}>NEXT <p className={classes.arrow}><IoIosArrowForward /></p></button></div>

            </form>



        </>
    )

}




export default PostJob