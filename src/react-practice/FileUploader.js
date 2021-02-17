import React from "react";

function fileuploader(e) {
  console.log("fileUploader logic get invoked...", e.target.files);
  let totalFiles = e.target.files;
  if (totalFiles.length >= 2) {
    //whatever logic you can perform here for the file uploading...
  } else {
    alert("FileUploader...Please Upload equal to 2 or more files...");
  }
}

const FileUploader = () => {
  /***
   *  to upload files while
   * this will be available in e.target.files
   * For the values we will look into the e.target.values \\y for the files, we will look into the e.target.files...
   */

  return (
    <>
      <h1>...FileUploader...</h1>
      <input type="file" id="file" onChange={fileuploader} multiple />
    </>
  );
};

export default FileUploader;
