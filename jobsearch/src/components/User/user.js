import React from 'react';
import './user.css';

const Login = () => {
  return (
    <div>
      <div className="top-section">
        <h2 className="name">Mamlesh VA</h2>
        <div className="name-info" >
          <p className="job-title">
            <a href="https://github.com/mamleshva">GitHub</a> |
            <a href="https://www.linkedin.com/in/mamlesh-va-55a356233/">LinkedIn</a> |
            <a href="mailto:your.email@gmail.com">Gmail</a>
          </p>
        </div>
        <div className="buttons" >
          <a className="button" href="logo.png">Resume</a>
          <a className="button" href="logo.png">CV</a>
        </div>
      </div>
      <div className="main-container">
        <div className="left-sections">
          <h2 className="section-title" id="personal">Personal Information</h2>
          <p className="info"><span>City:</span> Chennai</p>
          <p className="info"><span>College:</span> Vellore Institute of Technology</p>
          <p className="info"><span>Field of Study:</span> Information Technology</p>
          <p className="info"><span>Date Of Birth:</span> 06.03.2004</p>

          <h3 className="section-title">Hobbies:</h3>
          <p>Coding</p>
          <p>Badminton</p>
          <p>Watching movies and series</p>
          <p>Exploring new things</p>
          <h3 className="section-title">Soft Skills:</h3>
          <p>Team work</p>
          <p>Effective communication</p>
          <p>Leadership qualities</p>
        </div>
        <div className="right-sections">
          <h2 className="section-title">Candidate information</h2>
          <h3 className="section-title">Technical Skills:</h3>
          <p>C, C++, Python, Java</p>
          <h3 className="section-title">Resume Last Updated:</h3>
          <p>6 months ago</p>
          <h3 className="section-title">Work Experience:</h3>
          <p>Title Of Last job: Java Developer</p>
          <p>Company Of Latest Job: Infenion</p>
          <p>Years of Experience: 3</p>
          <h3 className="section-title">Certifications:</h3>
          <p>SQL Intermediate</p>
          <p>AWS Certification</p>
          <p>Google cloud certification</p>
          <p>NPTEL - Leadership and team effectiveness, advanced course in social psychology</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
