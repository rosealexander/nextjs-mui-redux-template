import {createTheme, responsiveFontSizes} from "@mui/material";

const global = {
  typography: {
    fontFamily: "'EB Garamond', serif;",
    h1: {
      fontDisplay: "swap",
    },
    h2: {
      fontWeight: "bolder",
    },
    body1: {
      fontWeight: "400"
    },
    body2: {
      fontWeight: "bolder"
    },
    button: {
      textTransform: "none"
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiBottomNavigationAction: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
  shape: {
    borderRadius: 4,
  },
}

const lightTheme = responsiveFontSizes(
  createTheme({
    ...global,
    palette: {
      mode: "light",
      common: {
        black: '#000000',
        white: '#ffffff',
      },
      primary: {
        light: '#797979',
        main: '#3f3f3f',
        dark: '#303030',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff4081',
        main: '#f50057',
        dark: '#c51162',
        contrastText: '#fff',
      },
      error: {
        light: '#e57373',
        main: '#f44336',
        dark: '#d32f2f',
        contrastText: '#fff'
      },
      warning: {
        light: '#ffb74d',
        main: '#ff9800',
        dark: '#f57c00',
        contrastText: 'rgba(0, 0, 0, 0.87)'
      },
      info: {
        light: '#64b5f6',
        main: '#2196f3',
        dark: '#1976d2',
        contrastText: '#fff',
      },
      success: {
        light: '#81c784',
        main: '#4caf50',
        dark: '#388e3c',
        contrastText: 'rgba(0, 0, 0, 0.87)'
      },
    },
  })
);

const darkTheme = responsiveFontSizes(
  createTheme({
    ...global,
    palette: {
      mode: "dark",
      common: {
        black: '#000000',
        white: '#ffffff',
      },
      primary: {
        main: '#ce93d8',
        light: '#f3e5f5',
        dark: '#ab47bc',
        contrastText: 'rgba(0, 0, 0, 0.87)',
      },
      secondary: {
        main: '#90caf9',
        light: '#e3f2fd',
        dark: '#42a5f5',
        contrastText: 'rgba(0, 0, 0, 0.87)',
      },
      error: {
        main: '#f44336',
        light: '#e57373',
        dark: '#d32f2f',
        contrastText: '#fff',
      },
      warning: {
        main: '#ffa726',
        light: '#ffb74d',
        dark: '#f57c00',
        contrastText: 'rgba(0, 0, 0, 0.87)',
      },
      info: {
        main: '#29b6f6',
        light: '#4fc3f7',
        dark: '#0288d1',
        contrastText: 'rgba(0, 0, 0, 0.87)',
      },
      success: {
        main: '#66bb6a',
        light: '#81c784',
        dark: '#388e3c',
        contrastText: 'rgba(0, 0, 0, 0.87)',
      },
      background: {
        paper: '#282C3F',
        default: '#282C3F',
      },
    },
  })
);

export default lightTheme
export {
  lightTheme,
  darkTheme
}
