import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const UploadData = async ({ collectionName, file, data }) => {
    console.log(collectionName,file,data);
  try {
    const firestore = firebase.firestore();
    const storage = firebase.storage();
    const timestamp = firebase.firestore.FieldValue.serverTimestamp();

    let downloadURL; 
    let submissionData = {};

    if (file) {
      const storageRef = storage.ref(`images/${file.name}`);
      const uploadTask = storageRef.put(file);
      const snapshot = await uploadTask;
      downloadURL = await snapshot.ref.getDownloadURL();

      submissionData = {
        imageUrl : downloadURL,
        submittedAt :timestamp
      }
    }

    if(file && data){
      submissionData = {
        imageUrl : downloadURL,
        data,
        submittedAt :timestamp
      }
    }

    await firestore.collection(collectionName).add(submissionData);

    return {type : "success",text:"Data Uploaded Successfully",loading:false}
  } catch (error) {

    return {type : "error",text:error.message,loading:false}
  }
};

export default UploadData;
