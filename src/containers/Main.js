import React, { Component } from "react";
import { connect } from "react-redux";
import { increase, decrease, getData } from "../actions/count";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import Button from "antd/lib/button";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  increase = () => {
    this.props.increase();
  };
  decrease = () => {
    this.props.decrease();
  };
  getData = () => {
    this.props.getData();
    // fetch(`/mockjs/25507/getTOInfoByTOCode?`)
    //   .then(response => {
    //     return response.json();
    //   })
    //   .then(data => console.log(data))
    //   .catch(e => console.log("Oops, error", e));
  };
  render() {
    const { number } = this.props;
    return (
      <div>
        Some state changes:{number}
        <br />
        <Button onClick={this.increase}>Increase</Button>
        <Button onClick={this.decrease}>Decrease</Button>
        <br />
        <br />
        <Button onClick={this.getData}>getData</Button>
        <br />
        <br />
        <Button type="primary">表示ant design 已引入~ </Button>
        <br />
        <br />
        <Link to="/foo">
          <Button>Go to foo</Button>
        </Link>
        <br />
        <br />
        <Link to="/home">
          <Button>Go to home</Button>
        </Link>
      </div>
    );
  }
}
function mapStateToProps(state) {
  let { count: { number } } = state;
  return { number };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ decrease, increase, getData }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);
