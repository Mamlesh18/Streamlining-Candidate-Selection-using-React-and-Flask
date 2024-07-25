import React, { useEffect, useState } from 'react';
import { getCall, apiEndpoint } from '../utils/api';
import './filter.css';
import { NavLink, Link } from 'react-router-dom';
import Detail from './details'; // Import the new Detail component


const Filter = ({ filterData }) => {
  const [top10Data, setTop10Data] = useState([]);
  const [selectedInterval, setSelectedInterval] = useState('recents');

  useEffect(() => {
    const fetchTop10Details = async () => {
      try {
        let res = await getCall(`admin?intervals=${selectedInterval}`);
        const regularTop10 = res.data.data;

         const mergedTop10 = filterData.length > 0 ? [...filterData, ...regularTop10] : regularTop10;

        setTop10Data(mergedTop10);
      } catch (error) {
        console.error('Error fetching top 10 details:', error);
      }
    };

    fetchTop10Details();
  }, [selectedInterval, filterData]); // Update when selectedInterval or filterData changes

  const handleSortChange = (event) => {
    setSelectedInterval(event.target.value);
  };

  return (

<div class="container-fluid">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

    <main>
      
    <div class="left-section">
      <div class="filters">
        
      
      <h4>Distance</h4>
<h5>Within the <span id="distance-value"></span> miles of bangalore,Karnataka</h5>

<div class="additional-info">
  <span class="min-value">0</span>
  <input type="range" class="distance-slider" min="0" max="100" />
  <span class="max-value">100</span>
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

  <div>
    <div class="joberz">
        <h1>Top 10 Details</h1>
        <label>
          Sort by:
          <select value={selectedInterval} onChange={handleSortChange}>
            <option value="recent">Relevance - Most Recent</option>
            <option value="oneWeek">One Week</option>
            <option value="oneMonth">One Month</option>
            <option value="threeMonths">Three Months</option>
            <option value="sixMonths">Six Months</option>
          </select>
        </label>
      </div>

      <div>
        {top10Data.map((detail) => (
          <div key={detail._id} className="outline-box">
            <div className="job-info">
              <p>
                {detail.job} at <span>{detail.state}</span>
              </p>
              <p className="job-type">{detail.name}</p>
              <p>
                {detail.phone}
                <span>{detail.state}</span>
              </p>
              <p>{detail.email}</p>
              {/* <NavLink to={`/Detail/${detail._id}`} activeClassName="nav-link-active"> */}
  <button className="show-more" style={{ color: 'blue', fontSize: '16px' }}>
    Show more
  </button>
{/* </NavLink> */}
            </div>
          </div>
        ))}
        </div>
        </div>


    
    {/* <div class="outline-box">
        <div class="job-info">
          <p>Chemical <b>Engineer</b> at <span >Reddy Labs</span></p>
          <p class="job-type">Chemical researcher</p>
          <p>B.Tech from IIT <span >Madras</span></p>
          <p>Chennai, Tamil Nadu</p>
        </div>
        <NavLink to="/user" activeClassName="nav-link-active">

<button className='show-more' style={{ color: 'blue', fontSize: '16px' }}>Show more</button>
    </NavLink>

      </div>
      
    <div class="outline-box">


  <p>B.Tech from <span>RV</span></p>
  <p>Bangalore, Karnataka</p>
</div>
<NavLink to="/user" activeClassName="nav-link-active">

<button className='show-more' style={{ color: 'blue', fontSize: '16px' }}>Show more</button>
    </NavLink>

</div> */}
  </div>

</div>
</main>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>


  </div>
  );
};

export default Filter;
