import { useState } from 'react'
import { Button, Card, CardContent, Chip, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import IcePopVisual from './IcePopVisual'

function ProductCard({ product }) {
  const isComingSoon = product.status === 'coming-soon'
  const primaryImage = product.images?.[0]
  const [failedImage, setFailedImage] = useState(null)
  const imageFailed = primaryImage && failedImage === primaryImage
  const imageAlt =
    product.imageAlt || `${product.name} ${product.flavor} CHUSKI ice pop`

  return (
    <Card className="product-card">
      <CardContent className="product-card__content">
        <div className="product-card__visual">
          {isComingSoon && <Chip label="Coming soon" className="coming-soon-badge" />}
          {primaryImage && !imageFailed ? (
            <img
              className="product-card__image"
              src={primaryImage}
              alt={imageAlt}
              loading="lazy"
              onError={() => setFailedImage(primaryImage)}
            />
          ) : (
            <IcePopVisual
              gradient={product.gradient}
              color={product.color}
              label={`${product.name} ice pop`}
            />
          )}
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
