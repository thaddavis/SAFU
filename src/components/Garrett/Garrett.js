import React, { Component } from "react";
import AltWrapper from "../Wrappers/AltWrapper";
import axios from "axios";

class Garrett extends Component {
  state = {
    addresses: null
  };

  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    let res = await axios.get(
      "https://api.blockcypher.com/v1/btc/test3/txs/96ef1c049d9fe279aa1451ac264b8bf12c3c6de4a629e27258adf48b57061297"
    );

    console.log(res);

    this.setState({
      addresses: res.data.addresses
    });
  }

  render() {
    return (
      <div className="text-center">
        Garrett
        <div>{this.state.addresses}</div>
      </div>
    );
  }
}

export default Garrett;
