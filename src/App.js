import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Recycleitems from './pages/Recycleitems';
import SignUp from './pages/signup';
import Contact from './pages/contact';
import Login from './pages/LoginControl';
import GoogleMap from './pages/googleMap';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path='/' caseSensitive element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/login' element={<Login />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/Recycleitems' element={<Recycleitems />} />
                <Route path='/sign-up' element={<SignUp />} />
                <Route path='/googlemap' element={<GoogleMap />} />
            </Routes>
        </Router>
    );
}

export default App;
