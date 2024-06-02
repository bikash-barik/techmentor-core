import logo from "../../Assets/Images/new_logo_techmentor_core-removebg-preview.png";
import './BrochureBottom.css';
import { TbWorld } from "react-icons/tb";
import { IoCall } from "react-icons/io5";
export default function BrochureBottom() {
  return (
    <>
      <section className="brochureheadersection" id="brochure-page1">
        <div className="d-flex justify-content-center mb-4">
          <div className="w-90">
            <img className="w-100" src={logo} alt="" />
          </div>
        </div>

        <div className="bottominfo">
          <h4 className="text-center">For more information visit us at</h4>

          <div className="bottominfodiv">
            <p><TbWorld/> www.techmentor.com</p>
          </div>

          <h4 className="text-center">Or</h4>

          <h4 className="text-center">Call/Whatsapp at</h4>

          <div className="bottominfodiv">
            <p><IoCall/> 8595563221</p>
          </div>
        </div>
      </section>
    </>
  );
}
