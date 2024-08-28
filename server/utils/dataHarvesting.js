const harvesting = (row) => {
  const amountToAdd = tipoOperation(row);
  const account = row[1];
  const divisa = row[9];
  const paymentChannel = row[6];
  const volume = parseFloat(row[13]);
  const updatedAt = new Date(row[0]);
  return { account, divisa, amountToAdd, paymentChannel, volume, updatedAt };
};

const tipoOperation = (row) => {
  //versamento o vendita segno +, prendere netto
  //prelievo o acquisto segno -, prendere lordo
  if (["Versamento", "Vendita"].includes(row[4])) {
    return parseFloat(row[13]);
  }
  return 0 - parseFloat(row[10]);
};

const harvestingSecurities = (row) => {
  if (row[5].length < 4)
    return { secAccount: null, secDivisa: null, secAmountToAdd: null };
  const secAmountToAdd =
    row[4] === "Acquisto" ? parseFloat(row[13]) : 0 - parseFloat(row[13]);
  const secAccount = row[1];
  const secDivisa = row[9];
  return { secAccount, secDivisa, secAmountToAdd };
};

exports.harvesting = harvesting;
exports.harvestingSecurities = harvestingSecurities;
