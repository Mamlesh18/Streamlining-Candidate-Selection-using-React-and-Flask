import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/login';
import Signup from './components/Signup/signup';
import FrontPage from './frontpage';
import Advance from './components/Advanced/advance';
import Resume from './components/Resume/resume';
import User from './components/User/user';
import Testing from './components/testing/signup1';
import Admin from './admin';
import Welcome from './welcome';
import Details from './Details';
import Detail from './components/Front/details'
import FileUpload from './components/File/FileUpload';



function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/advance" element={<Advance />} />
        <Route path="/FileUpload" element={<FileUpload />} />

        <Route path="/user" element={<User />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/Details" element={<Details />} />
        <Route path="/Detail/:detailId" element={<Detail />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/signup1" element={<Testing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
