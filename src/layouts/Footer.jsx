import { Container, Grid, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import BrandLogo from '../components/BrandLogo'

function Footer() {
  return (
    <footer className="site-footer">
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 5 }}>
            <BrandLogo />
            <Typography className="site-footer__copy">
              CHUSKI creates bright, hygienic, joy-first ice pops for modern Indian
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
              <a href="mailto:hello@chuski.example">hello@chuski.example</a>
              <a href="tel:+910000000000">+91 00000 00000</a>
              <Link to="/terms-and-conditions">Terms</Link>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, sm: 4, md: 3 }}>
            <Typography className="footer-heading">Fresh from the freezer</Typography>
            <Typography className="site-footer__copy">
              Placeholder newsletter, distributor, and city availability content can
              be connected when the business details are ready.
            </Typography>
          </Grid>
        </Grid>
        <div className="site-footer__bottom">
          <span>© {new Date().getFullYear()} CHUSKI Foods. All rights reserved.</span>
          <span>Little Licks of Happiness.</span>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
