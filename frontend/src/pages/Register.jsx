import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from '../assets/Logo.svg';
const Register = () => {
  const [values,setValues]=useState({
    username:'',
    email:'',
    password:'',
    confirmPassword:''
  })
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(values)
  }
  const handleChange = (e) => {
    setValues({...values, [e.target.name]:e.target.value})
  }
  return (
    <FormContainer>
      <form onSubmit={(event) => handleSubmit(event)}>
        <div className="brand">
          <img src={Logo} alt="logo" />
          <h1>Snappy</h1>
          <input type='text' placeholder="Username" name="username" onChange={e => handleChange(e)} autoComplete="off" />
          <input type='email' placeholder="Email" name="email" onChange={e => handleChange(e)} autoComplete="off"/>
          <input type='password' placeholder="Password" name="password" onChange={e => handleChange(e)} autoComplete="off"/>
          <input type='password' placeholder="Confirm Password" name="confirmPassword" onChange={e => handleChange(e)} autoComplete="off"/>
          <button type='submit'>Create User</button>
          <span>already have an account ? <Link to='/login'>Login</Link></span>
        </div>
      </form>
    </FormContainer>
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