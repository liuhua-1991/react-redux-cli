import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "antd/lib/button";
class Foo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h2> I am Fooooooooo </h2>
        <br />
        <Link to="/">
          <Button>Go back index</Button>
        </Link>
      </div>
    );
  }
}

export default Foo;
