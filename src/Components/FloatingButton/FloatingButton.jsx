import { useState, useEffect, useRef } from "react";
import { MdMessage } from "react-icons/md";
import { MdAddCall } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";
import "./FloatingButton.css";

export default function FloatingButton() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const contactRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (contactRef.current && !contactRef.current.contains(event.target)) {
        setIsContactOpen(false);
      }
    }

    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const contactMenu = (event) => {
    event.stopPropagation();
    setIsContactOpen(!isContactOpen);
  };

  return (
    <>
      <div className="maindivstickytop">
        <div className="maindivsticky1" onClick={contactMenu}>
          <MdMessage style={{ fontSize: "30px", color: "white" }} />
        </div>

        {isContactOpen && (
          <div className="contactMenu" ref={contactRef}>
            <div className="callMenu">
              <div className="callMenulinkdiv">
                <a href="https://wa.me/917978699120">
                  <MdMessage className="callMenuIcon" />
                  <p>Whats App</p>
                </a>
              </div>
            </div>

            <div className="callMenu">
              <div className="callMenulinkdiv">
                <a href="tel:+917008428565">
                  <MdAddCall className="callMenuIcon" />
                  <p>Call Us</p>
                </a>
              </div>
            </div>

            <div className="callMenu">
              <div className="callMenulinkdiv">
                <a href="sms:7978699120">
                  <AiFillMessage className="callMenuIcon" />
                  <p>Send SMS</p>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
