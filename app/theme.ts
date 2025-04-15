import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ff0000", // Ukrainian red
      light: "#ff3333",
      dark: "#cc0000",
    },
    secondary: {
      main: "#ffffff", // White for contrast
      light: "#ffffff",
      dark: "#e0e0e0",
    },
    background: {
      default: "#000000",
      paper: "#111111",
    },
    text: {
      primary: "#ffffff",
      secondary: "#cccccc",
    },
  },
  typography: {
    fontFamily: "var(--font-nunito), Arial, sans-serif",
    h1: {
      fontWeight: 700,
      fontSize: "3.5rem",
    },
    h2: {
      fontWeight: 600,
      fontSize: "2.5rem",
    },
    h3: {
      fontWeight: 600,
      fontSize: "2rem",
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "9999px", // Rounded buttons
          padding: "8px 24px",
        },
        contained: {
          "&:hover": {
            backgroundColor: "#cc0000",
          },
        },
        outlined: {
          borderWidth: "2px",
          "&:hover": {
            borderWidth: "2px",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#111111",
          borderRadius: "16px",
          border: "1px solid #ff0000",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#000000",
          borderBottom: "1px solid #ff0000",
        },
      },
    },
  },
});
