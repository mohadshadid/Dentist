import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Main from './views/Main';
import About from './views/About';
import Service from './views/Service';
import Contact from './views/Contact';

function App() {
  return (
    <div>


      <Routes>

        <Route path="/" element={<Main/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Service/>} />
        <Route path="/contact" element={<Contact/>} />


      
      </Routes>

    </div>
  );
}

export default App;
