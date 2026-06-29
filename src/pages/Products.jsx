import { Container, Grid, Typography } from '@mui/material'
import ProductCard from '../components/ProductCard'
import SectionHeader from '../components/SectionHeader'
import { products } from '../data/products'

function Products() {
  return (
    <>
      <section className="page-hero page-hero--products">
        <Container maxWidth="lg">
          <Typography className="eyebrow">Products</Typography>
          <Typography variant="h1">Colorful pops for every freezer</Typography>
          <Typography className="page-hero__copy">
            Placeholder catalog content for CHUSKI's flavor range, pack sizes,
            nutritional highlights, and trade information.
          </Typography>
        </Container>
      </section>

      <section className="section">
        <Container maxWidth="xl">
          <SectionHeader
            eyebrow="Signature range"
            title="Choose your lick of happiness"
            description="Each product detail page is route-driven and ready for real SKUs, pricing, availability, and media."
          />
          <Grid container spacing={3}>
            {products.map((product) => (
              <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={product.id}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>
    </>
  )
}

export default Products
