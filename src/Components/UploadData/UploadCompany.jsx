import { useState } from 'react';
import UploadData from '../../Utils/UploadData';

export default function UploadCompany({ setLoadingState, setLoadingMessage }) {
    const [files, setFiles] = useState([]);
    const [data] = useState(null);

    const handleSubmitCompany = async () => {
        if (files.length === 0) {
            alert("Please select at least one file");
        } else {
            setLoadingState(true);
            setLoadingMessage("", "Please wait until your data is submitted!...");

            for (let file of files) {
                const { type, text, loading } = await UploadData({collectionName :"Companies",file,data});

                setLoadingMessage(type, text);
                setTimeout(() => { setLoadingState(loading); }, 5000);
            }
        }
    };

    const handleFileChange = (e) => {
        if (e.target.files) {
            setFiles([...e.target.files]);
        }
    };

    return (
        <div>
            <div className="uploadimagerow">

                <div className="uploadimagecolumn">
                    <div className="uploadimagecolumninnerdiv">
                        <h3>Company Section: </h3>

                        <label htmlFor="imageInput">Upload Image:</label>
                        <input
                            type="file"
                            id="imageInput"
                            accept="image/*"
                            multiple
                            onChange={handleFileChange}
                            required
                        />

                        <button
                            className="uploadimagebtn"
                            onClick={handleSubmitCompany}
                            style={{ marginTop: "5px", borderRadius: "5px" }}
                        >
                            Upload
                        </button>
                      
                        <div className="images-preview-container">
                        {files.length > 0 && files.map((file, index) => (
                            <div key={index} className="image-wrapper">
                                <img
                                    className="uploadimageimage"
                                    src={URL.createObjectURL(file)}
                                    alt={`company-${index}`}
                                />
                            </div>
                        ))}
                       </div>

                    </div>
                </div>

                <div className="uploadimagecolumn">
                    
                </div>
            </div>
        </div>
    );
}
