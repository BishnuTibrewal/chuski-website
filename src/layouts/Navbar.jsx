import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
} from '@mui/material'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import BrandLogo from '../components/BrandLogo'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Products', path: '/products' },
  { label: 'Terms', path: '/terms-and-conditions' },
  { label: 'Payments', path: '/payments-and-refunds' },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  const renderNavLink = (item) => (
    <NavLink
      key={item.path}
      to={item.path}
      className={({ isActive }) => `nav-link${isActive ? ' nav-link--active' : ''}`}
      onClick={() => setOpen(false)}
      end={item.path === '/'}
    >
      {item.label}
    </NavLink>
  )

  return (
    <AppBar position="sticky" color="transparent" elevation={0} className="site-navbar">
      <Container maxWidth="xl">
        <Toolbar disableGutters className="site-navbar__toolbar">
          <BrandLogo />
          <Box className="site-navbar__links">{navItems.map(renderNavLink)}</Box>
          <Button className="site-navbar__cta" href="mailto:hello@chuski.example">
            Partner with us
          </Button>
          <IconButton
            className="site-navbar__menu"
            aria-label="Open navigation"
            onClick={() => setOpen(true)}
          >
            <MenuRoundedIcon />
          </IconButton>
        </Toolbar>
      </Container>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box className="mobile-nav" role="presentation">
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <BrandLogo />
            <IconButton aria-label="Close navigation" onClick={() => setOpen(false)}>
              <CloseRoundedIcon />
            </IconButton>
          </Stack>
          <Stack className="mobile-nav__links">{navItems.map(renderNavLink)}</Stack>
          <Button
            variant="contained"
            href="mailto:hello@chuski.example"
            onClick={() => setOpen(false)}
          >
            Partner with us
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  )
}

export default Navbar
