import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Body from './Body';
import Teachingjobs from './teachingjobs/Teachingjobs';
import Cyberschool from './cyberschool/Cyberschool';
import Findteachingjobs from './teachingjobs/Findteachingjobs';

function NavbarWrapper() {
  const location = useLocation();
  const showNavbar = location.pathname !== '/teachingJobs' && location.pathname !== '/cyberschool' && location.pathname !== '/findteachingjobs';
  return showNavbar ? <Navbar /> : null;
}


export default function App() {
  return (
    <Router>
      <>
        {/* Render NavbarWrapper instead of Navbar */}
        <NavbarWrapper />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/teachingJobs" element={<Teachingjobs />} />
          <Route path="/cyberschool" element={<Cyberschool />} />
          <Route path="/findteachingjobs" element={<Findteachingjobs />} />
          {/* Add additional routes here */}
        </Routes>
      </>
    </Router>
  );
}
