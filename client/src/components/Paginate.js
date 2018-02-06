import React from 'react';
import { Row, Col } from 'reactstrap';

class Paginate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 25
    }
  }

  handleClick = (e) => {
    this.setState({value: e.target.value});
    this.props.updateDisplay(e.target.value);
  }

  render() {

    return (
      <Row>
        <Col>
          <form>Displaying
            <select onChange={this.handleClick} value={this.state.value}>
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
