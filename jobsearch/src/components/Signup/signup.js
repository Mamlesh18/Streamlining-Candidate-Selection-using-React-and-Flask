import React, { useEffect, useState } from "react";
import './signup.css';
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom';
import { postCall, apiEndpoint } from "../utils/api";

function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');

    async function submit(e) {
        e.preventDefault();

        try {
            let requestBody = { email, password, firstname, lastname };
            let res = await postCall("signup", requestBody);
            console.log(res);

            if (res.data === "user exists") {
                navigate("/", { state: { id: email } });
            } else if (res.data === "notexist") {
                alert("User has not signed up");
            }
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="signup">
            <div className="container-4">
                <h2 className="web">WebSeeking<span></span></h2>
                <div className="text">
                    <h1>Sign up</h1>
                    <p>Create your WebSeeking account</p>
                </div>
                <div className="your-input">
                    <div className="input">
                        <input type="text" name="firstName" id="firstName" onChange={(e) => { setFirstname(e.target.value) }} />
                        <label htmlFor="firstName">First Name</label>
                    </div>
                    <div className="input">
                        <input type="text" name="lastName" id="lastName" onChange={(e) => { setLastname(e.target.value) }} />
                        <label htmlFor="lastName">Last Name</label>
                    </div>
                    <div className="input">
                        <input type="text" name="emailOrPhone" id="emailOrPhone" onChange={(e) => { setEmail(e.target.value) }} />
                        <label htmlFor="emailOrPhone">Email/Phone Number</label>
                    </div>
                    <div className="input">
                        <input type="password" name="password" id="password" onChange={(e) => { setPassword(e.target.value) }} />
                        <label htmlFor="password">Password</label>
                    </div>
                    <br />
                    <br />
                    <br />
                    <button id="btn" onClick={submit}>Sign up</button>
                    <br />
                    <br />
                    <Link to="/login">Already have an account? Log in here</Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
