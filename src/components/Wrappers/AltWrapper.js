import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import NavbardComponent from "../Navbar/Navbar";
import "../../styles/alt-theme.scss";

class AltWrapper extends Component {
  render() {
    return (
      <div className="alt-wrapper">
        <NavbardComponent />
        {this.props.children}
      </div>
    );
  }
}

export default withRouter(AltWrapper);
