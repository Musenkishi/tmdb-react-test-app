import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const tmdbTheme = createTheme({
  palette: {
    background: {
      default: "#09192a",
      paper: "#0d253f",
    },
    primary: {
      main: "#01b4e4",
    },
    secondary: {
      main: "#90cea1",
    },
    mode: "dark",
  },
});

export default tmdbTheme;
