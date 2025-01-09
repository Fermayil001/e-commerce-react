import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const FileUpload = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  console.log(selectedFiles)
  const handleFileChange = (event) => {
    const files = event.target.files;
    setSelectedFiles(files);  // seçilen dosyaları state'e kaydediyoruz
  };

  const handleClick = () => {
    document.getElementById("file-input").click(); // Dosya inputunu tetiklemek için buton kullanıyoruz
  };

  return (
    <div className="file-upload-container">
      <input
        type="file"
        id="file-input"
        style={{ display: "none" }} // Inputu gizliyoruz
        onChange={handleFileChange}
        multiple // Birden fazla dosya seçilebilsin
      />
      <Button
        variant="contained"
        component="span" // Bu buton dosya seçimi için component olarak kullanılacak
        startIcon={<CloudUploadIcon />}
        onClick={handleClick}
      >
        Upload Files
      </Button>

      <TextField
        label="Selected Files"
        variant="outlined"
        value={selectedFiles.length > 0 ? Array.from(selectedFiles).map(file => file.name).join(", ") : ""}

        fullWidth
        style={{ marginTop: "10px" }}
      />
    </div>
  );
};

export default FileUpload;
