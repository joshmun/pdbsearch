import React from 'react';
import firstHIV from '../objects/HIV_SearchResults_ClassicRCSB_First25.json';
import ResultCard from './ResultCard';

function Cards(props) {
  const results = props.results["Result Set"];
  const listResults = results.map((result) =>
    <li key={result["PDB ID"]}><ResultCard result={result} /></li>
  )
  return (
    <ul>{listResults}</ul>
  )
}

class ListProtein extends React.Component {
  render() {
    console.log(firstHIV["Result Set"]);
    return <Cards results={firstHIV} />
  }
}

export default ListProtein;
