import React from "react";
import Button from "@material-ui/core/Button";
import "./Homepage.css";
import Typography from "@material-ui/core/Typography";
import { tileData } from "./HomePageStyle";
import { withStyles } from "@material-ui/core";
import { stylesHomepage } from "./HomePageStyle";
import Grid from "@material-ui/core/Grid";
import StickyFooter from "./StickyFooter";
import { RecipeReviewCard } from "./HomepageCard";

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: " ",
      title: " ",
      open: false,
      anchorEl: {},
      option: "",
    };
  }

  handlePopoverClose = () => {
    this.setState({
      open: false,
      anchorEl: null,
      option: "",
    });
  };

  handlePopoverOpen = (event, optiune) => {
    console.log(optiune);

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
      option: optiune,
    });
  };

  render() {
   

    return (
      <React.Fragment>
        <div class="root">
          <div>
            <div class="main">
              <link
                rel="stylesheet"
                type="text/css"
                href="//fonts.googleapis.com/css?family=Six+Caps"
              />
              <div>
                <div class="centered">
                  <Typography component="h1" variant="h5">
                    <center>
                      <h1>VOLUNTEER NOW</h1>
                    </center>
                  </Typography>
                </div>

                <div class="bottom-right">
                  <Typography
                    style={{
                      color: "white",
                    }}
                  >
                    <h2>helping hands, caring hearts</h2>
                  </Typography>
                </div>
              </div>
            </div>
            <div class="buttonDiv">
              <Grid container justify="center">
                <Grid item>
                  <a href="./login" target="_self">
                    <Button
                      style={{
                        minWidth: "300px",
                        minHeight: "50px",
                        fontSize: "30px",
                        color: "#a0b7c6",
                        fontFamily: "Helvetica",
                        textTransform: "capitalize",
                        backgroundColor: "#e8e2da",
                      }}
                      variant="contained"
                    >
                      {" "}
                      Join Now
                    </Button>
                  </a>
                </Grid>
              </Grid>
            </div>
          </div>

          <div class="brmedium"></div>
          <div class="brsmall"></div>
          <Grid container direction="row" justify="center" alignItems="center">
            {tileData.map((tile) => (
              <Grid item spacing={3}>
                <RecipeReviewCard
                  letter={tile.letter}
                  image={tile.image}
                  title={tile.title}
                  short={tile.short}
                  long={tile.long}
                />
              </Grid>
            ))}
          </Grid>

          <StickyFooter />
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(stylesHomepage)(Homepage);
