// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Footer from './components/Footer'; 
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import SkillCardsPage from './components/SkillCardsPage'; // Ensure this is imported
import './index.css'; // Ensure Tailwind CSS is imported

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-black">        
        <main className="p-4">
          <Routes>
            <Route path="/" element={<Home/> } />
            <Route path="/SignUp" element={<SignUp/>} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/Footer" element={<Footer/>} /> {/* Change to element */}
            <Route path="/SkillCards" element={<SkillCardsPage />} />
          </Routes>
        </main>

        {/* Optional Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;