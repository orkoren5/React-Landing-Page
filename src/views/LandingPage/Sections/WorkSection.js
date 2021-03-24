import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";
import image from "assets/img/map.png";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  return (
    <div className={classes.section} id="contact-section">
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Get In Touch</h2>
          <h4 className={classes.description}>
            Want to learn more about EntityMeds platform and provide a more personalized aesthetic treatment?
            <br/>
            Want to reach and engage with more potential patients?
            <br/>
            <b>Leave your information below and we will contact you</b>
          </h4>
          <GridContainer xs={12} sm={12} md={12}>
            <GridItem xs={12} sm={12} md={8}>
              <GridItem xs={12} sm={12} md={12}>
                <CustomInput
                  labelText="Full Name"
                  id="name"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <CustomInput
                  labelText="Email Address"
                  id="email"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <CustomInput
                labelText="Message"
                id="message"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea
                }}
                inputProps={{
                  multiline: true,
                  rows: 5
                }}
              />
              <GridItem xs={12} sm={12} md={4}>
                <Button className={classes.pink} color="simple$pink">Send Message</Button>
              </GridItem>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <img src={image} className={classes.map}/>
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  );
}
