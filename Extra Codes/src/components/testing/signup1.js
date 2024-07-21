// import React, { useState } from "react";
// import './resume_1.css';
// import axios from "axios";
// import { NavLink, useNavigate } from 'react-router-dom';

// function Login() {
//     const history = useNavigate();

//     const [name, setFirstname] = useState('');
//     const [email, setEmail] = useState('');
//     const [phone, setPhone] = useState('');
//     const [number, setNumber] = useState('');
//     const [dob, setDob] = useState('');
//     const [gender, setGender] = useState('');

//     const handlePhoneChange = (e) => {
//         setPhone(e.target.value);
//     };

//     const handleGenderChange = (e) => {
//         setGender(e.target.value);
//     };

//     const submit = async (e) => {
//         e.preventDefault();

//         try {
//             await axios.post("http://localhost:8000/signup1", {
//                 name, email, phone, number, dob, gender
//             }).then(res => {
//                 if (res.data === "exist") {
//                     alert("User already exists");
//                 } else if (res.data === "notexist") {
//                     history("/", { state: { id: email } });
//                 }
//             });
//         } catch (e) {
//             console.log(e);
//         }
//     };

//     return (
//         <div className="signup">
//             <div className="cv-input">
//                 <h3>First Name</h3>
//                 <input type="text" id="cv5" name="cv1" onChange={(e) => { setFirstname(e.target.value) }} />
//                 <h3>Email</h3>
//                 <input type="email" id="cv1" name="cv2" onChange={(e) => { setEmail(e.target.value) }} />
//                 <h3>Phone Number</h3>
//                 <div>
//                     <select id="country-code" name="country-code" onChange={handlePhoneChange}>
//                         <option value="us">+1 (United States)</option>
//                         <option value="uk">+44 (United Kingdom)</option>
//                         <option value="india">+91 (India)</option>
//                         <option value="india">+93 (Afghanistan)</option>
//                         <option value="india">+54 (Argentina)</option>
//                         <option value="india">+61 (Australia)</option>
//                         <option value="india">+43 (Austria)</option>
//                         <option value="india">+880 (Bangladesh)</option>
//                         <option value="india">+55 (Brazil)</option>
//                         <option value="india">+1 (Canada)</option>
//                     </select>
//                     <input type="tel" id="phone" name="phone" onChange={(e) => { setNumber(e.target.value) }}   />
//                 </div>
//                 <h3>Date of Birth</h3>
//                 <input type="date" id="cv1" name="cv1" onChange={(e) => { setDob(e.target.value) }} />
//                 <h3>Gender</h3>
//                 <div>
//                     <select className="gender" id="country-code" name="country-code" onChange={handleGenderChange}>
//                         <option value="male">Male</option>
//                         <option value="female">Female</option>
//                         <option value="other">Other</option>
//                     </select>
//                 </div>
//             </div>
//             <NavLink to="/">
//                 <button id="btn-1" onClick={submit}>Sign up</button>
//             </NavLink>
//         </div>
//     );
// }

// export default Login;
