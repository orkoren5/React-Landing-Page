import { title } from "assets/jss/material-kit-react.js";

const productStyle = {
  section: {
    padding: "70px 0",
    textAlign: "center"
  },
  productSection: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    "&:before": {
      background: "rgba(255, 255, 255, 0.5)",
    },
    "&:after,&:before": {
      position: "absolute",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''"
    }
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  titleContainer: {
      marginBottom: 15
  },
  description: {
    color: "rgb(31, 31, 100)",
    fontSize: "1.5em",
    lineHeight: "1.7em",
    fontWeight: 500
  },
  product: {
    width: "100%",
    height: 200,
    backgroundSize: 200,
    backgroundRepeat: "no-repeat",
    backgroundPositionX: "center",
    "&:before": {
      width: "100%",
      height: "100%",
      content: "''"
    }
  }
};

export default productStyle;
