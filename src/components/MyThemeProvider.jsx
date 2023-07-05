import { CssBaseline, ThemeProvider } from '@mui/material'
import PropTypes from 'prop-types'
import { theme } from './theme'

export function MyThemeProvider ({ children }) {
  return (
    <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    {children}
  </ThemeProvider>
  )
}

MyThemeProvider.propTypes = {
  children: PropTypes.any.isRequired
}


