import React from "react";
import "./PayOnline.css";
import qr from "../../Assets/Images/qrcode.png";
import Top from "../../Components/Top/Top";
export default function PayOnline() {
  return (
    <>
      <Top data="Pay Online"/>
      <div className="payonlinediv">
        <div className="payonlinerow">
          <div className="payonlinecolumn1">
            <h3>Scan the QR Code</h3>
            <img className="payonlineqrimg" src={qr} alt="" />
            <h5 id="paymentInfo">techmentorcore@ybl</h5>{" "}
            <span id="copyButton">Copy</span>
          </div>
        </div>
      </div>
    </>
  );
}
