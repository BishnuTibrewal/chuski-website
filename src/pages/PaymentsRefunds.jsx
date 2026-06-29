import { Container, Grid, Typography } from '@mui/material'

const policies = [
  {
    title: 'Payments',
    text: 'Placeholder payment copy for prepaid orders, distributor invoices, UPI, cards, wallets, and future checkout integrations.',
  },
  {
    title: 'Refund eligibility',
    text: 'Refunds may depend on order status, temperature-sensitive delivery constraints, damaged goods verification, and support review.',
  },
  {
    title: 'Processing timeline',
    text: 'Approved refunds can be described with a clear timeline once payment partners and operating procedures are finalized.',
  },
  {
    title: 'Customer support',
    text: 'Add verified support hours, email addresses, escalation steps, and required order details before launch.',
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
            Clear placeholder policy content for payment methods, cancellations,
            refunds, and support workflows.
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
