import React, { useState } from "react"
import './resume.css';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from "axios"
import { postCall,apiEndpoint } from "../utils/api";


function Resume() {

  const history=useNavigate();
  const [name,setfirstname]=useState('')
  const [email,setemail]=useState('')
  const [emailError, setEmailError] = useState('');
  const [phone,setphone]=useState('')
  const [number,setnumber]=useState('')
  const [dob,setdob]=useState('')
  const [gender,setgender]=useState('')
  const [city,setcity]=useState('')
  const [state,setstate]=useState('')
  const [country,setcountry]=useState('')
  const [pincode,setpincode]=useState('')
  const [linkedin,setlinkedin]=useState('')
  const [github,setGithub] = useState('')
  const [summary,setsummary]=useState('')
  const [degree,setdegree]=useState('')
  const [institution,setinstitution]=useState('')
  const [field,setfieldofstudy]=useState('')
  const [year,setyear]=useState('')
  const [gpa,setgpa]=useState('')
  const [job,setjobtitle]=useState('')
  const [company,setcompany]=useState('')
  const [dates,setdates]=useState('')
  const [description,setdescription]=useState('')
  const [workExperiences, setWorkExperiences] = useState([
    { job: '', company: '', dates: '', description: '' }
  ]);
  const [technicalskills,settechnical]=useState('')
  const [softskills,setsoft]=useState('')
  const [hobbies,sethobbies]=useState('')
  const [certifications,setcertifications]=useState('')
  const [jobtype,setjobtype]=useState('')
  const[noticeperiod,setnoticeperiod]=useState('')
  const handlePhoneChange = (e) => {
    setphone(e.target.value);
};

const handleGenderChange = (e) => {
    setgender(e.target.value);
};

const handleDobChange = (e) => {
  const selectedDob = new Date(e.target.value);
  const currentDate = new Date();

  if (selectedDob > currentDate) {
    alert('Date of Birth cannot be in the future');
    return;
  }

  setdob(e.target.value);
};

const handleEmailChange = (e) => {
  const enteredEmail = e.target.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  
    if (!enteredEmail) {
      setEmailError('Email is required');
      return;
    }

   
    if (!emailRegex.test(enteredEmail)) {
      setEmailError('Invalid email format');
      return;
    }

   
    setEmailError('');

  
    setemail(enteredEmail);
  };

const handleDegreeChange = (e) => {
  setdegree(e.target.value);
};

const handleYearChange = (e) => {
  const currentYear = new Date().getFullYear();
  const selectedYear = parseInt(e.target.value, 10);

  if (selectedYear > currentYear + 5) {
    alert('Graduation year cannot be more than 5 years from now');
    return;
  }

  setyear(e.target.value);
};

const handleGpaChange = (e) => {
  const enteredGpa = parseFloat(e.target.value);

  if (enteredGpa > 10) {
    alert('CGPA cannot be more than 10');
    return;
  }

  setgpa(e.target.value);
};

const handleAddWorkExperience = () => {
  setWorkExperiences([...workExperiences, { job: '', company: '', dates: '', description: '' }]);
};

const handleRemoveWorkExperience = (index) => {
  const newWorkExperiences = [...workExperiences];
  newWorkExperiences.splice(index, 1);
  setWorkExperiences(newWorkExperiences);
};

const handleTechnicalSkillChange = (e) => {
  settechnical(e.target.value);
};

const handleSoftSkillChange = (e) => {
  setsoft(e.target.value);
};

const handleJobChange = (e) => {
  setjobtype(e.target.value);
};
const handleNoticeChange = (e) => {
  setnoticeperiod(e.target.value);
};


const handleWorkExperienceChange = (e, index, field) => {
  const newWorkExperiences = [...workExperiences];
  newWorkExperiences[index][field] = e.target.value;

  if (field === 'dates') {
    const currentDate = new Date();
    const selectedEndDate = new Date(e.target.value);

    if (selectedEndDate > currentDate) {
      alert('End date cannot be in the future');
      return;
    }
  }

  setWorkExperiences(newWorkExperiences);
};

const renderWorkExperiences = () => {
  return workExperiences.map((experience, index) => (
    <div key={index} class="cv-input">
      <div class="work-experience-container">
        <div>
          <br/>
          <h3>Job Title</h3>
          <input type="text"  id="cv5" name="cv1" onChange={(e) => { setjobtitle(e.target.value) }}/>

          <h3>Company name</h3>
          <input type="text"   id="cv5" name="cv1" onChange={(e) => { setcompany(e.target.value) }}/>
          <h3>End Date</h3>
          <input type="date" id={`employmentDates${index}`} name={`employmentDates${index}`} value={experience.dates} onChange={(e) => handleWorkExperienceChange(e, index, 'dates')} />
          <h3>Job description</h3>
          <input type="text" id="cv5" name="cv1" onChange={(e) => { setjobtype(e.target.value) }}/>

        </div>
        
        {/* Remove button for each work experience */}
        <button type="button" onClick={() => handleRemoveWorkExperience(index)}>Remove</button>
        <br/>
      </div>
    </div>
  ));
};



  async function submit(e){
      e.preventDefault();

      try{
        let requestBody = { name,email,emailError,phone,number,dob,gender,city,state,country,pincode,linkedin,github,summary,degree,institution,field,year,gpa,job,company,dates,description,technicalskills,softskills,hobbies,certifications,jobtype,noticeperiod
        }
let res = await postCall("resume",requestBody)
console.log(res)
          // await axios.post("http://localhost:8000/",{
          //     email,password
          // })
          // .then(res=>{
              if(res.data=="user exists"){
                  history("/",{state:{id:email}})
              }
              else if(res.data=="notexist"){
                  alert("User have not sign up")
              }
          
          // .catch(e=>{
          //     alert("wrong details")
          //     console.log(e);
          // })

      }
      catch(e){
          console.log(e);

      }
  }
  return (
    <div className="container-3">
    <h2>User Details</h2>
    <p class="description">Give us your details, So we can find a job for you </p>
      <div class="form-group">
        <div class="cv">
          <label for="cv">Basic Information</label>
        </div>
        <div class="cv-input">
            <h3>First Name <span className="mandatory-indicator">*</span></h3>
          <input type="text" id="cv5" name="cv1" onChange={(e) => { setfirstname(e.target.value) }}/>
          
          <h3>Email <span className="mandatory-indicator">*</span></h3>
          <input type="email" id="cv1" name="cv2" onChange={handleEmailChange} />
            
          
          <h3>Phone Number <span className="mandatory-indicator">*</span></h3>
            <div>
        <select id="country-code" name="country-code" onChange={handlePhoneChange}>
          <option value="us">+1 (United States)</option>
          <option value="uk">+44 (United Kingdom)</option>
          <option value="india">+91 (India)</option>
          <option value="india">+93 (Afghanistan)</option>
          <option value="india">+54 (Argentina)</option>
          <option value="india">+61 (Australia)</option>
          <option value="india">+43 (Austria)</option>
          <option value="india">+880 (Bangladesh)</option>
          <option value="india">+55 (Brazil)</option>
          <option value="india">+1 (Cannada)</option>
        </select>
        <input type="tel" id="phone" name="phone" onChange={(e) => { setnumber(e.target.value) }} />
      </div>
      <h3>Date of Birth <span className="mandatory-indicator">*</span></h3>
      <input type="date" id="cv1" name="cv1" value={dob} onChange={handleDobChange} />

      <h3>Gender <span className="mandatory-indicator">*</span></h3>
      <div  >
        <select class="gender" id="country-code" name="country-code" onChange={handleGenderChange}>
          <option value="us">Male</option>
          <option value="uk">Female</option>
          <option value="india">Other</option>
        </select>
        </div>

  <br/>
      <br/>
      
      <br/>
      <br/>
      
      <br/>
      <br/>

        </div>
        <div class="cv">
            <label for="cv">Contact Information</label>
          </div>
          <div class="cv-input">
              <h3>City <span className="mandatory-indicator">*</span></h3>
            <input type="text" id="cv5" name="cv1" onChange={(e) => { setcity(e.target.value) }}/>
            
            <h3>State <span className="mandatory-indicator">*</span></h3> 
            <input type="text" id="cv5" name="cv2" onChange={(e) => { setstate(e.target.value) }}/>
            
            <h3>Country <span className="mandatory-indicator">*</span></h3>
            <input type="text" id="cv5" name="cv3" onChange={(e) => { setcountry(e.target.value) }}/>

            <h3>Pincode <span className="mandatory-indicator">*</span></h3>
            <input type="code" id="cv5" name="cv4" onChange={(e) => { setpincode(e.target.value)}}/>
            
            <h3>Linkedin Profile <span className="mandatory-indicator">*</span></h3>
            <input type="url" id="cv4" name="cv4" onChange={(e) => { setlinkedin(e.target.value) }}/>

            <h3>Github Profile <span className="mandatory-indicator">*</span></h3>
            <input type="url" id="cv4" name="cv4" onChange={(e) => { setGithub(e.target.value)}}/>
         
          </div>
          
          <br/>
      <br/>

      <br/>        
        <br/>
        <br/>
          <div class="cv">
            <label for="cv">Professional Summary</label>
          </div>
          <div class="cv-input">
  <div class="summary-container">
    <div class="summary-heading">Professional Summary</div>
    <textarea class="summary-textarea" placeholder="Write your professional summary here..." onChange={(e) => { setsummary(e.target.value) }}></textarea>
  </div>
</div>

         
  <br/>
      <br/>
      
      <br/>
      <br/>
      
      <br/>
      <br/>          <div class="cv">
            <label for="cv">Education Background</label>
          </div>
          <div class="cv-input">
              <h3>Degrees <span className="mandatory-indicator">*</span></h3>
              <div  >
                <select class="gender" id="country-code" name="country-code" onChange={handleDegreeChange}>
                  <option value="us">Btech</option>
                  <option value="uk">Mtech</option>
                  <option value="india">Bsc</option>
                  <option value="us">Msc</option>
                  <option value="uk">BE</option>
                  <option value="india">Mba</option>
                  <option value="us">Bba</option>
                  <option value="uk">Arts</option>
                  <option value="india">Bse</option>
                  <option value="us">Btech</option>
                  <option value="uk">Mtech</option>
                  <option value="india">Bse</option>
                  <option value = "others">Others</option>
                </select>
                </div>

            <h3>Name of the institution <span className="mandatory-indicator">*</span></h3>
            
            <input type="text" id="cv5" name="cv2" onChange={(e) => { setinstitution(e.target.value) }}/>

            <h3>Field of Study <span className="mandatory-indicator">*</span></h3>
            
            <input type="text" id="cv5" name="cv2" onChange={(e) => { setfieldofstudy(e.target.value) }}/>

            <h3>Graduation Year <span className="mandatory-indicator">*</span></h3>
            
            <input type="number" id="cv5" name="cv2" value={year} onChange={handleYearChange} />

            <h3>CGPA <span className="mandatory-indicator">*</span></h3>
            
            <input type="text" id="cv5" name="cv2" value={gpa} onChange={handleGpaChange} />
            

       
          </div>
     <br/>
      <br/>
      
      <br/>
      <br/>
      
      <br/>
      <br/>
      <div class="cv">
      <label for="cv">Work Experience</label>
    </div>
    {renderWorkExperiences()} {/* Render the dynamically generated work experiences */}
    <button type="button" onClick={handleAddWorkExperience}>+</button>
         <br/>
      <br/>
      
      <br/>
      <br/>
      
      <br/>
      <br/>

      <div class="cv">
        <label for="cv">Skills</label>
      </div>
      <div class="cv-input">
        <h3>Technical Skills <span className="mandatory-indicator">*</span></h3>
        <div  >
          <select class="technical" id="tskills" name="tskills" onChange={handleTechnicalSkillChange}>
            <option value = "select">Select option</option>
            <option value="c">C</option>
            <option value="c++">C++</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="react">React</option>
            <option value="react-native">React - Native</option>
            <option value="flutter">Flutter</option>
            <option value="kotlin">Kotlin</option>
            <option value="aws">AWS</option>
            <option value="gcc">Google Cloud Computing</option>
            <option value="figma">Figma</option>
            <option value="github">Github</option>
          </select>
          </div>
          <h3>Soft Skills <span className="mandatory-indicator">*</span></h3>
          <div >
            <select class="soft" id="softskills" name="softskills" onChange={handleSoftSkillChange}>
              <option value="communication">Commuication</option>
              <option value="teamwork">Teamwork</option>
              <option value="leadership">Leadership</option>
              <option value="conflict">Conflict Management</option>
              <option value="time">Time Manaement</option>
              <option value="event">Event Management</option>
            </select>
            </div>
   
      </div>
      <br/>
      <br/>
      
      <br/>
      <br/>
      
      <br/>
      <br/>

      <div class="cv">
            <label for="cv">Hobbies</label>
          </div>
          <div class="cv-input">
            <input type="text" id="cv5" name="cv2" onChange={(e) => { sethobbies(e.target.value) }}/>
          </div>
            
      <br/>
      <br/>
      
      <br/>
      <br/>
      
      <br/>
      <br/>
      <div class="cv">
            <label for="cv">Certifications</label>
          </div>
          <div class="cv-input">
            <input type="text" id="cv5" name="cv2" onChange={(e) => { setcertifications(e.target.value) }}/>
          </div>
          <br/>
      <br/>
      
      <br/>
      <br/>
      
      <br/>
      <br/>
      <div class="cv">
        <label for="cv">Preferred Job Type</label>
      </div>
      
      <div class="cv-input">
        <h3>Types of Job <span className="mandatory-indicator">*</span></h3>
        <div >
            <select class="type" id="job-type" name="job-type" onChange={handleJobChange}>
              <option value="wfo">Work From Office</option>
              <option value="wfh">Work From Home</option>
              <option value="hybrid">Hybrid</option>
              
            </select>
            </div>
   
      </div>
  
        <br/>
      <br/>
      
      <br/>
      <br/>
      
      <br/>
      <br/>
  <div class="cv">
    <label for="cv">Availability</label>
  </div>
  <div class="cv-input">
    <h3>Notice period <span className="mandatory-indicator">*</span></h3>
    <div>
      <select class = "notice" id = "notice-period" name = "notice-period" onChange={handleNoticeChange}>
        <option value = "0">0 days</option>
        <option value = "15">1 to 15 days </option>
        <option value = "30">15 to 30 days</option>
        <option value = "60">30 to 60 days</option>
        <option value = "90">60 to 90 days</option>
        <option value = "120">90 to 120 days</option>
        <option value = "more">more than 120 days</option>
      </select>
    </div>

</div>

  <br/>
      <br/>
      
      <br/>
      <br/>
      
      <br/>
      <br/>
  <div class="cv">
    <label for="cv">Resume Upload</label>
  </div>
  {/* <div class="cv-input">
      <h3>Resume <span className="mandatory-indicator">*</span></h3>

        <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx"/>

    <h3>Cover Letter</h3>

          <input type="file" id="Cover_Letter" name="resume" accept=".pdf,.doc,.docx"/>

</div> */}
      <NavLink to="/FileUpload">
      <button id="btn" >Click here to upload your resume</button>

      </NavLink>

<br/>
      <br/>
      

      <div class="button-container">
      <NavLink to="/">

<button id="btn" onClick={submit}>Sign up</button>
</NavLink>
      </div>
    </div>
    </div>
  );
}

export default Resume;
