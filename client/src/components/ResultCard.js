import React from 'react';

class ResultCard extends React.Component {
  render() {
    return <h1>{this.props.result["PDB ID"]}</h1>;
  }
}


// const ResultCard = (props) => {
//   return (
//     <h1>{this.props.result["PDB ID"]}</h1>
//     {/* <h2>Protein Title</h2>
//     <ul>{listAuthors}</ul>
//     <p>Citation</p>
//     <p>
//       <strong>Released:</strong> 5/12/2010
//       <br>
//       <strong>Method:</strong> X-ray Diffraction
//       <br>
//       <strong>Resolution:</strong> 2.0
//       <br>
//       <strong>Residue Count:</strong> 166
//     </p> */}
//   );
// }

export default ResultCard;
