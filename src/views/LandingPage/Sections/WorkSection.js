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

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  return (
    <div className={classes.section} id="contact-section">
      <GridContainer justify="center">
        <h2 className={classes.title}>Get In Touch</h2>
        <GridItem cs={12} sm={12} md={8}>
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
                  rows: 9
                }}
              />
              <GridItem container justify="flex-end" xs={12} sm={12} md={12}>
                <Button className={classes.pink} color="simple$pink">Send Message</Button>
              </GridItem>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <iframe
                className={classes.map}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3377.6878422754785!2d34.80944461674454!3d32.15872158370798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d48f20a722ff9%3A0x7a2f6e311654d06d!2z15TXl9eV16nXnNeZ150gNCwg15TXqNem15zXmdeU!5e0!3m2!1siw!2sil!4v1616689565612!5m2!1siw!2sil"
                width="400" height="300" allowFullScreen="" loading="lazy"/>
            </GridItem>
            <GridItem xs={12} sm={12} md={8}/>
            <GridItem xs={12} sm={12} md={4}>
              <span className={classes.address}>
                <b>Main office</b>
                <span>4 Hahoshlim St., Herzeliya, Israel</span>
                <span>+(972)52-5588040</span>
                <span>contact@entitymed.com</span>
              </span>
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  );
}