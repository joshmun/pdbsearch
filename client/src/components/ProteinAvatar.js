import React from "react";

function imgLink(result, option) {
  const pdbId = result["PDB ID"].toLowerCase();

  if (option) {
    const resource = pdbId
      .split("")
      .slice(1, 3)
      .join("");
    return resource;
  } else {
    const imgAppend = `${pdbId}/${pdbId}.pdb1-250.jpg`;
    return imgAppend;
  }
}

class ProteinAvatar extends React.Component {
  render() {
    const pdbResult = this.props.result;
    const imgApi = "https://cdn.rcsb.org/images/rutgers/";
    const pdbId = this.props.result["PDB ID"];
    return (
      <a href={`/structure/${pdbResult["PDB ID"]}`}>
        <img
          id={pdbId}
          alt={pdbId}
          src={`${imgApi + imgLink(pdbResult, true)}/${imgLink(pdbResult)}`}
        />
      </a>
    );
  }
}

export default ProteinAvatar;
