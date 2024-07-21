import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Autocomplete({ onSelect }) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (query.trim() !== '') {
      axios.get(`/autocomplete?query=${query}`)
        .then(response => setSuggestions(response.data))
        .catch(error => console.error('Error fetching suggestions:', error));
    } else {
      setSuggestions([]);
    }
  }, [query]);

  const handleSelection = (selectedItem) => {
    setQuery('');
    setSuggestions([]);
    onSelect(selectedItem);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search skills..."
      />
      <ul>
        {suggestions.map((skill, index) => (
          <li key={index} onClick={() => handleSelection(skill)}>
            {skill.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Autocomplete;
