import { title } from "assets/jss/material-kit-react.js";

const workStyle = {
  section: {
    padding: "70px 0"
  },
  title: {
    ...title,
    color: "rgb(31, 31, 100)",
    marginBottom: "50px",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "center"
  },
  description: {
    color: "rgb(31, 31, 100)",
    textAlign: "center",
    fontSize: "1.5em",
    lineHeight: "1.7em",
    fontWeight: 500
  },
  textCenter: {
    textAlign: "center"
  },
  textArea: {
    marginRight: "15px",
    marginLeft: "15px"
  },
  pink: {
    "&,&:focus,&:hover,&:visited": {
      backgroundColor: "rgb(248, 160, 255)",
      color: "initial",
      borderRadius: 50
    }
  },
  map: {
    width: "100%"
  }
};

export default workStyle;
