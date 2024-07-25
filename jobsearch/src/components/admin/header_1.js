import './header.css';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const availableKeywords = [
  'Web Developer',
  'Software Engineer',
  'Data Scientist',
  'Graphic Designer',
  'Project Manager',
  'Marketing Manager',
  'Sales Representative',
  'Content Writer',
  'Accountant',
  'HR Manager',
  'Financial Analyst',
  'UX/UI Designer',
  'Electrical Engineer',
  'Civil Engineer',
  'Product Manager',
  'Mechanical Engineer',
  'Customer Service Representative',
  'Social Media Manager',
  'Nurse',
  'Doctor',
  'Teacher',
  'Front-end Developer',
  'Back-end Developer',
  'Full Stack Developer',
  'Business Analyst',
  'Quality Assurance Analyst',
  'Data Analyst',
  'Mobile App Developer',
  'Account Manager',
  'SEO Specialist',
  'Copywriter',
  'Legal Counsel',
  'Architect',
  'Pharmacist',
  'Project Coordinator',
  'Administrative Assistant',
  'Receptionist',
  'Data Entry Clerk',
  'Warehouse Manager',
  'Operations Manager',
  'Chef',
  'Electrician',
  'Plumber',
  'Photographer',
  'Event Planner',
  'Interior Designer',
  'Financial Advisor',
  'Investment Analyst',
  'UI Designer',
  'UX Researcher',
  'Registered Nurse',
  'Dentist',
  'Physical Therapist',
  'Occupational Therapist',
  'Speech Therapist',
  'Police Officer',
  'Firefighter',
  'Paramedic',
  'IT Support Specialist',
  'Systems Administrator',
  'Network Engineer',
  'Marketing Coordinator',
  'Brand Manager',
  'Public Relations Specialist',
  'Art Director',
  'Account Executive',
  'Insurance Agent',
  'Real Estate Agent',
  'Travel Agent',
  'Business Development Manager',
  'Executive Assistant',
  'Financial Planner',
  'Personal Trainer',
  'Yoga Instructor',
  'Pilates Instructor',
  'Nurse Practitioner',
  'Physician Assistant',
  'Medical Technologist',
  'Laboratory Technician',
  'Radiologic Technologist',
  'Pharmacist Technician',
  'EMT (Emergency Medical Technician)',
  'Security Officer',
  'Legal Assistant',
  'Paralegal',
  'Civil Engineer Technician',
  'Architectural Drafter',
  'Social Worker',
  'Guidance Counselor',
  'School Principal',
  'Librarian',
  'Museum Curator',
  'Biomedical Engineer',
  'Aerospace Engineer',
  'Chemical Engineer',
  'Environmental Scientist',
  'Geologist',
  'Geophysicist',
  'Archaeologist',
  'Financial Controller',
  'Machine Learning Engineer',
  'Artificial Intelligence Specialist',
  'Data Engineer',
  'DevOps Engineer',
  'Cloud Solutions Architect',
  'Blockchain Developer',
  'Game Developer',
  'Mobile Game Developer',
  'Virtual Reality Developer',
  'Augmented Reality Developer',
  'Cybersecurity Analyst',
  'Network Security Engineer',
  'Database Administrator',
  'Web Designer',
  'Front-end Designer',
  'Back-end Designer',
  'UI/UX Developer',
  'Java Developer',
  'Python Developer',
  'Ruby Developer',
  'PHP Developer',
  'Swift Developer',
  'Kotlin Developer',
  'Objective-C Developer',
  'Node.js Developer',
  'React Native Developer',
  'Vue.js Developer',
  'Angular Developer',
  'Machine Learning Specialist',
  'Deep Learning Engineer',
  'Computer Vision Engineer',
  'Natural Language Processing (NLP) Engineer',
  'Robotics Engineer',
  'Embedded Systems Developer',
  'IoT (Internet of Things) Developer',
  'Big Data Engineer',
  'Hadoop Developer',
  'Spark Developer',
  'Quantum Computing Researcher',
  'Bioinformatics Scientist',
  'Compiler Engineer',
  'Software Tester',
  'Quality Assurance Engineer',
  'Agile Project Manager',
  'Scrum Master',
  'Product Owner',
  'IT Consultant',
  'Technical Support Specialist',
  'System Administrator',
  'Linux Administrator',
  'Windows Administrator',
  'iOS Developer',
  'Android Developer',
  'Flutter Developer',
  'Xamarin Developer',
  'AR/VR Developer',
  'Cloud Engineer',
  'AI Ethics Researcher',
  'Computer Graphics Developer',
  'Distributed Systems Engineer',
  'Full Stack Web Developer',
  'Software Development Manager',
  'Computer Scientist',
  'Network Administrator',
  'UI/UX Designer',
  'Quantum Programmer',
  'Data Science Manager',
  'Statistical Analyst',
  'Mathematician',
  'Algorithm Developer',
  'Game Designer',
  'Unity Developer',
  'Unreal Engine Developer',
  'Network Architect',
  'Front-end Engineer',
  'Back-end Engineer',
  'Data Architect',
  'Cloud Security Engineer',
  'Software Architect',
  'Systems Analyst',
  'Embedded Software Engineer',
  'Firmware Developer',
  'Simulation Engineer',
  'AR/VR UX Designer',
  'Fintech Developer',
  'Healthtech Developer',
  'Edtech Developer',
  'Agritech Developer',
  'Cybersecurity Consultant',
  'Quantum Algorithm Developer',
  'Software Automation Engineer',
  'Data Visualization Specialist',
  'Game Artist',
  'UI/UX Researcher',
  'Cloud Solutions Engineer',
  'Machine Learning Research Scientist',
  'Data Warehouse Engineer',
  'Database Developer',
  'Natural Language Processing Specialist',
  'Cybersecurity Researcher',
  'Quantum Computing Engineer',
  'Web Development Instructor',
  'Software Engineering Coach',
  'AI Product Manager',
  'Software Product Manager',
  'Voice User Interface (VUI) Designer',
  'AR/VR Content Creator',
  'Quantum Software Developer',
  'Front-end Development Instructor',
  'Back-end Development Instructor',
  'Data Science Instructor',
  'Mobile App Development Instructor'
];

const majorCitiesInIndia = [
 // Asia
 'Mumbai',
 'Delhi',
 'Shanghai',
 'Beijing',
 'Tokyo',
 'Seoul',
 'Bangkok',
 'Singapore',
 // India
 'Bangalore',
 'Mumbai',
 'Delhi',
 'Chennai',
 'Kolkata',
 'Hyderabad',
 'Pune',
 'Ahmedabad',
 'Jaipur',
 'Surat',
 'Lucknow',
 'Kanpur',
 'Nagpur',
 'Indore',
 'Thane',
 'Bhopal',
 'Visakhapatnam',
 'Pimpri-Chinchwad',
 'Patna',
 'Vadodara',
 'Ghaziabad',
 'Ludhiana',
 'Coimbatore',
 'Agra',
 'Madurai',
 'Nashik',
 'Vijayawada',
 'Faridabad',
 'Meerut',
 'Rajkot',
 'Srinagar',
 'Amritsar',
 'Dhanbad',
 'Allahabad',
 'Ranchi',
 'Howrah',
 'Jabalpur',
 'Gwalior',
 'Vijayawada',
 'Jodhpur',
 'Raipur',
 'Kota',
 'Guwahati',
 'Chandigarh',
 'Solapur',
 'Hubli-Dharwad',
 'Bareilly',
 'Moradabad',
 'Mysore',
 'Gurgaon',
 'Aligarh',
 'Jalandhar',
 'Tiruchirappalli',
 'Bhubaneswar',
 'Salem',
 'Warangal',
 'Thiruvananthapuram',
 'Bhiwandi',
 'Saharanpur',
 'Gorakhpur',
 'Guntur',
 'Bikaner',
 'Amravati',
 'Noida',
 'Jamshedpur',
 'Bhilai',
 'Cuttack',
 'Firozabad',
 'Kochi',
 'Nellore',
 'Bhavnagar',
 'Dehradun',
 'Durgapur',
 'Asansol',
 'Rourkela',
 'Nanded',
 'Kolhapur',
 'Ajmer',
 'Akola',
 'Gulbarga',
 'Jamnagar',
 'Ujjain',
 'Loni',
 'Siliguri',
 'Jhansi',
 'Ulhasnagar',
 'Jammu',
 'Sangli-Miraj & Kupwad',
 'Nangi',
 'Haldia',
 'Naihati',
 'Shimla',
 'Ranchi',
 'Alwar',
 'Agartala',
 'Arrah',
 'Bihar Sharif',
 'Panipat',
 'Latur',
 'Dhule',
 'Rohtak',
 'Korba',
 'Bhilwara',
 'Brahmapur',
 'Muzaffarpur',
 'Ahmednagar',
 'Mathura',
 'Kollam',
  'Avadi',

 // Europe
 'London',
 'Paris',
 'Berlin',
 'Madrid',
 'Rome',
 'Amsterdam',
 'Vienna',
 'Athens',

 // North America
 'New York City',
 'Los Angeles',
 'Chicago',
 'Toronto',
 'Mexico City',
 'Miami',
 'San Francisco',
 'Dallas',

 // South America
 'Sao Paulo',
 'Buenos Aires',
 'Lima',
 'Rio de Janeiro',
 'Bogota',
 'Santiago',
 'Caracas',
 'Quito',

 // Africa
 'Cairo',
 'Lagos',
 'Johannesburg',
 'Nairobi',
 'Cape Town',
 'Casablanca',
 'Accra',
 'Dakar',

 // Australia
 'Sydney',
 'Melbourne',
 'Brisbane',
 'Perth',
 'Adelaide',
 'Auckland',
 'Wellington',
 'Canberra',

 // Middle East
 'Dubai',
 'Istanbul',
 'Tel Aviv',
 'Cairo',
 'Riyadh',
 'Doha',
 'Amman',
 'Beirut'
  // Add more city names as needed
];

function SearchBar() {
  const [query, setQuery] = useState('');
  const [cityQuery, setCityQuery] = useState(''); // State for city input
  const [results, setResults] = useState([]);
  const [cityResults, setCityResults] = useState([]); // State for city autocomplete results

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setQuery(inputValue);

    if (inputValue.length) {
      const filteredResults = availableKeywords.filter((keyword) =>
        keyword.toLowerCase().includes(inputValue.toLowerCase())
      );
      const limitedResults = filteredResults.slice(0, 3);

      setResults(limitedResults);
    } else {
      setResults([]);
    }
  };

  // Function to handle city input change
  const handleCityInputChange = (e) => {
    const inputValue = e.target.value;
    setCityQuery(inputValue);

    if (inputValue.length) {
      const filteredCities = majorCitiesInIndia.filter((city) =>
        city.toLowerCase().includes(inputValue.toLowerCase())
      );
      const limitedCities = filteredCities.slice(0, 3);

      setCityResults(limitedCities);
    } else {
      setCityResults([]);
    }
  };

  const handleResultClick = (result) => {
    setQuery(result);
    setResults([]);
  };

  // Function to handle city result click
  const handleCityResultClick = (city) => {
    setCityQuery(city);
    setCityResults([]);
  };

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
                  placeholder="search anything"
                  autoComplete="off"
                  value={query}
                  onChange={handleInputChange}
                />
              </div>
              <div
                className="result-box"
                style={{ maxHeight: '300px', overflowY: 'scroll' }}
              >
                {results.map((result) => (
                  <div
                    key={result}
                    onClick={() => handleResultClick(result)}
                    style={{ padding: '10px', cursor: 'pointer' }}
                  >
                    {result}
                  </div>
                ))}
              </div>
            </div>
            <label className="search-label">What</label>
          </div>
          <div className="search-bar">
            <label className="search-label">Where</label>
            <input
              type="text"
              className="search-input2"
              placeholder="Enter city name"
              autoComplete="off"
              value={cityQuery}
              onChange={handleCityInputChange}
            />
            <div
              className="result-box"
              style={{ maxHeight: '300px', overflowY: 'scroll' }}
            >
              {cityResults.map((city) => (
                <div
                  key={city}
                  onClick={() => handleCityResultClick(city)}
                  style={{ padding: '10px', cursor: 'pointer' }}
                >
                  {city}
                </div>
              ))}
            </div>
          </div>
          <button className="search-button" id="search-button">
            <i className="fa fa-search"></i>
          </button>
          <NavLink to="/advance">
            <button className="search-button" id="advance-search">
              A
            </button>
          </NavLink>
          <NavLink to="/analytics">
            <button className="search-button" id="advance-search">
              B
            </button>
          </NavLink>
          <NavLink to="/advance">
            <button className="search-button" id="advance-search">
              C 
            </button>
          </NavLink>
          
          <NavLink to="/generate_reports">
            <button id="login" className="login-button">
              Reports
            </button>
          </NavLink>
        </div>
      </header>
    </div>
  );
}

export default SearchBar;
