import React from 'react';
import ListProteins from './ListProteins';
import { Container } from 'reactstrap';
import Paginate from './Paginate';
import { createStore } from 'redux';
// import firstHIV from '../objects/HIV_SearchResults_ClassicRCSB_First25.json';
import allProteins from '../objects/HIV_SearchResults_ClassicRCSB_All.json'


class App extends React.Component {
  constructor(props) {
    super(props);
    let proteins = showDisplay();

    this.state = {
      results: proteins,
      display: 25
    };

    function showDisplay(range = 25){
      return allProteins["Result Set"].slice(0, range)
    }

  }


  updateDisplay = () => {
    // this.showDisplay(e);
    // this.setState( {display: e} );
    console.log("HELLO!");
  }

  render() {
    return (
      <Container>
        <Paginate updateDisplay={this.updateDisplay} />
        <ListProteins results={this.state.results} />
      </Container>
    );
  }
};

export default App;
