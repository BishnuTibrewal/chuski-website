import { Container, Grid, IconButton, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import XIcon from '@mui/icons-material/X'
import BrandLogo from '../components/BrandLogo'

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/chuskiicepopspvtltd/',
    icon: <InstagramIcon />,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61591620309770',
    icon: <FacebookIcon />,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/chuski-icepops-30004b373',
    icon: <LinkedInIcon />,
  },
  {
    label: 'Twitter',
    href: 'https://x.com/chuskiicepops',
    icon: <XIcon />,
  },
]

function Footer() {
  return (
    <footer className="site-footer">
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 5 }}>
            <BrandLogo />
            <Typography className="site-footer__copy">
              CHUSKI makes colourful, individually sealed tube ice pops for Indian
              families, retailers, schools, events, and summer celebrations.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 4, md: 2 }}>
            <Typography className="footer-heading">Explore</Typography>
            <Stack className="footer-links">
              <Link to="/about">About</Link>
              <Link to="/products">Products</Link>
              <Link to="/payments-and-refunds">Refunds</Link>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, sm: 4, md: 2 }}>
            <Typography className="footer-heading">Support</Typography>
            <Stack className="footer-links">
              <a href="mailto:hello@chuski.example">admin@chuski.co.in</a>
              <a href="tel:+916294922649">+91 6294922649</a>
              <Link to="/terms-and-conditions">
                <span className="footer-link__full">Terms&Conditions</span>
                <span className="footer-link__short">T&C</span>
              </Link>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, sm: 4, md: 3 }}>
            <Typography className="footer-heading">Fresh from the freezer</Typography>
            <Typography className="site-footer__copy">
              Follow CHUSKI for flavour drops, freezer updates, retail news, and
              summer moments worth sharing.
            </Typography>
            <Stack direction="row" spacing={1} className="footer-socials">
              {socialLinks.map((social) => (
                <IconButton
                  key={social.label}
                  component="a"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open CHUSKI on ${social.label}`}
                  className="footer-socials__link"
                >
                  {social.icon}
                </IconButton>
              ))}
            </Stack>
          </Grid>
        </Grid>
        <div className="site-footer__bottom">
          <span>&copy; {new Date().getFullYear()} CHUSKI Foods. All rights reserved.</span>
          <span>Little Licks of Happiness.</span>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
