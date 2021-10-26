import { TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import "./UploadImageFile.scss";

export default function UploadImageFile({ imageFile, setImageFile }) {
  const [error, setError] = useState(null);
  const acceptedImageType = ["image/png", "image/jpeg"];
  const fileUpload = e => {
    console.log("image file upload");
    let selectedFile = e.target.files[0];
    if (selectedFile && acceptedImageType.includes(selectedFile.type)) {
      setImageFile(selectedFile);
      setError("");
    } else {
      setImageFile(null);
      setError("Please select an image file (png or jpeg)");
    }
  };
  return (
    <div className="image-file-upload-container">
      {/* <input
        type="file"
        name="image"
        id="image"
        accept="image/*"
        onChange={fileUpload}
      /> */}

      <div className="output">
        <TextField
          //  label="Profile Picture"
          placeholder="Enter Your Profile Picture..."
          type="file"
          variant="outlined"
          fullWidth
          sx={{ mb: "1rem" }}
          required
          accept="image/*"
          onChange={fileUpload}
        ></TextField>
        {true && <div className="error">{error}</div>}
        {imageFile && <div className="error">{imageFile.name}</div>}
        {imageFile && (
          <ProgressBar imageFile={imageFile} setImageFile={setImageFile} />
        )}
      </div>
    </div>
  );
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
