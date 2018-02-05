import React from 'react';
import { Row, Col } from 'reactstrap';

class Paginate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 10
    }
  }

  componentDidMount() {
    this.props.updateDisplay(this.state.value);
  }

  handleChange(e) {
    const change = {}
    change["value"] = e.target.value
    console.log("hello")
    this.setState(change)
  }
  // change = (e) => {
  //   this.setState({ value: e.target.value });
  //   this.props.updateDisplay(this.state.value);
  // }

  render() {

    return (
      <Row>
        <Col>
          <form>Displaying
            <select onChange={this.handleChange.bind(this)} value={this.state.value} >
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select> Results
          </form>
        </Col>
      </Row>
    )
  }
}

export default Paginate;
