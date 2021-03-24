import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";
import WorkSection from "./Sections/WorkSection.js";
import EntityMedLinks from "../../components/Header/EntitiyMedLinks";
import { Hidden } from "@material-ui/core";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div id="about-section">
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand={<img src="/EntityMedcrop.png"/>}
        rightLinks={<EntityMedLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/landing-bg.png")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={8} className={classes.titleContainer}>
              <h1 className={classes.title}>When Beauty Meets AI</h1>
              <h4 className={classes.subtitle}>
                EntityMed harnesses the power of artificial intelligence to simulate the outcome of aesthetic procedures
              </h4>
              <br />
              <Button
                className={classes.cyan}
                color="simple"
                size="lg"
              >
                Try it now
              </Button>
            </GridItem>
            <Hidden mdDown implementation="js">
              <GridItem xs={0} sm={0} md={4}>
                <img className={classes.faceImg} src={require("assets/img/face2.png")}/>
              </GridItem>
            </Hidden>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <ProductSection />
          <WorkSection />
        </div>
      </div>
    </div>
  );
}
