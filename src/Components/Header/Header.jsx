import React,{useState} from 'react'
import './Header.css';
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import logo from '../../Assets/Images/new_logo_techmentor_core-removebg-preview.png';
import { Link } from 'react-router-dom';
export default function Header() {
    const [showNavbar, setShowNavbar] = useState(false);

    const handleShowNavbar = () => {
      setShowNavbar(!showNavbar);
    };
  
  return (
  <>
    <nav className="navbar">
      <div className="navbarcontainer">
        <div className="logo">
            <img src={logo} alt="" />
        </div>

        {/* <div className="downloadbtndiv">
           <button className='downloadbtn'>Download App</button>
        </div> */}

        <div className="menu-icon" onClick={handleShowNavbar}>
          {showNavbar ? <IoClose/> : <GiHamburgerMenu/>}
        </div>

        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <NavLink to="/" onClick={handleShowNavbar}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={handleShowNavbar}>About</NavLink>
              
            </li>
            <li>
              <NavLink to="https://courses.techmentorcore.com/freetest" onClick={handleShowNavbar}>Free Tests</NavLink>
            </li>
            <li>
              <NavLink to="/courses" onClick={handleShowNavbar}>Courses</NavLink>
            </li>
            <li>
              <NavLink to="/payonline" onClick={handleShowNavbar}>Pay Online</NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={handleShowNavbar}>Contact</NavLink>
            </li>
            <li className='downloadbtnli'>
              <Link to="https://play.google.com/store/apps/details?id=co.brown.fjkic" className='downloadbtn'>Download App</Link>
            </li>
          </ul>

          <a href="https://web.techmentorcore.com/login" class="btn btn-primary py-3 px-lg-5 d-none d-lg-block" style={{height:"60px"}}>Join Now<i class="fa fa-arrow-right ms-3"></i></a>
        </div>
      </div>
    </nav>
   

  </>
  )
}
