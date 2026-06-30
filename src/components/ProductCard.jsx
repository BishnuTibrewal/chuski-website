import { Button, Card, CardContent, Chip, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import IcePopVisual from './IcePopVisual'

function ProductCard({ product }) {
  const isComingSoon = product.status === 'coming-soon'

  return (
    <Card className="product-card">
      <CardContent className="product-card__content">
        <div className="product-card__visual">
          {isComingSoon && <Chip label="Coming soon" className="coming-soon-badge" />}
          <IcePopVisual
            gradient={product.gradient}
            color={product.color}
            label={`${product.name} ice pop`}
          />
        </div>
        <Stack spacing={1.5}>
          <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
            <Chip label={product.flavor} className="product-card__chip" />
            {isComingSoon && <Chip label="Coming soon" className="coming-soon-badge" />}
          </Stack>
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
