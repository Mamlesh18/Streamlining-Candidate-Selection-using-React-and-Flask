// FrontPage.js

import React, { useState } from 'react';

import Header from './components/admin/header_1';
import Filter from './components/admin/filter_1';
function Admin() {
  const [filterData, setFilterData] = useState([]);

  const updateFilterData = (data) => {
    setFilterData(data);
    console.log(data)
  };
  return (
    <div>
      <Header updateFilterData={updateFilterData}/>
      <Filter filterData={filterData}/> 
    </div>
  );
}
export default Admin;
