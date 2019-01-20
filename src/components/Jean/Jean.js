import React, { Component } from "react";
import AltWrapper from "../Wrappers/AltWrapper";

class Jean extends Component {
  state = {
    addresses: null
  };

  constructor(props) {
    super(props);
  }

  async componentDidMount() {}

  render() {
    return <div>Jean</div>;
  }
}

export default Jean;
