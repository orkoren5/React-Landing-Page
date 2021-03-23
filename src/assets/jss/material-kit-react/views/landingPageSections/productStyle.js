import { title } from "assets/jss/material-kit-react.js";

const productStyle = {
  section: {
    padding: "70px 0",
    textAlign: "center"
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
    fontSize: "1.4em"
  },
  product: {
    width: "100%",
    height: 200,
    backgroundSize: 200,
    backgroundRepeat: "no-repeat",
    backgroundPositionX: "center"
  }
};

export default productStyle;
