import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

export const Photos = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploaded, setUploaded] = useState();

  const handleChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a file");
    }
  };

  console.log(selectedFile);

  return (
    <>
      <Typography variant="h5" component="h2" sx={{ mt: 3, mb: 1 }}>
        Լուսանկարներ
      </Typography>
      <Box
        sx={{
          mt: 5,
          bgcolor: "Window",
          height: "36vh",
          border: "ButtonFace",
        }}
      >
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <input
              multiple
              type="file"
              accept="image/*, .png, .jpg, .gif, .web"
              onChange={handleChange}
            />
            <Button sx={{ mt: 2, ml: 1, width: 150 }} onClick={handleUpload}>
              Upload now!
            </Button>
            {selectedFile && (
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
            )}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
