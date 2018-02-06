import React from 'react';
import ResultCard from './ResultCard';

function Cards(props) {
  const results = props.results;
  const listResults = results.map((result) =>
    <li key={result["PDB ID"]} className="list-unstyled"><ResultCard result={result} /></li>
  )
  return (
    <ul>{listResults}</ul>
  )
}

class ListProteins extends React.Component {
  render() {
    return <Cards results={this.props.results} />
  }
}

export default ListProteins;
