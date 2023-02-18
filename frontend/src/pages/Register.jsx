import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from '../assets/Logo.svg'
const Register = () => {
  const handleSubmit = (event) => {
    event.preventDefault()
  }
  const handleChange = (e) => {
    console.log(e.target.name)
  }
  return (
    <FormComponent>
      <form onSubmit={(event) => handleSubmit(event)}>
        <div className="brand">
          <img src={Logo} alt="logo" />
          <h1>Snappy</h1>
          <input type='text' placeholder="Username" name="username" onChange={e => handleChange(e)} />
          <input type='email' placeholder="Email" name="email" onChange={e => handleChange(e)} />
          <input type='password' placeholder="Password" name="password" onChange={e => handleChange(e)} />
          <input type='password' placeholder="Confirm Password" name="confirmPassword" onChange={e => handleChange(e)} />
          <button type='submit'>Create User</button>
          <span>already have an account ? <Link to='/login'>Login</Link></span>
        </div>
      </form>
    </FormComponent>
  )
}
export default Register
let FormComponent = styled.div`
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

`;