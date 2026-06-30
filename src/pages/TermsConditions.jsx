import { Container, Typography } from '@mui/material'

const terms = [
  {
    title: 'General use',
    text: 'By using this website, you agree to access CHUSKI product and brand information responsibly and for lawful purposes.',
  },
  {
    title: 'Product information',
    text: 'Product flavours, ingredients, pack sizes, availability, and packaging may vary by location, batch, and retail partner.',
  },
  {
    title: 'Intellectual property',
    text: 'Brand assets, product names, visuals, page layouts, and copy should be treated as CHUSKI property unless stated otherwise.',
  },
  {
    title: 'Limitation of liability',
    text: 'CHUSKI is not responsible for misuse of website information, third-party links, or product handling outside recommended storage conditions.',
  },
]

function TermsConditions() {
  return (
    <>
      <section className="page-hero page-hero--terms">
        <Container maxWidth="lg">
          <Typography className="eyebrow">Legal</Typography>
          <Typography variant="h1">Terms & Conditions</Typography>
          <Typography className="page-hero__copy">
            Please read these terms before using the CHUSKI website, browsing
            products, or contacting us for retail and distribution enquiries.
          </Typography>
        </Container>
      </section>

      <section className="section">
        <Container maxWidth="md">
          <div className="policy-stack">
            {terms.map((item) => (
              <article className="policy-panel" key={item.title}>
                <Typography variant="h3">{item.title}</Typography>
                <Typography color="text.secondary">{item.text}</Typography>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}

export default TermsConditions
