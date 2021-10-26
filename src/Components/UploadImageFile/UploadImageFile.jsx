import React, { useState, useEffect } from "react";

export default function UploadImageFile() {
  const [imageFile, setImageFile] = useState(null);
  const [error, setError] = useState(null);
  const acceptedImageType = ["image/png", "image/jpeg"];
  const fileUpload = e => {
    console.log("image file upload");
    let selectedFile = e.target.files[0];
    if (selectedFile && acceptedImageType.includes(selectedFile.type)) {
      // console.log(selectedFile);
      setImageFile(selectedFile);
      setError("");
    } else {
      setImageFile(null);
      setError("Please select an image file (png or jpeg)");
    }
  };
  return <div>Image File Upload</div>;
}

//  <label htmlFor="upload-photo">
//                 <input
//                   style={{ display: "none" }}
//                   id="upload-photo"
//                   name="upload-photo"
//                   type="file"
//                   accept="image/*"
//                   onChange={fileUpload}
//                 />

//                 <Fab
//                   color="secondary"
//                   size="small"
//                   component="span"
//                   aria-label="add"
//                   variant="extended"
//                 >
//                   <AddIcon /> Upload photo
//                 </Fab>
//               </label>

//               <br />
//               <div className="output">
//                 {error && <div className="error">{error}</div>}
//                 {imageFile && <div className="error">{imageFile.name}</div>}
//                 {imageFile && (
//                   <ProgressBar
//                     imageFile={imageFile}
//                     setImageFile={setImageFile}
//                   />
//                 )}
//               </div>
//               <br />
