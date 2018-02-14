const allProteins = require("./objects/HIV_SearchResults_ClassicRCSB_All.json");

const hivObjects = () => {
  const proteins = allProteins["Result Set"];
  return proteins;
}

module.exports = hivObjects;
