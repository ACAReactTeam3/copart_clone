import {
  Button,
  Checkbox,
  Grid,
  Input,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import uploadePhotosImg from "../../../images/uploadePhotos.png";

export const Photos = ({ setImg }) => {
  const [selectedFile, setSelectedFile] = useState({});
  const [uploaded, setUploaded] = useState();

  const handleChange = (e) => {
    setImg(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a file");
    }
  };

  return (
    <>
      <Typography variant="h5" component="h2" sx={{ mt: 3, mb: 1 }}>
        Լուսանկարներ
      </Typography>
      <Box
        sx={{
          mt: 5,
          bgcolor: "Window",
          height: "10vh",
          border: "ButtonFace",
        }}
      >
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <img
              hidden={!selectedFile.name}
              src={uploadePhotosImg}
              alt="UploadePhotosImg"
            />
            <input
              multiple={true}
              type="file"
              accept="image/*, .png, .jpg, .gif, .web, .webp, .jpeg"
              onChange={handleChange}
            />
            {/* <Button sx={{ mt: 2, ml: 1, width: 150 }} onClick={handleUpload}>
              Upload now!
            </Button> */}
            {/* {selectedFile && (
              <ul>
                <li>Name: {selectedFile.name}</li>
                <li>Type: {selectedFile.name}</li>
                <li>Size: {selectedFile.name}</li>
                <li>
                  lastModifiedDate:
                  {selectedFile.lastModifiedDate.toLocaleDateString()}
                </li>
              </ul>
            )}
            {uploaded && (
              <div>
                <h2>{uploaded.fileName}</h2>
                <img alt="" src={uploaded.filePath} width="200" />
              </div>
            )} */}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
