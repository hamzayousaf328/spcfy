import React from 'react'
import FormInput from '../../components/forminput/FormInput'
import {Link} from 'react-router-dom'
import LoginBackgroud from '../../images/Login.jpg'
import './Register.css'

const Register = () => {
  return (
    <div className='register-design' style={{ backgroundImage: `url(${LoginBackgroud})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height:'100vh'  }} >
      <div className='register-wrap'>
            <FormInput label = "First Name"/>
            <FormInput label = "Last Name"/>
            <FormInput label = "Institution"/>
            <FormInput label = "Email"/>
            <FormInput label = "Phone Number"/>
            <FormInput label = "Password" isPassword = {true} />
            <FormInput label = "Confirm Password" isPassword = {true} />
            <Link to="/">
                <button className='register-button'>
                    Register
                </button>
            </Link>
      </div>
    </div>
  )
}

export default Register
