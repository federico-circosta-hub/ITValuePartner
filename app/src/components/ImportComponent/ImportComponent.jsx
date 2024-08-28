import React, { useEffect, useRef, useState } from "react";
import womanIllustration from "../../assets/Illustration.png";
import { Button, Typography } from "@mui/material";
import { ReactComponent as UploadIcon } from "../../assets/upload_icon.svg";
import { grey, orange, red } from "@mui/material/colors";
import { useStats } from "../../model/AccountStatsContext";

const ImportComponent = () => {
  const { updateStats } = useStats();
  const fileInputRef = useRef();

  const [file, setFile] = useState();

  const handleChange = (e) => {
    if (e.target.files[0].type !== "text/csv") return alert("File non valido!");
    setFile(e.target.files[0]);
  };

  const handleReset = () => {
    setFile(undefined);
    updateStats(undefined);
  };

  const getData = async () => {
    const formData = new FormData();
    formData.append("file", file);
    fetch("http://localhost:3001/postCsv", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Data received:", data);
        updateStats(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    if (file) {
      getData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [file]);

  return (
    <div className="w-full flex p-12 items-center mt-8">
      <div className="w-1/2 flex flex-col items-center">
        <div className="flex flex-col gap-12">
          <Typography variant="h3" fontWeight={700} color={grey[700]}>
            Import your <br /> transaction file with <br /> a few clicks
          </Typography>
          <Typography variant="h6" color={grey[600]}>
            Upload is made easy for you.
          </Typography>
          {file ? (
            <Button
              onClick={handleReset}
              variant="contained"
              style={{
                background: red[600],
                borderRadius: 25,
                width: 175,
                height: 50,
              }}
            >
              reset
            </Button>
          ) : (
            <Button
              onClick={() => fileInputRef.current.click()}
              variant="contained"
              style={{
                background: orange[800],
                borderRadius: 25,
                width: 175,
                height: 50,
              }}
            >
              <div className="w-full h-full flex justify-center items-center gap-1">
                <UploadIcon
                  style={{ width: 25, fill: "white", marginTop: 5 }}
                />
                <Typography variant="h6" color="white">
                  Import
                </Typography>
              </div>
              <input
                onChange={handleChange}
                multiple={false}
                ref={fileInputRef}
                type="file"
                hidden
              />
            </Button>
          )}
        </div>
      </div>
      <div className="w-1/2">
        <img src={womanIllustration} alt="woman with a computer" />
      </div>
    </div>
  );
};

export default ImportComponent;
