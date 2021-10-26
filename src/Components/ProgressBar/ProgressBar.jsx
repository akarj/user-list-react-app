import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ProgressBar = ({ imageFile, setImageFile }) => {
  //   const { url, progress } = useStorage(imageFile);
  const [url, setURL] = useState(imageFile);
  const [progress, setProgress] = useState(imageFile);
  console.log(progress, url);
  useEffect(() => {
    if (url) {
      setImageFile(null);
    }
  }, [url, setImageFile]);

  return (
    <div className="progress-bar">progress bar</div>
    //  <motion.div
    //    className="progress-bar"
    //    initial={{ width: 0 }}
    //    animate={{ width: progress + "%" }}
    //    // style={{}}
    //  ></motion.div>
  );
};

export default ProgressBar;
