import { Button, Chip, Container, Grid, Stack, Typography } from '@mui/material'
import { Link, useParams } from 'react-router-dom'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'
import IcePopVisual from '../components/IcePopVisual'
import { findProductBySlug } from '../data/products'

function ProductDetails() {
  const { slug } = useParams()
  const product = findProductBySlug(slug)

  if (!product) {
    return (
      <section className="section">
        <Container maxWidth="md">
          <Typography variant="h1">Product not found</Typography>
          <Typography color="text.secondary">
            The product you are looking for is not available in this placeholder
            catalog.
          </Typography>
          <Button component={Link} to="/products" startIcon={<ArrowBackRoundedIcon />}>
            Back to products
          </Button>
        </Container>
      </section>
    )
  }

  const isComingSoon = product.status === 'coming-soon'

  return (
    <>
      <section className="product-detail-hero">
        <Container maxWidth="xl">
          <Grid container spacing={5} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack spacing={2.5}>
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
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <div className="detail-stat">
                    <span>Pack</span>
                    <strong>{product.pack}</strong>
                  </div>
                  <div className="detail-stat">
                    <span>Positioning</span>
                    <strong>Retail freezer</strong>
                  </div>
                </Stack>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <div className="detail-visual">
                <IcePopVisual
                  gradient={product.gradient}
                  color={product.color}
                  label={`${product.name} ice pop`}
                  size="display"
                />
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section className="section">
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 6 }}>
              <div className="info-panel">
                <Typography variant="h3">Highlights</Typography>
                <ul className="clean-list">
                  {product.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <div className="info-panel">
                <Typography variant="h3">Placeholder ingredients</Typography>
                <ul className="clean-list">
                  {product.ingredients.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  )
}

export default ProductDetails
