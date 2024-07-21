import React from 'react';
import './advance.css';
import { NavLink } from 'react-router-dom';


const Advance = () => 
  {  return (
    <div className="container-2" id = "advance-section">
      <h2>Advanced Search</h2>
      <p className="description">
        To conduct a search, complete at least one text field in the Find CV's, Work experience, or Education sections and select Find candidates.
      </p>
      <form>
        <div className="form-group">
          <div className="cv">
            <label htmlFor="cv">Find CVs with...</label>
          </div>
          <div className="cv-input">
            <h3>Skills</h3>
            <input type="text" id="cv1" name="cv1" />
            <h3>None of these skills</h3>
            <input type="text" id="cv1" name="cv4" />
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="cv">
            <label htmlFor="cv">Education</label>
          </div>
          <div className="cv-input">
            <h3>College or University name</h3>
            <input type="text" id="cv1" name="cv1" />
            <h3>Field of study</h3>
            <input type="text" id="cv1" name="cv2" />
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="cv">
            <label htmlFor="cv">Location</label>
          </div>
          <div className="cv-input">
            <h3>Where</h3>
            <input type="text" id="cv1" name="cv1" />
            <h3>Distance</h3>
            <input type="text" id="cv1" name="cv2" />
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="cv">
            <label htmlFor="cv">Activity</label>
          </div>
          <div className="cv-input">
            <h3>CV last updated</h3>
            <select class="last-updated" id="last" name="last">
          <option value="us">0 to 15 days ago</option>
          <option value="uk">15 to 30 days ago</option>
          <option value="india">30 to 60 days ago</option>
          <option value="india">60 to 90 days ago</option>
          <option value="india">90 to 120 days ago</option>
        </select>
      
            <h3>Time at current job</h3>
            <select class="current-job" id="time" name="time">
          <option value="us">0 to 15 days ago</option>
          <option value="uk">15 to 30 days ago</option>
          <option value="india">30 to 60 days ago</option>
          <option value="india">60 to 90 days ago</option>
          <option value="india">90 to 120 days ago</option>
        </select>
          </div>
        </div>
        <div className="button-container">
          <NavLink to="/">
          <button type="submit" className="blue-button">
            Submit
          </button>
          </NavLink>
          <button type="reset" className="white-button">
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default Advance;
