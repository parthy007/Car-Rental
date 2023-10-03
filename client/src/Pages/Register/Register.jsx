import "./Register.css"
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import Blob from "../../assets/blob.svg"
import Buggati from "../../assets/buggati.png"
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom"

const Register = () => {

  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
      const res = await fetch("http://localhost:3001/auth/register",{
        method: "POST",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify({email,username,password})
      })
      if(!res.ok){
        throw new Error("Registration failed!")
      }
      navigate("/login");
    }catch(err){
      console.log("Error in registration", err)
    }
  }

  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeftWrapper">
          <div className="registerImgContainer">
            <img src={Buggati} alt="porche" className="registerCar"/>
            <img src={Blob} alt="" className="registerBlob"/>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="registerForm">
            <h1 className="registerTitle">Register for DriveEase</h1>
            <div className="registerInputWrapper">
                <PersonIcon className="registerIcon"/>
                <input type="text" placeholder="Username" onChange={(e)=>setUsername(e.target.value)}/>
            </div>
            <div className="registerInputWrapper">
                <EmailIcon className="registerIcon"/>
                <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="registerInputWrapper">
                <LockIcon className="registerIcon"/>
                <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div className="buttonWrapper">
                <button type="Submit" className="registerBtn">Register</button>
                <Link to="/login">
                  <button className="registerLoginBtn" >Sign In</button>
                </Link>
            </div>
        </form>
        
      </div>
    </div>
  )
}

export default Register
