import React,{useEffect} from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import PayOnline from './Pages/PayOnline/PayOnline';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import Courses from './Pages/Courses/Courses';
import MobileViewHeader from './Components/MobileViewHeader/MobileViewHeader';
import FloatingButton from './Components/FloatingButton/FloatingButton';
import TermsAndConditions from './Pages/TermsAndConditions/TermsAndConditions';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/courses' element={<Courses/>}/>
          <Route path='/payonline' element={<PayOnline/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/terms-and-conditions' element={<TermsAndConditions/>}/>
        </Routes>
        <Footer/>
        <FloatingButton/>
        <MobileViewHeader/>
      </Router>
    </div>
  );
}

export default App;
