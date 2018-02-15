import React from "react";
import ListProteins from "./ListProteins";
import { Container } from "reactstrap";
import Paginate from "./Paginate";
import GetProteins from './GetProteins';
import { createStore } from "redux";

class App extends React.Component {
  componentWillMount() {
    let proteins;
    fetch('/proteins/start')
    .then(results => {
      return results.json();
    }).then(data => {
      proteins = data;
      console.log(proteins)
      this.setState({
        hiv: proteins,
        results: proteins,
        display: 25,
        total: proteins.length
      })
    })
  }

  cacheProtein = () => {
    fetch('/proteins')
    .then( results => {
      return results.json();
    }).then(data => {
      this.setState({
        hiv: data,
        total: data.length
      })
    })
  }

  updateDisplay = range => {
    this.setState({
      results: this.state.hiv.slice(0, range),
      display: range
    });
  };

  render() {
    if(this.state === null){
      return "Loading..."
    }
    return (
      <Container>
        <Paginate updateDisplay={this.updateDisplay} total={this.state.total} />
        <ListProteins results={this.state.results} />
        <GetProteins cacheProtein={this.cacheProtein} />
      </Container>
    );
  }
}

export default App;
