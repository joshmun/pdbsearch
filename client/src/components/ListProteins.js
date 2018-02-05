import React from 'react';
import ResultCard from './ResultCard';

function Cards(props) {
  const results = props.results["Result Set"];
  const listResults = results.map((result) =>
    <li key={result["PDB ID"]} className="list-unstyled"><ResultCard result={result} /></li>
  )
  return (
    <ul>{listResults}</ul>
  )
}

class ListProteins extends React.Component {
  render() {
    console.log(this.props.results["Result Set"]);
    return <Cards results={this.props.results} />
  }
}

export default ListProteins;
