import { createUseStyles } from "react-jss";

const rootStyle = {
  margin: "0",
  padding: "0"
};

const useStyles = createUseStyles({
  root: {
    ...rootStyle,
    "& .h1": {
      color: "red"
    },
  }
});

export default useStyles;