import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#e72977',
      light: '#ff7dae',
      dark: '#a91551',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#00a6b7',
      light: '#7ee7ef',
      dark: '#007382',
      contrastText: '#ffffff',
    },
    success: {
      main: '#55b948',
    },
    warning: {
      main: '#ffb000',
    },
    background: {
      default: '#fff8fb',
      paper: 'rgba(255, 255, 255, 0.86)',
    },
    text: {
      primary: '#261b38',
      secondary: '#6f5f7d',
    },
    chuski: {
      berry: '#e72977',
      mango: '#ffb000',
      mint: '#55d6be',
      cola: '#5a2b83',
      blue: '#00a6b7',
      blush: '#fff0f6',
    },
  },
  typography: {
    fontFamily:
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    h1: {
      fontWeight: 900,
      letterSpacing: 0,
      lineHeight: 1.05,
    },
    h2: {
      fontWeight: 850,
      letterSpacing: 0,
      lineHeight: 1.12,
    },
    h3: {
      fontWeight: 800,
      letterSpacing: 0,
    },
    h4: {
      fontWeight: 800,
      letterSpacing: 0,
    },
    button: {
      fontWeight: 800,
      letterSpacing: 0,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          paddingInline: 22,
          boxShadow: 'none',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: '0 20px 55px rgba(67, 35, 83, 0.12)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 800,
        },
      },
    },
  },
})

export default theme
