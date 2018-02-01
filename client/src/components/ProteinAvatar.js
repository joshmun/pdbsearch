import React from 'react';

class ProteinAvatar extends React.Component {
  render() {
    return (
      <div>
        <a href={`/structure/${this.props.result["PDB ID"]}`}>
          <img id={this.props.result["PDB ID"]} src={`https://cdn.rcsb.org/images/rutgers/ai/${this.props.result["PDB ID"]}/${this.props.result["PDB ID"]}.pdb1-250.jpg`}/>
        </a>
      </div>
    )
  }
}

export default ProteinAvatar;
