import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded'
import StorefrontRoundedIcon from '@mui/icons-material/StorefrontRounded'
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded'
import IcePopVisual from '../components/IcePopVisual'
import ProductCard from '../components/ProductCard'
import SectionHeader from '../components/SectionHeader'
import { products } from '../data/products'

const stats = [
  { value: '5', label: 'Signature flavors' },
  { value: '50 ml', label: 'Perfect snack size' },
  { value: '100%', label: 'Joy-first brand feel' },
]

const heroProducts = products.slice(0, 4)

function Home() {
  return (
    <>
      <section className="hero-section">
        <Container maxWidth="xl">
          <Grid container spacing={5} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                component={motion.div}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65 }}
              >
                <Typography className="eyebrow">Premium FMCG ice pops</Typography>
                <Typography variant="h1" className="hero-title">
                  CHUSKI
                </Typography>
                <Typography className="hero-tagline">
                  Little Licks of Happiness.
                </Typography>
                <Typography className="hero-copy">
                  Colorful, individually sealed tube ice pops made for retail
                  freezers, school canteens, events, and everyday summer cravings.
                </Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <Button
                    component={Link}
                    to="/products"
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForwardRoundedIcon />}
                  >
                    Explore products
                  </Button>
                  <Button component={Link} to="/about" variant="outlined" size="large">
                    Our story
                  </Button>
                </Stack>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div
                className="hero-freezer"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <div className="hero-freezer__shelf" />
                {heroProducts.map((product, index) => (
                  <div className={`hero-freezer__pop hero-freezer__pop--${index}`} key={product.id}>
                    <IcePopVisual
                      gradient={product.gradient}
                      color={product.color}
                      label={`${product.name} ice pop`}
                      size="large"
                    />
                  </div>
                ))}
              </motion.div>
            </Grid>
          </Grid>
          <div className="hero-stats">
            {stats.map((stat) => (
              <div className="hero-stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section">
        <Container maxWidth="xl">
          <SectionHeader
            eyebrow="Freezer favorites"
            title="Your Favourite Flavours !"
            description="Bright, fast-moving flavours packed for impulse buys, repeat customers, and the kind of chilled refreshment India loves."
          />
          <div className="product-scroll" aria-label="Scrollable product lineup">
            {products.map((product) => (
              <div className="product-scroll__item" key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section section--tint">
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            {[
              {
                icon: <VerifiedRoundedIcon />,
                title: 'Quality-led',
                text: 'Individually sealed tube packs help keep every pop clean, convenient, and easy to enjoy on the move.',
              },
              {
                icon: <StorefrontRoundedIcon />,
                title: 'Retail-ready',
                text: 'Bold colours, clear flavours, and compact packs are designed for quick freezer visibility at point of sale.',
              },
              {
                icon: <LocalShippingRoundedIcon />,
                title: 'Distribution-friendly',
                text: 'Built for cold-chain handling, school counters, event vendors, and neighbourhood stores that need easy rotation.',
              },
            ].map((item) => (
              <Grid size={{ xs: 12, md: 4 }} key={item.title}>
                <motion.div
                  className="feature-tile"
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                >
                  <div className="feature-tile__icon">{item.icon}</div>
                  <Typography variant="h3">{item.title}</Typography>
                  <Typography color="text.secondary">{item.text}</Typography>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>
    </>
  )
}

export default Home
