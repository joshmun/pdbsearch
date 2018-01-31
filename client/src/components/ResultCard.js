import React from 'react';
import Time from 'react-time';

function listAuthors(proteins) {
  const authors = proteins.Authors;
  const authorsList = authors.map((author, index) =>
    <span key={author}>
      {index ? ', ' : ''}
      <a className="querySearchLink" href={`/pdb/search/smartSubquery.do?smartSearchSubtype=AdvancedAuthorQuery&amp;exactMatch=false&amp;searchType=All%20Authors&amp;audit_author.name=${author}`}>
        {author}
      </a>
    </span>
  )
  return authorsList;
}

function listLigands(proteins) {
  const ligands = proteins.Ligands;
  const ligandsList = ligands.map((ligand, index) =>
    <span key={ligand}>
      {(index ? ', ' : '') + ligand}
    </span>
  )
  return ligandsList
}

class ResultCard extends React.Component {
  render() {
    return (

      <div>
        <h3>{this.props.result["PDB ID"]}</h3>
        <p>{this.props.result.Title}</p>
        <p>{listAuthors(this.props.result)}</p>
        <p dangerouslySetInnerHTML={{__html: this.props.result.Citation}}></p>

        <div className="row">
          <div>
            <p>
              <strong>Released: </strong><Time value={this.props.result["Released Date"]} format="M/DD/YYYY" /><br></br>
              <strong>Method: </strong>{this.props.result.Method}<br></br>
              <strong>Resolution: </strong>{this.props.result.Resolution}<br></br>
              <strong>Residue Count: </strong>{this.props.result["Residue Count"]}<br></br>
            </p>
          </div>
          <div>
            <p>
              <strong>Macromolecule: </strong>{this.props.result.Macromolecule}<br></br>
              <strong>Unique Ligands: </strong>{listLigands(this.props.result)}<br></br>
              <strong>Search term match score: </strong>{this.props.result.Score}<br></br>
            </p>
          </div>
        </div>

        <p>
          <br></br>
          <strong>Matched fields in {this.props.result["PDB ID"]}.cif</strong>:
          <small></small>
        </p>

        <ul>
          <li>
            <small>
              <strong>_citation.title</strong>: {this.props.result.highlighting["citation.title"]}
            </small>
          </li>
          <li>
            <small>
              <strong>_struct.title</strong>: {this.props.result.highlighting["struct.title"]}
            </small>
          </li>
          <li>
            <small>
              <strong>_struct_keywords.text</strong>: {this.props.result.highlighting["struct_keywords.text"]}
            </small>
          </li>
        </ul>
      </div>
    )
  }
}

export default ResultCard;
