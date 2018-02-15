import React from "react";
import { Row, Col } from "reactstrap";
import Pagination from "rc-pagination";
import 'rc-pagination/assets/index.css';

class Paginate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 25,
      page: 1
    };
  }

  handleClick = e => {
    this.setState({ value: e.target.value });
  };

  paginate = (currentPage, pageSize) => {
    console.log("hello!");
    this.props.updateDisplay(currentPage, pageSize);
  }


  render() {
    return (
      <Row>
        <Col>
          <Pagination simple pageSize={this.state.value} total={this.props.total} onChange={() => this.paginate(this.state.page, this.state.value)} />
        </Col>
        <Col>
          <form>
            Displaying{" "}
            <select onChange={this.handleClick} value={this.state.value}>
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>{" "}
            Results
          </form>
        </Col>
      </Row>
    );
  }
}

export default Paginate;
