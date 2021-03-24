import { container, title } from "assets/jss/material-kit-react.js";

const landingPageStyle = {
  container: {
    zIndex: "12",
    ...container
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    color: "rgb(31, 31, 100)",
    textDecoration: "none"
  },
  subtitle: {
    fontSize: "1.5rem",
    fontWeight: 500,
    lineHeight: "1.8em",
    color: "rgb(8,8,8)",
    textAlign: "center"
  },
  titleContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  cyan: {
    "&,&:focus,&:hover,&:visited": {
      backgroundColor: "rgb(113, 217, 242)",
      color: "initial",
      borderRadius: 50
    }
  },
  faceImg: {
    position: "absolute",
    height: 420
  }
};

export default landingPageStyle;
