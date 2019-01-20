import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import NavbardComponent from "../Navbar/Navbar";
import "../../styles/theme.scss";

class Wrapper extends Component {
  render() {
    return (
      <div className="wrapper">
        <NavbardComponent />
        {this.props.children}
      </div>
    );
  }
}

export default withRouter(Wrapper);
