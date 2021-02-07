import { Component } from 'react';
import { Grid } from "@material-ui/core";
import Menu from "./Menu"

class Header extends Component {
  state = {}
  render() {
    return (
      <div>
        <Grid container className="header">
        <div className="logoCircle"></div>
        <div className="notLess">&#x226e;</div>
        <div className="name">&#x226e;Kurt Merbeth<span className="boldText">&#x3e;</span></div>
        <div className="title">www.merbeth.io</div>
        </Grid>
      </div>
    );
  }
}

export default Header;