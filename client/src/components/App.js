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
    let proteins = allProteins["Result Set"].slice(0, 25);
    this.state = {
      results: proteins,
      display: proteins
    };
  }

  render() {
    return (
      <Container>
        <ListProteins results={this.state.results} />
      </Container>
    );
  }
};

export default App;
