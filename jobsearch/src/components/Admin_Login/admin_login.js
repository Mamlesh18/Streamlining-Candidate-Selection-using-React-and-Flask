import React, { useEffect, useState } from "react"
import axios from "axios"
import './admin_login_style.css';
import {useNavigate, NavLink } from 'react-router-dom';
import { postCall,apiEndpoint } from "../utils/api";

function Admin_Login() {
  

  const history=useNavigate();

  const [username,setEmail]=useState('')
  const [password,setPassword]=useState('')

  async function submit(e) {
    e.preventDefault();
  
    try {
      let requestBody = { username, password };
      let res = await postCall("admin_login", requestBody);
  
      if (res.data.success) {
        history("/", { state: { id: username } });
      } else {
        alert("Invalid username or password");
      }
    } catch (e) {
      console.log(e);
    }
  }
  
          
          // .catch(e=>{
          //     alert("wrong details")
          //     console.log(e);
          // })

    
      
     
  return (
    <div className="my-component">
      <div className="container-4">
        <h2 className="web">
          WebSeeking<span></span>
        </h2>
        <div className="text">
          <h1>Login</h1>
          <p>Lets us find you a Job that you dream off</p>
        </div>
          {/* <form action="POST"> */}
          <div className="your-input">
            <div className="input">
              <input
                type="text"
                name="email"
                id="email"
                onChange={(e) => { setEmail(e.target.value) }} 
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="input">
              <input
                type="password"
                name="password"
                id="password"
                onChange={(e) => { setPassword(e.target.value) }}
              />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <button type="submit" id="btn"  onClick={submit}>
            Sign in
          </button>
        {/* </form> */}
        {/* <p className="join-link">
          New to WebSeeking?
          <NavLink to="/signup" className="join-now" id="signup">
            Join now
          </NavLink>
        </p> */}
      </div>
    </div>
  );
};

export default Admin_Login;
