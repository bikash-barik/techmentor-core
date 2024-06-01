import React,{useState} from "react";
import './Upload.css';
import Top from "../../Components/Top/Top";
import { auth } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";
import UploadCompany from "../../Components/UploadData/UploadCompany";

const Upload = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);
  
    const setLoadingState = (loadingValue) => {
      setLoading(loadingValue);
    };
  
    const setLoadingMessage = (messageType, messageText) =>{
      setMessage({
          type: messageType,
          text: messageText,
        });
    }

    const handleLogout = () => {
        auth.signOut().then(() => {
            navigate("/login");
          })
          .catch((error) => {
            console.error("Error signing out:", error);
          });
      };
 
  return (
    <>
      <Top data = "Upload Data"/>
      <div className="uploadimagediv">
      {
      loading ?
      <section className="loadingimagediv">
        <div className="loadingimageinnerdiv">
        <div className="loadingimageimagediv">
         <Loader/>
        </div>
        <div className="loadingimagemessage">
          <h2 className="text-4xl" style={{ color: message.type === 'success' ? 'green' : message.type === 'error' ? 'red' :'yellow'}}>{message.text}</h2>
          </div>
        </div>
      </section>
      :
      <>
        <div className="logoutbtndiv">
          <div className="logoutbtninnerdiv">
            <button className="logoutbtn" onClick={handleLogout} style={{ marginTop: "5px", borderRadius: "5px" }}>
              Logout
            </button>
          </div>
        </div>

        <UploadCompany setLoadingState={setLoadingState} setLoadingMessage={setLoadingMessage} />

      </>
        }
         </div>
    </>
  );
};

export default Upload;
