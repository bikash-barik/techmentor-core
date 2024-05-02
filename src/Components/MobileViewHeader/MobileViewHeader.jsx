import './MobileViewHeader.css';
import {Link} from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { MdPermContactCalendar } from "react-icons/md";
import { FaDiscourse } from "react-icons/fa";
import { MdOutlineAccountCircle } from "react-icons/md";

export default function MobileViewHeader() {

  return (
    <>
    <div className='mobileviewheaderdiv'>
      <div className="mobileviewheaderrow">

            <div className="newheaaderrow1column1">
              <Link to="/" style={{color:"black",display:"inline"}}> <FaHome style={{height:"30px",width:"100%",color:"black"}}/></Link>
             <p>Home</p>
            </div>

            <div className="newheaaderrow1column1">
            <Link to="/courses" style={{color:"black",display:"inline"}}> <FaDiscourse style={{height:"30px",width:"100%",color:"black"}}/></Link>
            <p>Courses</p>
            </div>

            <div className="newheaaderrow1column1">
            <Link to="https://play.google.com/store/apps/details?id=co.brown.fjkic" style={{color:"black",display:"inline"}}> <IoLogoGooglePlaystore style={{height:"30px",width:"100%",color:"black"}}/></Link>
            <p>Download</p>
            </div>

            <div className="newheaaderrow1column1">
            <Link to="/contact" style={{color:"black",display:"inline"}}> <MdPermContactCalendar style={{height:"30px",width:"100%",color:"black"}}/></Link>
            <p>Contact</p>
            </div>

            <div className="newheaaderrow1column1">
            <Link style={{color:"white"}} to="https://web.techmentorcore.com/login"><MdOutlineAccountCircle style={{height:"30px",width:"100%",color:"black"}}/></Link>
            <p>Login</p>
            </div>
      </div>
    </div>
    </>
  )
}
