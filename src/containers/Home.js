import React, { Component } from "react";
import { connect } from "react-redux";
import { increase, decrease, getData } from "../actions/count";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import Button from "antd/lib/button";
class Home extends Component {
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
    return (
      <div>
        <h2>homememememememememem </h2>
        <br />
        <Link to="/">
          <Button>Go back index</Button>
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
export default connect(mapStateToProps, mapDispatchToProps)(Home);
