import React from 'react'
import LoginBackgroud from '../../images/Login.jpg'
import FormInput from '../../components/forminput/FormInput'
import {Link} from 'react-router-dom'
import './Login.css'

const Login = () => {
  var email = "email";
  const onChange = () => {
    console.log("SADASDASD")

  }

  return (
    <div className='login-design' style={{ backgroundImage: `url(${LoginBackgroud})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height:'100vh'  }} >
      <div className='login-wrap'>
          <FormInput onChange = {onChange} label = "Email"/>
          <FormInput label = "Password" isPassword = {true}/>
          <Link to="/Home">
            <button className='login-button'>
              Login
            </button>
          </Link>
          <Link to="/Register">
            <button className='register-button'>
              Register
            </button>
          </Link>
      </div>
    </div>
  )
}

export default Login
