import React from 'react';
import firstHIV from '../objects/HIV_SearchResults_ClassicRCSB_First25.json';
import ResultCard from './ResultCard';

// function ProteinList(props) {
  // const results = props.results["Result Set"];
//   const listResults = results.map((result) =>
//     <li key={result["PDB ID"]}>{result.Title}</li>
//   );
//   return(
//     <ul>{listResults}</ul>
//   );
// };

function Cards(props) {
  const results = props.results["Result Set"];
  const listResults = results.map((result) =>
    <li><ResultCard result={result} /></li>
  )
  return (
    <ul>{listResults}</ul>
  )
}

class ListProtein extends React.Component {
  render() {
    return <Cards results={firstHIV} />
  }
}

// const ListProtein = () => {
//   console.log(firstHIV["Result Set"]);
//   return (
//     <div>here's an overview</div>,
//     <ProteinList results={firstHIV} />
//   );
// };

export default ListProtein;
