import React from 'react';
import './filter.css';
import { NavLink } from 'react-router-dom';


const Filter = () => {
  
  return (

<div class="container-fluid">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

    <main>
      
    <div class="left-section">
      <div class="filters">
        
      
        <h4>Distance</h4>
        <h5>Within the miles of bangalore,Karnataka</h5>

        
      <div class="additional-info">
        <p> <input type="text" class="big-curvy-textbox"/></p>
      </div>
      <br/>
<div>

      <div > <h4>CV last updated</h4>
        <select class="options">
          <option value="option1">1 day ago</option>
          <option value="option2">1 week ago</option>
          <option value="option3">1 month ago</option>
          <option value="option4">6 months ago</option>
          <option value="option4">1 year ago</option>

        </select>
        </div>
        <br/>
<div>

        <h4>Time at Current job</h4>
        
        <select class="options">
          <option value="option1"> less than 1 month</option>
          <option value="option2"> less than 3 month</option>
          <option value="option3">less than 6 month</option>
          <option value="option4">less than 1 year</option>
          <option value="option4">more than 1 year</option>

        </select>
        <br/>
        </div>

        </div>
     
    </div>
    <br/>

    <h4>Availability</h4>
    <br/>


    <div class="filter-options">
      <div class="filter-option">
        <input type="checkbox" id="filter1"/>
        <label for="filter1">Ready to work now</label>
        <span class="number">30</span>

      </div>
    </div>

    <h4>Job Titles</h4>
    <br/>

    <div class="filter-options">
      <div class="filter-option">
        <input type="checkbox" id="filter1"/>
        <label for="filter1">Java Developer</label>
        <span class="number">30</span>

      </div>
      <div class="filter-option">
        <input type="checkbox" id="filter2"/>
        <label for="filter2">Software engineer</label>
        <span class="number">30</span>

  </div>
 
<div class="filter-option">
<input type="checkbox" id="filter2"/>
<label for="filter2">Data Analyst</label>
<span class="number">30</span>

</div>
<div class="filter-option">
<input type="checkbox" id="filter2"/>
<label for="filter2">Cloud Engineer</label>
<span class="number">30</span>

</div>
<div class="filter-option">
<input type="checkbox" id="filter2"/>
<label for="filter2">App developer - Flutter</label>
<span class="number">30</span>


</div>
<div class="filter-option">
<input type="checkbox" id="filter2"/>
<label for="filter2">App developer - Kotlin</label>
<span class="number">30</span>


</div>
<div class="filter-option">
<input type="checkbox" id="filter2"/>
<label for="filter2">Delivery manager</label>
<span class="number">30</span>


</div>
<div class="filter-option">
<input type="checkbox" id="filter2"/>
<label for="filter2">Python developer</label>
<span class="number">30</span>


</div>
<div class="filter-option">
<input type="checkbox" id="filter2"/>
<label for="filter2">React Native</label>
<span class="number">30</span>


</div>
<div class="filter-option">
<input type="checkbox" id="filter2"/>
<label for="filter2">Front-end developer</label>
<span class="number">30</span>


</div>
<div class="filter-option">
<input type="checkbox" id="filter2"/>
<label class="check" for="filter2">Middleware developer</label>
<span class="number">30</span>


</div>
<div class="filter-option">
<input type="checkbox" id="filter2"/>
<label for="filter2">Product manager</label>
<span class="number">30</span>


</div>
<div class="filter-option">
<input type="checkbox" id="filter2"/>
<label for="filter2">Finance manager</label>
<span class="number">30</span>


</div>
<div class="filter-option">
<input type="checkbox" id="filter2"/>
<label for="filter2">Sales Manager</label>
<span class="number">30</span>


</div>
<div class="filter-option">
<input type="checkbox" id="filter2"/>
<label for="filter2">Management Team</label>
<span class="number">30</span>


</div>
<div class="filter-option">
<input type="checkbox" id="filter2"/>
<label for="filter2">HR</label>
<span class="number">30</span>


</div>
<div class="filter-option">
<input type="checkbox" id="filter2"/>
<label for="filter2">Mechanical engineer</label>
<span class="number">30</span>


</div>
<div class="filter-option">
<input type="checkbox" id="filter2"/>
<label for="filter2">Embedded systems engineer</label>
<span class="number">30</span>


</div>
<div class="filter-option">
<input type="checkbox" id="filter2"/>
<label  for="filter2">Automobile expert</label>
<span class="number">30</span>


</div>
<div class="filter-option">
<input type="checkbox" id="filter2"/>
<label for="filter2">Business analyst</label>
<span class="number">30</span>


</div>
<div class="filter-option">
<input type="checkbox" id="filter2"/>
<label for="filter2">Foreign affairs manager</label>
<span class="number">30</span>


</div>
<div class="filter-option">
<input type="checkbox" id="filter2"/>
<label for="filter2">Secretary</label>
<span class="number">30</span>


</div>
  </div>

  <h4>Company</h4>
  <br/>
    <div class="filter-options">
      <div class="filter-option">
        <input type="checkbox" id="filter1"/>
        <label for="filter1">Infosys</label>
        <span class="number">30</span>

      
      </div>
      <div class="filter-option">
        <input type="checkbox" id="filter2"/>
        <label for="filter2">Cisco</label>
        <span class="number">30</span>
      
      </div>
      <div class="filter-option">
        <input type="checkbox" id="filter2"/>
        <label for="filter2">EMotorad</label>
        <span class="number">30</span>
      
      </div>
    </div>
  </div>

  <div class="right-section">

<div class="job-details" id="jobshow" >
<h4 class="joberz">
  <span class="left-text">55,444 CVs</span>
  <span class="right-text">Sort by: relevance - most recent</span>
</h4>

<div>
    <div class="outline-box">
    

    <div className="job-info">
        <p>Java <b>Developer</b> at <span >ABC Company</span></p>
        <p class="job-type">Engineer Trainer (Java)</p>
        <p>M.Tech from BITS <span>Pilani</span></p>
        <p>Bangalore, Karnataka</p>
      </div>
      <NavLink to="/user" activeClassName="nav-link-active">

      <h6 className='show-more' style={{ color: 'blue', fontSize: '16px' }}>Show more</h6>
    </NavLink>

    </div>


    
    <div class="outline-box">
        <div class="job-info">
          <p>Chemical <b>Engineer</b> at <span >Reddy Labs</span></p>
          <p class="job-type">Chemical researcher</p>
          <p>B.Tech from IIT <span >Madras</span></p>
          <p>Chennai, Tamil Nadu</p>
        </div>
        <NavLink to="/user" activeClassName="nav-link-active">

        <h6 className='show-more' style={{ color: 'blue', fontSize: '16px' }}>Show more</h6>
</NavLink>

      </div>
      
    <div class="outline-box">

<div class="job-info">
  <p>Software <b>Engineer</b> at <span >Infosys</span></p>
  <p class="job-type">Engineer Trainer (C, C++)</p>
  <p>M.Tech from <span>MIT</span></p>
  <p>Bangalore, Karnataka</p>
</div>
<NavLink to="/user" activeClassName="nav-link-active">

<h6 className='show-more' style={{ color: 'blue', fontSize: '16px' }}>Show more</h6>
    </NavLink>

</div>

<div class="outline-box">

<div class="job-info">
  <p>Data <b>Analyst</b> at <span >Services consulting Ltd.</span></p>
  <p class="job-type">Big data analysis trainer</p>
  <p>B.Tech from VIT <span>Vellore</span></p>
  <p>Belandur, Karnataka</p>
</div>
<NavLink to="/user" activeClassName="nav-link-active">

<h6 className='show-more' style={{ color: 'blue', fontSize: '16px' }}>Show more</h6>
    </NavLink>

</div>

<div class="outline-box">

<div class="job-info">
  <p>Cloud <b>Developer</b> at <span >Bosch</span></p>
  <p class="job-type">Cloud developer</p>
  <p>M.Tech from Wisconsin <span>University</span></p>
  <p>Hyderabad, Telangana</p>
</div>
<NavLink to="/user" activeClassName="nav-link-active">

<h6 className='show-more' style={{ color: 'blue', fontSize: '16px' }}>Show more</h6>
    </NavLink>

</div>

<div class="outline-box">

<div class="job-info">
  <p>Flutter - App <b>Developer</b> at <span >EMotorad</span></p>
  <p class="job-type">App development trainer (flutter)</p>
  <p>B.Tech from Amity <span>University</span></p>
  <p>Delhi, India</p>
</div>
<NavLink to="/user" activeClassName="nav-link-active">

<h6 className='show-more' style={{ color: 'blue', fontSize: '16px' }}>Show more</h6>
    </NavLink>

</div>

<div class="outline-box">

<div class="job-info">
  <p>Kotlin - App <b>Developer</b> at <span >Bosch</span></p>
  <p class="job-type">App developer</p>
  <p>M.Tech from BITS <span>Pilani</span></p>
  <p>Bangalore, Karnataka</p>
</div>
<NavLink to="/user" activeClassName="nav-link-active">

<h6 className='show-more' style={{ color: 'blue', fontSize: '16px' }}>Show more</h6>
    </NavLink>

</div>

<div class="outline-box">

<div class="job-info">
  <p><b>Delivery Manager</b> at <span >Infosys</span></p>
  <p class="job-type">Delivery manager</p>
  <p>B.Tech from PES <span>Bangalore</span></p>
  <p>Bangalore, Karnataka</p>
</div>
<NavLink to="/user" activeClassName="nav-link-active">

<h6 className='show-more' style={{ color: 'blue', fontSize: '16px' }}>Show more</h6>
    </NavLink>

</div>

<div class="outline-box">

<div class="job-info">
  <p>Python <b>Developer</b> at <span >Infenion</span></p>
  <p class="job-type">Engineer Trainer (Python)</p>
  <p>M.Tech from BITS <span>Goa</span></p>
  <p>Goa</p>
</div>
<NavLink to="/user" activeClassName="nav-link-active">

<h6 className='show-more' style={{ color: 'blue', fontSize: '16px' }}>Show more</h6>
    </NavLink>

</div>

<div class="outline-box">

<div class="job-info">
  <p>React Native <b>Developer</b> at <span >Strava</span></p>
  <p class="job-type">App developer</p>
  <p>B.Tech from New Horizon <span>University</span></p>
  <p>Chennai, Tamil Nadu</p>
</div>
<NavLink to="/user" activeClassName="nav-link-active">

<h6 className='show-more' style={{ color: 'blue', fontSize: '16px' }}>Show more</h6>
    </NavLink>

</div>

<div class="outline-box">

<div class="job-info">
  <p>Front - End <b>Developer</b> at <span >KSRTC</span></p>
  <p class="job-type">Front - end developer</p>
  <p>M.Tech from VIT <span>Chennai</span></p>
  <p>Chennai, Tamil Nadu</p>
</div>
<NavLink to="/user" activeClassName="nav-link-active">

<h6 className='show-more' style={{ color: 'blue', fontSize: '16px' }}>Show more</h6>
    </NavLink>

</div>

<div class="outline-box">

<div class="job-info">
  <p>Product <b>Manager</b> at <span >EMotorad</span></p>
  <p class="job-type">Senior product manager</p>
  <p>B.Tech from Narula <span>Institute Of Technology</span></p>
  <p>Bhubhaneshwar, Odisha</p>
</div>
<NavLink to="/user" activeClassName="nav-link-active">

<h6 className='show-more' style={{ color: 'blue', fontSize: '16px' }}>Show more</h6>
    </NavLink>

</div>

<div class="outline-box">

<div class="job-info">
  <p>Automobile <b>Expert</b> at <span >Ola Electric</span></p>
  <p class="job-type">Automobile engineer</p>
  <p>M.Tech from NIT <span>Warangal</span></p>
  <p>Amaravati, Andhra Pradesh</p>
</div>
<NavLink to="/user" activeClassName="nav-link-active">

<h6 className='show-more' style={{ color: 'blue', fontSize: '16px' }}>Show more</h6>
    </NavLink>

</div>

<div class="outline-box">

<div class="job-info">
  <p> <b>HR</b> at <span >Byjus</span></p>
  <p class="job-type">HR Manager</p>
  <p>Indian Institute of <span>Mass Communication</span></p>
  <p>Thissur, Kerala</p>
</div>
<NavLink to="/user" activeClassName="nav-link-active">

<h6 className='show-more' style={{ color: 'blue', fontSize: '16px' }}>Show more</h6>
    </NavLink>

</div>

<div class="outline-box">

<div class="job-info">
  <p>Mechanical <b>Engineer</b> at <span >Toyota</span></p>
  <p class="job-type">Mechanical Engineer</p>
  <p>B.Tech from <span>RV</span></p>
  <p>Bangalore, Karnataka</p>
</div>
<NavLink to="/user" activeClassName="nav-link-active">

<h6 className='show-more' style={{ color: 'blue', fontSize: '16px' }}>Show more</h6>
    </NavLink>

</div>
</div>

      </div>
      </div>
</main>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>

  </div>
  );
};

export default Filter;
