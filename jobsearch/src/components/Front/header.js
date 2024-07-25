import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { getCall, apiEndpoint } from '../utils/api';

function SearchBar({ updateFilterData }) {
  const [searchSkills, setSearchSkills] = useState('');
  const [searchCity, setSearchCity] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const res = await getCall(`filter?city=${searchCity}&state=${searchSkills}`);
      console.log('API Response:', res);

      if (res.data.success) {
        setSearchResults(res.data.data.slice(0, 3));
        updateFilterData(res.data.data); // Update the filter data in the parent component
      } else {
        setSearchResults([]);
        updateFilterData([]); // Clear previous results on unsuccessful response
      }
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  useEffect(() => {
    console.log('Search Results:', searchResults);
  }, [searchResults]);

  return (
    <div className="container-1">
      <header>
        <div className="search-container">
          <div className="search-bar">
            <div className="search-box">
              <div className="row">
                <input
                  type="text"
                  id="input-box"
                  className="search-input1"
                  placeholder="search skills or job title"
                  autoComplete="off"
                  value={searchSkills}
                  onChange={(e) => setSearchSkills(e.target.value)}
                />  <div
                className="result-box"
                style={{ maxHeight: '300px', overflowY: 'scroll' }}
              >
                 {searchResults.map((result) => (
                <div key={result._id} className="result-item">
                  <p>{result.city}</p>
                  {/* Add more fields as needed */}
                </div>
              ))}
              </div>
              </div>
              {/* ... Other code ... */}
            </div>
            <label className="search-label">What</label>
          </div>
        
          <div className="search-bar">
            <label className="search-label">Where</label>
            <input
              type="text"
              className="search-input2"
              placeholder="search city name"
              autoComplete="off"
              value={searchCity}
              onChange={(e) => setSearchCity(e.target.value)}
            />
            <div
              className="result-box"
              style={{ maxHeight: '300px', overflowY: 'scroll' }}
            >
               {searchResults.map((result) => (
              <div key={result._id} className="result-item">
                <p>{result.city}</p>
                {/* Add more fields as needed */}
              </div>
            ))}
            </div>
          </div>
          <button className="search-button" id="search-button" onClick={handleSearch}>
            <i className="fa fa-search"></i>
          </button>

          {/* <div className="result-box" style={{ maxHeight: '300px', overflowY: 'scroll' }}>
            {searchResults.map((result) => (
              <div key={result._id} className="result-item">
                <p>{result.state}</p>
                <p>{result.city}</p>
              </div>
            ))}
          </div> */}

          <NavLink to="/advance">
            <button className="search-button" id="advance-search">
              Advance search
            </button>
          </NavLink>
          <NavLink to="/resume">
            <button className="search-button-2" id="resume">
              Resume
            </button>
          </NavLink>
          <NavLink to="/admin_login">
            <button className="search-button-1" id="resume">
              Admin Login
            </button>
          </NavLink>
          <NavLink to="/login">
            <button id="login" className="login-button">
              Login
            </button>
          </NavLink>
        </div>
      </header>
    </div>
  );
}

export default SearchBar;
