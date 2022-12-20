import { useState } from "react";
import classes from "../assets/styles/ClientNavbar.module.css";
import cargaLogo from "../assets/images/cargaLogo.png";
import { useNavigate } from "react-router-dom";
import imgclinet from "../assets/images/image 14.png";
export default function ClientNavbar() {
  const navigate = useNavigate();

  // const handleLogin = () => {
  //   navigate("/login");
  // };
  // const handleSignup = () => {
  //   navigate("/signup");
  // };
  const handleLogo = () => {
    navigate("/");
  };
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full shadow">
      <div className={classes.justify_between}>
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <img
              src={cargaLogo}
              alt=""
              className={classes.logo}
              onClick={() => handleLogo()}
            />
            <div className="md:hidden">
              <button
                className={classes.togglebar}
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10"
                    fill="#fff"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <div className={`flex-1 items-end flex-col pb-3 mt-8 md:block md:pb-0 md:mt-2 ${navbar ? "block" : "hidden"
          }`}
        >
          <ul className="items-center space-y-8 md:flex md:space-x-6 md:space-y-0" style={{'margin-left': '59px'}}>
            <li className={classes.navlogo}>
              <img
                src={cargaLogo}
                alt=""
                className={classes.logo}
                onClick={() => handleLogo()}
              />
            </li>
            
            <div className={classes.stepper}>
          <div className={classes.jobDetails}>Job details</div>
          <div className={classes.setDistance}>Set distance and price</div>
          <div className={classes.summary}>Summary</div>
            </div>
            
            {/* <li className={classes.navItem}>
              <a href="javascript:void(0)">About</a>
            </li>
            <li className={classes.navItem}>
              <a href="javascript:void(0)">Pricing</a>
            </li>
            <li className={classes.navItem}>
              <a href="javascript:void(0)">Contact</a>
            </li>
            <li className={classes.navItem}>
              <a href="javascript:void(0)">Benifits</a>
            </li> */}
            {/* <div className="flex">
              <div className={classes.loginBtn} onClick={() => handleLogin()}>
                Login
              </div>
              <div className={classes.signupBtn} onClick={() => handleSignup()}>
                Signup
              </div>
            </div> */}
            <div className={classes.clientDp}>
              <img src={imgclinet}  alt="" />
            </div>
            <div className={classes.clientName}>
Joshep M.
            </div>

          </ul>
        
        </div>

      </div>
      
    </nav>
  );
}
