import { title } from "assets/jss/material-kit-react.js";

const workStyle = {
  section: {
    padding: "70px 0"
  },
  title: {
    ...title,
    backgroundColor: "rgb(248, 160, 255)",
    lineHeight: "115px",
    color: "rgb(31, 31, 100)",
    marginBottom: "50px",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "center",
    width: "100%"
  },
  description: {
    color: "rgb(31, 31, 100)",
    textAlign: "center",
    fontSize: "1.5em",
    lineHeight: "1.7em",
    fontWeight: 500
  },
  address: {
    color: "rgb(31, 31, 100)",
    fontSize: "1.2em",
    fontWeight: 500,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center"
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
      borderRadius: 50,
      height: 50
    }
  },
  map: {
    border: 0,
    width: "100%",
    minHeight: "100%"
  }
};

export default workStyle;