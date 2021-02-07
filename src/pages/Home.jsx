import { Component } from 'react';
import { Grid } from "@material-ui/core";

class Home extends Component {
  state = {}
  render() {
    return (
      <div>
        <Grid container className="home">
          <div className="me"></div>
          <div className="circleWrapper">
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
          </div>

          <div className="name hidden">&#x226e;Kurt Merbeth<span className="boldText">&#x3e;</span></div>
          <div className="title hidden">Software Developer</div>
        </Grid>
      </div>
    )
  }
}

export default Home;