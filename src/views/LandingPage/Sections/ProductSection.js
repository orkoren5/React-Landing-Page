import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import classNames from "classnames";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div style={{backgroundImage: "url(" + require("assets/img/product-bg.png") + ")"}} className={classNames(classes.productSection, classes.section)} id="product-section">
      <GridContainer justify="center" className={classes.titleContainer}>
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>EntityMed{"'"}s Services</h2>
          <h5 className={classes.description}>
            Digital health company that developed an AI engine that enables physicians and patiants to simulate aesthetic prodecures.
            We are revolutionizing the aesthetic industry by creating a digital experience for both the clinics and patients.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <span className={classes.description}>Patient Satisfaction</span>
            <div className={classes.product} style={{backgroundImage: "url(" + require("assets/img/product1.png") + ")"}}/>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <span className={classes.description}>Align Expectations</span>
            <div className={classes.product} style={{backgroundImage: "url(" + require("assets/img/product2.png") + ")"}}/>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <span className={classes.description}>Personalized Treatment</span>
            <div className={classes.product} style={{backgroundImage: "url(" + require("assets/img/product3.png") + ")"}}/>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
