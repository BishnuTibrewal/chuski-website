import { Button, Card, CardContent, Chip, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import IcePopVisual from './IcePopVisual'

function ProductCard({ product }) {
  return (
    <Card className="product-card">
      <CardContent className="product-card__content">
        <div className="product-card__visual">
          <IcePopVisual
            gradient={product.gradient}
            color={product.color}
            label={`${product.name} ice pop`}
          />
        </div>
        <Stack spacing={1.5}>
          <Chip label={product.flavor} className="product-card__chip" />
          <Typography variant="h3">{product.name}</Typography>
          <Typography color="text.secondary">{product.shortDescription}</Typography>
          <Button
            component={Link}
            to={`/products/${product.slug}`}
            endIcon={<ArrowForwardRoundedIcon />}
            className="button-link"
          >
            View details
          </Button>
        </Stack>
      </CardContent>
    </Card>
  )
}

export default ProductCard
