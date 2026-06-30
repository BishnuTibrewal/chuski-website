import { Link } from 'react-router-dom'

function BrandLogo() {
  return (
    <Link className="brand-logo" to="/" aria-label="CHUSKI home">
      <img className="brand-logo__image" src="/brand/logo.png" alt="CHUSKI" />
    </Link>
  )
}

export default BrandLogo
