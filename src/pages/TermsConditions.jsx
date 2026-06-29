import { Container, Typography } from '@mui/material'

const terms = [
  {
    title: 'General use',
    text: 'This placeholder website is provided for brand presentation. Final terms should be reviewed by legal counsel before launch.',
  },
  {
    title: 'Product information',
    text: 'Flavor, ingredient, allergen, nutrition, availability, and packaging information shown here is placeholder content.',
  },
  {
    title: 'Intellectual property',
    text: 'Brand assets, product names, visuals, page layouts, and copy should be treated as CHUSKI property unless stated otherwise.',
  },
  {
    title: 'Limitation of liability',
    text: 'Production terms can define responsibility for website use, product purchases, distributor relationships, and customer support.',
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
            Placeholder legal content for CHUSKI. Replace these sections with
            approved policies before production release.
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
