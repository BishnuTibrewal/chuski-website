import { Link } from 'react-router-dom'

function BrandLogo() {
  return (
    <Link className="brand-logo" to="/" aria-label="CHUSKI home">
      <span className="brand-logo__mark">C</span>
      <span>
        <span className="brand-logo__name">CHUSKI</span>
        <span className="brand-logo__tagline">Little Licks of Happiness</span>
      </span>
    </Link>
  )
}

export default BrandLogo
