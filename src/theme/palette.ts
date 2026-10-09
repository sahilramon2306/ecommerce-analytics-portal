import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",

    primary: {
      main: "#FF8C00",
    },

    secondary: {
      main: "#3F51B5",
    },

    background: {
      default: "#FAFAFA",
      paper: "#FFFFFF",
    },

    text: {
      primary: "#212121",
      secondary: "#666666",
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#FAFAFA",
          color: "#212121",
        },
      },
    },
  },

  shape: {
    borderRadius: 12,
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: "#FFA726",
    },

    secondary: {
      main: "#7986CB",
    },

    background: {
      default: "#121212",
      paper: "#1E1E1E",
    },

    text: {
      primary: "#FFFFFF",
      secondary: "#BDBDBD",
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#121212",
          color: "#FFFFFF",
        },
      },
    },
  },

  shape: {
    borderRadius: 12,
  },
});