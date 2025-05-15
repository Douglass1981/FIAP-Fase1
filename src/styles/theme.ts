import { createTheme, Theme } from "@mui/material/styles";

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: "hsl(240, 76.70%, 59.60%)",
    },
    secondary: {
      main: "rgba(12, 12, 12, 0.69)",
    },
    background: {
      default: "#f5f5f5",
    },
  },
  typography: {
    fontFamily: "Poppins",
    
  },
  components: {
    MuiButton: {
      defaultProps: {
        style: {
          backgroundColor: "#002952",
          color: "#ffffff",
          textAlign: "center",
          textTransform: "capitalize",
          fontSize:"16px",
          fontFamily: "sans-serif",
          fontWeight: "bold"
          
        },
      },
    },
  },
});

export default theme;
