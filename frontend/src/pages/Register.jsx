import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from '../assets/Logo.svg';
import { ToastContainer, toast } from 'react-toastify'
import axios from 'axios';
import "react-toastify/dist/ReactToastify.css"
const Register = () => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const toastOptions = {
    autoClose: 5000,
    position: "bottom-right",
    pauseOnHover: true,
    draggable: false,
    theme: 'dark'
  }
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    if(validation()){
      const { username, email, password, confirmPassword } = values;
      const {data}=await axios.post('http://localhost:8082/api/v1/register',{username,email,password})
      console.log(data);
    }
  }

  const validation=()=>{
    const { username, email, password, confirmPassword } = values;
    if (username.length < 3) {
      toast.error("User name must be at least 3 characters long", toastOptions)
      return false;
    }
    else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
      toast.error("Please enter a valid email", toastOptions)
      return false;
    }
    else if (password.length < 6) {
      toast.error("Password must be at least 6 characters long", toastOptions)
      return false;
    }
    else if (password !== confirmPassword) {
      toast.error("Password and Confirm Password should be same", toastOptions)
      return false;
    }
    return true
  }
  return (
    <>
      <FormContainer>
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className="brand">
            <img src={Logo} alt="logo" />
            <h1>Snappy</h1>
            <input type='text' placeholder="Username" name="username" onChange={e => handleChange(e)} autoComplete="off" />
            <input type='email' placeholder="Email" name="email" onChange={e => handleChange(e)} autoComplete="off" />
            <input type='password' placeholder="Password" name="password" onChange={e => handleChange(e)} autoComplete="off" />
            <input type='password' placeholder="Confirm Password" name="confirmPassword" onChange={e => handleChange(e)} autoComplete="off" />
            <button type='submit'>Create User</button>
            <span>already have an account ? <Link to='/login'>Login</Link></span>
          </div>
        </form>
      </FormContainer>
      <ToastContainer />
    </>
  )
}
export default Register
let FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap:1rem;
  background-color: #131324;
  .brand{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    img{
      height: 5rem;
    }
    h1{
      color:white
    }
  }
  form{
    flex-direction: column;
    gap: 2rem;
    background-color: #00000076;
    border-radius: 2rem;
    padding: 3rem 5rem;
    input{
      padding: 1rem;
      background-color: transparent;
      border: 0.1rem solid #4e0eff;
      border-radius: 0.4rem;
      color: white;
      width: 100%;
      font-size: 1rem;
      &:focus{
        border: 0.1rem solid #997af0;
        outline: none;
      }
    }
  }
  button {
    background-color: #997af0;
    color: white;
    padding: 1rem 2rem;
    border:none;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    &:hover{
      background-color: #4e0eff;
    }
  }
  span{
    color:white;
    text-transform: uppercase;
    a{
      color: #4e0eff;
      text-decoration: none;
      font-weight: bold;
    }
  }
`;