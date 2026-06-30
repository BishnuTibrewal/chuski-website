import { Container, Grid, Typography } from '@mui/material'

const policies = [
  {
    title: 'Payments',
    text: 'CHUSKI accepts confirmed payments through approved business channels for retail, event, and distributor orders.',
  },
  {
    title: 'Refund eligibility',
    text: 'Refund requests are reviewed based on order status, delivery condition, temperature-sensitive handling, and verified product concerns.',
  },
  {
    title: 'Processing timeline',
    text: 'Approved refunds are processed through the original or agreed payment method after the support team completes its review.',
  },
  {
    title: 'Customer support',
    text: 'For faster support, share your order details, purchase location, product flavour, batch information, and clear photos if applicable.',
  },
]

function PaymentsRefunds() {
  return (
    <>
      <section className="page-hero page-hero--payments">
        <Container maxWidth="lg">
          <Typography className="eyebrow">Support</Typography>
          <Typography variant="h1">Payments & Refunds</Typography>
          <Typography className="page-hero__copy">
            Simple guidance for order payments, cancellations, refund reviews, and
            customer support for CHUSKI ice pops.
          </Typography>
        </Container>
      </section>

      <section className="section">
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            {policies.map((item) => (
              <Grid size={{ xs: 12, md: 6 }} key={item.title}>
                <article className="policy-panel">
                  <Typography variant="h3">{item.title}</Typography>
                  <Typography color="text.secondary">{item.text}</Typography>
                </article>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>
    </>
  )
}

export default PaymentsRefunds
