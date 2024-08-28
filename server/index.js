const express = require("express");
require("dotenv").config();
const cors = require("cors");
const fileUpload = require("express-fileupload");
const { parse } = require("csv-parse");
const fs = require("fs");
const path = require("path");
const { harvesting, harvestingSecurities } = require("./utils/dataHarvesting");

const app = express();
app.use(cors());
app.use(fileUpload());

const PORT = process.env.PORT || 3001;

app.post("/postCsv", (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files uploaded");
  }
  const file = req.files.file;
  const filePath = path.join(__dirname, "uploads", file.name);
  console.log("filePath", filePath);
  file.mv(filePath, (err) => {
    if (err) return res.status(500).send(err);
    let accounts = {
      1612660: {
        balance: { EUR: 0, USD: 0 },
        securitiesBalance: { EUR: 0, USD: 0 },
        updatedAt: new Date(1970, 0, 1),
        paymentChannel: {
          "Internet banking": { EUR: 0, USD: 0 },
          "Carta di credito": { EUR: 0, USD: 0 },
          Pagobancomat: { EUR: 0, USD: 0 },
        },
      },
      1612661: {
        balance: { EUR: 0, USD: 0 },
        securitiesBalance: { EUR: 0, USD: 0 },
        updatedAt: new Date(1970, 0, 1),
        paymentChannel: {
          "Internet banking": { EUR: 0, USD: 0 },
          "Carta di credito": { EUR: 0, USD: 0 },
          Pagobancomat: { EUR: 0, USD: 0 },
        },
      },
    };
    fs.createReadStream(filePath)
      .pipe(parse({ delimiter: ";", from_line: 2 }))
      .on("data", (row) => {
        const {
          account,
          divisa,
          amountToAdd,
          updatedAt,
          paymentChannel,
          volume,
        } = harvesting(row);
        const { secAccount, secDivisa, secAmountToAdd } =
          harvestingSecurities(row);
        accounts[account]["balance"][divisa] += amountToAdd;
        accounts[account]["paymentChannel"][paymentChannel][divisa] += volume;
        if (secAmountToAdd)
          accounts[secAccount]["securitiesBalance"][secDivisa] +=
            secAmountToAdd;
        if (accounts[account]["updatedAt"] < updatedAt)
          accounts[account]["updatedAt"] = updatedAt;
      })
      .on("end", () => {
        res.json({ accounts });
        fs.unlinkSync(filePath);
      });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
