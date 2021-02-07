import { Component } from 'react';
import { Grid } from "@material-ui/core";
import Menu from "./Menu"

class Header extends Component {
  state = {}
  render() {
    return (
      <div>
        <Grid container className="header">
        <div className="notLess">&#x226e;</div>
        <div className="title">www.merbeth.io</div>
        <div className="greaterThan">&#x3e;</div>
        <Menu />
        </Grid>
      </div>
    );
  }
}

export default Header;