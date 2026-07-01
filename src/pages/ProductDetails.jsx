import { Button, Chip, Container, Grid, Stack, Typography } from '@mui/material'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'
import IcePopVisual from '../components/IcePopVisual'
import { findProductBySlug } from '../data/products'
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded'

const detailCards = [
  {
    title: 'Best served',
    text: 'Straight from the freezer for a clean, icy sip that cools down hot afternoons fast.',
  },
  {
    title: 'Made for',
    text: 'School counters, event stalls, retail freezers, family packs, and quick impulse purchases.',
  },
  {
    title: 'Pack feel',
    text: 'Individually sealed tube format for easy handling, simple storage, and on-the-go refreshment.',
  },
]

const tradePoints = [
  'Compact freezer footprint for faster stocking',
  'Bright colour coding for quick flavour discovery',
  'Individually sealed tubes suited to high-footfall counters',
  'Simple pack format for retail, schools, vendors, and events',
]

function ProductDetails() {
  const { slug } = useParams()
  const product = findProductBySlug(slug)

  if (!product) {
    return (
      <section className="section">
        <Container maxWidth="md">
          <Typography variant="h1">Product not found</Typography>
          <Typography color="text.secondary">
            The product you are looking for is not available in the CHUSKI range.
          </Typography>
          <Button component={Link} to="/products" startIcon={<ArrowBackRoundedIcon />}>
            Back to products
          </Button>
        </Container>
      </section>
    )
  }

  const isComingSoon = product.status === 'coming-soon'
  const availabilityLabel = isComingSoon ? 'Launch status' : 'Availability'
  const availabilityText = isComingSoon ? 'Coming soon' : 'Ready for freezer placement'
  const productMoments = [
    `${product.flavor} cravings`,
    'After-school refreshment',
    'Summer event counters',
    'Neighbourhood retail freezers',
  ]

  return (
    <>
      <section className="product-detail-hero">
        <Container maxWidth="xl">
          <Grid container spacing={5} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack
                spacing={2.5}
                component={motion.div}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
              >
                <Button
                  component={Link}
                  to="/products"
                  startIcon={<ArrowBackRoundedIcon />}
                  className="back-button"
                >
                  Back to products
                </Button>
                <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                  <Chip label={product.flavor} className="detail-chip" />
                  {isComingSoon && <Chip label="Coming soon" className="coming-soon-badge" />}
                </Stack>
                <Typography variant="h1">{product.name}</Typography>
                <Typography className="page-hero__copy">{product.description}</Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} useFlexGap flexWrap="wrap">
                  <motion.div className="detail-stat" whileHover={{ y: -5 }}>
                    <span>Pack</span>
                    <strong>{product.pack}</strong>
                  </motion.div>
                  <motion.div className="detail-stat" whileHover={{ y: -5 }}>
                    <span>Positioning</span>
                    <strong>Retail freezer</strong>
                  </motion.div>
                  <motion.div className="detail-stat" whileHover={{ y: -5 }}>
                    <span>{availabilityLabel}</span>
                    <strong>{availabilityText}</strong>
                  </motion.div>
                </Stack>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div
                className="detail-visual detail-visual--animated"
                initial={{ opacity: 0, scale: 0.92, rotate: 2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.65, delay: 0.1 }}
                style={{ '--detail-color': product.color }}
              >
                <span className="detail-ribbon detail-ribbon--one" />
                <span className="detail-ribbon detail-ribbon--two" />
                <span className="detail-frost detail-frost--one" />
                <span className="detail-frost detail-frost--two" />
                <IcePopVisual
                  gradient={product.gradient}
                  color={product.color}
                  label={`${product.name} ice pop`}
                  size="display"
                />
              </motion.div>
            </Grid>
          </Grid>
          <a className="scroll-cue" href="#product-story" aria-label="Scroll to product details">
            <span>Explore details</span>
            <KeyboardArrowDownRoundedIcon />
          </a>
        </Container>
      </section>

      <section className="section" id="product-story">
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div
                className="info-panel"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45 }}
              >
                <Typography variant="h3">Highlights</Typography>
                <ul className="clean-list">
                  {product.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div
                className="info-panel"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: 0.08 }}
              >
                <Typography variant="h3">Ingredients</Typography>
                <ul className="clean-list">
                  {product.ingredients.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            </Grid>
          </Grid>

          <Grid container spacing={3} className="detail-card-grid">
            {detailCards.map((card, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={card.title}>
                <motion.article
                  className="detail-feature-card"
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  whileHover={{ y: -6 }}
                >
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <Typography variant="h3">{card.title}</Typography>
                  <Typography color="text.secondary">{card.text}</Typography>
                </motion.article>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>

      <section className="section section--tint">
        <Container maxWidth="xl">
          <Grid container spacing={3} alignItems="stretch">
            <Grid size={{ xs: 12, md: 5 }}>
              <motion.div
                className="detail-flavor-panel"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5 }}
                style={{ '--detail-color': product.color }}
              >
                <Typography className="eyebrow">Flavour moments</Typography>
                <Typography variant="h2">Where {product.name} fits best</Typography>
                <Typography color="text.secondary">
                  A CHUSKI tube is made for quick cooling, colourful impulse appeal,
                  and simple sharing across high-energy summer occasions.
                </Typography>
                <div className="detail-flavor-burst">
                  <IcePopVisual
                    gradient={product.gradient}
                    color={product.color}
                    label={`${product.name} tube ice pop`}
                  />
                </div>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <div className="detail-moment-grid">
                {productMoments.map((moment, index) => (
                  <motion.div
                    className="detail-moment"
                    key={moment}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.4, delay: index * 0.07 }}
                  >
                    <span>{moment}</span>
                  </motion.div>
                ))}
              </div>
              <motion.div
                className="info-panel detail-trade-panel"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: 0.18 }}
              >
                <Typography variant="h3">Retail and distribution cues</Typography>
                <ul className="clean-list">
                  {tradePoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  )
}

export default ProductDetails
