import {useState} from 'react'
import UploadData from '../../Utils/UploadData';

export default function UploadOffice({ setLoadingState, setLoadingMessage }) {
    const [file, setFile] = useState(null);
    const [name,setName] = useState("");
    const [address,setAddress] = useState("");

    const handleSubmitOffice = async () => {

        const formData = new FormData();
        formData.set("name", name);
        formData.set("address",address);

        const data = {};
        for (const [key, value] of formData.entries()) {
        data[key] = value;
        }


          setLoadingState(true);
          setLoadingMessage("", "Please wait until your data is submitted!...");
  
          const {type,text,loading} = await UploadData({collectionName :"Office",file,data})
  
          setLoadingMessage(type, text);
          setTimeout(() => {
            setLoadingState(loading);
          }, 5000);
  
    };
  
    
    const handleFileChange = (e) => {
      if (e.target.files[0]) {
        setFile(e.target.files[0]);
      }
    };
  return (
    <>
       <div>
      <div className="uploadimagerow">
        <div className="uploadimagecolumn">
          <div className="uploadimagecolumninnerdiv">
            <h3>Office Section: </h3>

            <input type="text" id="officeName" placeholder="Enter Office Name" 
            value={name} onChange={(e) => setName(e.target.value)}/>

            <label htmlFor="imageInput">Upload Image:</label>
            <input type="file" id="imageInput" accept="image/*" onChange={handleFileChange}required />

            <label htmlFor="officeAddress">Office Address</label>
            <input type="text" id="officeAddress" placeholder="Enter Office Address"
            value={address} onChange={(e) => setAddress(e.target.value)}/>

            <button className="uploadimagebtn" onClick={handleSubmitOffice} style={{ marginTop: "5px", borderRadius: "5px" }}>
              Upload
            </button>
          </div>
        </div>

        <div className="uploadimagecolumn">
          <img className="uploadimageimage" src="/" alt="officesectionimage"></img>
        </div>
      </div>
    </div>
    </>
  )
}
