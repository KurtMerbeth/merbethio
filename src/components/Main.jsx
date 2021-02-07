import { Component } from 'react';
import { Grid } from "@material-ui/core";
import kurt from "../media/km1.jpeg"

class Main extends Component {
  state = {}
  render() {
    return (
      <div>
        <Grid container className="main">
          <div class="image"></div>
        </Grid>
      </div>
    );
  }
}

export default Main;