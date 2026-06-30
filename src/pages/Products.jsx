import { Container, Grid, Typography } from '@mui/material'
import ProductCard from '../components/ProductCard'
import SectionHeader from '../components/SectionHeader'
import { products } from '../data/products'

function Products() {
  return (
    <>
      <section className="page-hero page-hero--products">
        <Container maxWidth="lg">
          <Typography variant="h1">Colorful pops for every freezer</Typography>
          <Typography className="page-hero__copy">
            Explore CHUSKI's flavour range of individually sealed tube ice pops,
            made for quick refreshment, freezer visibility, and everyday cravings.
          </Typography>
        </Container>
      </section>

      <section className="section">
        <Container maxWidth="xl">
          <SectionHeader
            eyebrow="Signature range"
            title="Choose your happiness !"
            description="From mango and cola classics to tangy Indian favourites, each flavour is crafted to feel familiar, colourful, and easy to stock."
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
