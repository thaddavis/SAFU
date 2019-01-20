import React, { Component } from "react";
import "./App.scss";
import axios from "axios";
import Navbar from "./components/Navbar/Navbar";
import "./App.scss";
import Router from "./router/Router";

class App extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    // let res = await axios.get('/user?ID=12345');
  }

  render() {
    return <Router />;
  }
}

export default App;
