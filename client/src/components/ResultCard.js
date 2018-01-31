import React from 'react';

function listAuthors(proteins) {
  const authors = proteins.Authors;
  const authorsList = authors.map((author, index) => {
    (index ? ', ' : '')

    return (
      <a className="querySearchLink" href={`/pdb/search/smartSubquery.do?smartSearchSubtype=AdvancedAuthorQuery&amp;exactMatch=false&amp;searchType=All%20Authors&amp;audit_author.name=${author}`}>
        {author}
      </a>
      )
  })
  return authorsList;
}

class ResultCard extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.result["PDB ID"]}</h3>
        <p>{this.props.result.Title}</p>
        <p>{listAuthors(this.props.result)}</p>
      </div>
    )
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
