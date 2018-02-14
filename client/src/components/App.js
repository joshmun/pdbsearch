import React from "react";
import ListProteins from "./ListProteins";
import { Container } from "reactstrap";
import Paginate from "./Paginate";
import { createStore } from "redux";

// import allProteins from "../objects/HIV_SearchResults_ClassicRCSB_All.json";



class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   // let proteins = this.showDisplay();
  //
  //   this.state = {
  //     results: null,
  //     display: 25,
  //     total: null
  //   };
  //
  // }

  componentWillMount() {
    let proteins;
    fetch('/proteins/start')
    .then(results => {
      return results.json();
    }).then(data => {
      proteins = data;
      console.log(proteins)
      this.setState({
        results: proteins,
        display: 25,
        total: proteins.length
      })
    })
  }

  componentDidMount(){
    this.cacheProtein()
  }

  // showDisplay = (range = 25) => {
  //   return allProteins["Result Set"].slice(0, range);
  // };

  cacheProtein = () => {
    fetch('/proteins')
    .then( results => {
      return results.json();
    }).then(data => {
      this.setState({
        results: data,
        total: data.length
      })
    })
  }

  updateDisplay = range => {
    this.setState({
      results: this.showDisplay(range),
      display: range
    });
  };

  render() {
    if(this.state == null){
      return false
    }
    return (
      <Container>
        <Paginate updateDisplay={this.updateDisplay} total={this.state.total} />
        <ListProteins results={this.state.results} />
      </Container>
    );
  }
}

export default App;
