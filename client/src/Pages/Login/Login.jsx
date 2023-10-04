import "./Login.css"
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import Blob from "../../assets/blob.svg"
import Pagani from "../../assets/pagani.png"
import { useContext, useState } from "react";
import { Link } from "react-router-dom"
import {AuthContext} from "../../authContext/AuthContext"
import {login} from "../../authContext/apiCalls"

const Login = () => {

  // State to hold email and password values
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const {dispatch} = useContext(AuthContext)
  
  // Function to handle form submission
  const handleSubmit = async(e)=>{
    e.preventDefault();
    login({email,password},dispatch);  // Call the login function with email and password
  }

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeftWrapper">
          <div className="loginImgContainer">
            {/* Display an image of a car */}
            <img src={Pagani} alt="porche" className="loginCar"/>
            {/* Display an decorative svg */}
            <img src={Blob} alt="" className="loginBlob"/>
          </div>
        </div>

        {/* Form for user login */}
        <form onSubmit={handleSubmit} className="loginForm">
            <h1 className="loginTitle">Login for DriveEase</h1>
            <div className="loginInputWrapper">
                <EmailIcon className="loginIcon"/>
                <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="loginInputWrapper">
                <LockIcon className="loginIcon"/>
                <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div className="buttonWrapper">
                {/* Login button */}
                <button type="Submit" className="loginBtn">Log In</button>
                {/* Link to register page */}
                <Link to="/register">
                  <button className="loginRegisterBtn" >Sign Up</button>
                </Link>
            </div>
        </form>
        
      </div>
    </div>
  )
}

export default Login
