import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './index.css';
import './App.css';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
function App() {
  return (
    <>
   <Router>
    <Routes>
        <Route path="/" exact element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        </Routes>
    </Router>
    </>
  )
}
 
export default App
