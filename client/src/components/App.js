import React from "react";
import ListProteins from "./ListProteins";
import { Container } from "reactstrap";
import Paginate from "./Paginate";
import { createStore } from "redux";
import allProteins from "../objects/HIV_SearchResults_ClassicRCSB_All.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    let proteins = this.showDisplay();

    this.state = {
      results: proteins,
      display: 25,
      total: allProteins["Result Set"].length
    };

  }

  showDisplay = (range = 25) => {
    return allProteins["Result Set"].slice(0, range);
  };

  updateDisplay = range => {
    this.setState({
      results: this.showDisplay(range),
      display: range
    });
  };

  render() {
    return (
      <Container>
        <Paginate updateDisplay={this.updateDisplay} total={this.state.total} />
        <ListProteins results={this.state.results} />
      </Container>
    );
  }
}

export default App;
