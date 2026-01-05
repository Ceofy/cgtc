import { createTheme } from '@mui/material/styles';

const PRIMARY = '#622C31';
const SECONDARY = '#000000';
const BACKGROUND = '#F4F3EF';

const theme = createTheme({
  palette: {
    primary: {
      main: PRIMARY,
    },
    text: {
      primary: PRIMARY,
      secondary: SECONDARY,
    },
    background: {
      default: BACKGROUND,
    },
  },
  shape: {
    borderRadius: 100,
  },
  spacing: 16,
  typography: {
    htmlFontSize: 16,
    h1: {
      fontSize: '4.5rem',
    },
    h2: {
      fontSize: '3.5rem',
    },
    h3: {
      fontSize: '1.5rem',
    },
    h4: {
      fontSize: '2.25rem',
    },
    body1: {
      fontSize: '1rem',
    },
    caption: {
      fontSize: '0.8125rem',
    },
    button: {
      fontSize: '1rem',
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        variant: 'contained',
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          whiteSpace: 'nowrap',
          minWidth: 'max-content',
        },
      },
      variants: [
        {
          props: {
            variant: 'contained',
          },
          style: {
            width: '12rem',
            padding: '0.5rem 1.5rem',
          },
        },
        {
          props: {
            variant: 'text',
          },
          style: {
            '&:hover': {
              backgroundColor: 'transparent',
              textDecoration: 'underline',
            },
          },
        },
        {
          props: {
            variant: 'text',
            color: 'secondary',
          },
          style: {
            color: SECONDARY,
            '&:hover': {
              color: PRIMARY,
            },
          },
        },
      ],
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          width: 'max-content',
          height: 'max-content',
        },
      },
    },
    MuiOutlinedInput: {
      defaultProps: {
        size: 'small',
      },
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
        notchedOutline: {
          borderColor: PRIMARY,
        },
      },
    },
  },
});

export default theme;
