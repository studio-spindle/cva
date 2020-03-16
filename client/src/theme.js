import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const typeBody = "'Lora', arial, serif";
const typeTitle = "'Quicksand', georgia, sans-serif";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FE9715',
    },
    secondary: {
      main: '#7407FC',
      dark: '#44029B',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    fontFamily: typeBody,
    lineHeight: '1.4rem',
    h1: {
      fontFamily: typeTitle,
      fontSize: '5rem',
    },
    h2: {
      fontFamily: typeTitle,
      fontSize: '2.5rem',
    },
    h3: {
      fontFamily: typeTitle,
    },
    h4: {
      fontFamily: typeTitle,
    },
    h5: {
      fontFamily: typeTitle,
    },
    body1: {
      fontSize: '1.5rem',
    },
    body2: {
      fontSize: '1.25rem',
    },
    button: {
      fontFamily: typeTitle,
    },
    overline: {
      fontSize: '1rem',
      fontWeight: 'bold',
    },
  },
  overrides: {
    MuiButtonBase: {
      root: {
        disableRipple: true,
        disableTouchRipple: true,
      },
    },
    MuiButton: {
      contained: {
        boxShadow: 'none',
        // '&:hover': {
        //   boxShadow: 'none',
        // },
      },
      containedPrimary: {
        color: 'white',
        padding: '1rem 1.5rem',
      },
    },
    MuiTypography: {
      gutterBottom: {
        marginBottom: '3rem',
      },
    },
    MuiInputLabel: {
      root: {
        fontSize: '1rem',
      },
    },
    MuiOutlinedInput: {
      root: {
        fontSize: '1rem',
      },
    },
  },
});

export default responsiveFontSizes(theme);
