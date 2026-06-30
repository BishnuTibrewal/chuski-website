import { Box, Container, Grid, Typography } from '@mui/material'

const policies = [
  {
    title: 'Payments',
    blocks: [
      {
        type: 'text',
        text: 'CHUSKI accepts payments only through authorised business channels, approved distributors, retailers, event partners, and official company representatives. Accepted payment methods may include bank transfer, UPI, online payment gateways, or other approved modes depending on the order type and location.',
      },
      {
        type: 'text',
        text: 'Payment terms for distributors, wholesalers, and retailers are governed by mutually agreed commercial arrangements.',
      },
    ],
  },
  {
    title: 'Order Confirmation',
    blocks: [
      {
        type: 'text',
        text: 'Orders are considered confirmed only after payment verification (where applicable) and acceptance by CHUSKI. Product availability, delivery schedules, minimum order quantities, and service locations may affect order confirmation.',
      },
      {
        type: 'text',
        text: 'CHUSKI reserves the right to refuse or cancel orders in cases of pricing errors, stock unavailability, suspected fraud, incorrect information, or unforeseen operational circumstances.',
      },
    ],
  },
  {
    title: 'Refund Eligibility',
    blocks: [
      {
        type: 'text',
        text: 'As CHUSKI products are frozen food items, refunds are reviewed on a case-by-case basis.',
      },
      { type: 'text', text: 'Refund requests may be considered if:' },
      {
        type: 'list',
        items: [
          'Wrong product supplied',
          'Damaged packaging before delivery',
          'Manufacturing defect',
          'Quality concerns verified by our team',
          'Duplicate or incorrect payment',
        ],
      },
      { type: 'text', text: 'Refunds are generally not applicable for:' },
      {
        type: 'list',
        items: [
          'Change of mind',
          'Taste preferences',
          'Improper storage after delivery',
          'Products that have melted due to customer handling',
          'Incorrect freezer conditions',
          'Products consumed partially or completely',
        ],
      },
    ],
  },
  {
    title: 'Refund Processing',
    blocks: [
      {
        type: 'text',
        text: 'Once a refund request is approved, the refund will normally be processed through the original payment method wherever possible.',
      },
      {
        type: 'text',
        text: 'Processing times may vary depending on banks, payment gateways, and financial institutions.',
      },
      {
        type: 'text',
        text: 'Customers will be informed once the refund has been initiated.',
      },
    ],
  },
  {
    title: 'Product Quality Concerns',
    blocks: [
      {
        type: 'text',
        text: 'If you believe a product has a manufacturing or quality issue, please contact us as soon as possible with:',
      },
      {
        type: 'list',
        items: [
          'Product name',
          'Batch number',
          'Date of purchase',
          'Purchase location',
          'Clear photographs of the product and packaging',
          'Description of the issue',
        ],
      },
      {
        type: 'text',
        text: 'Providing complete information helps us investigate and resolve concerns more efficiently.',
      },
    ],
  },
  {
    title: 'Distributor & Retail Payments',
    blocks: [
      {
        type: 'text',
        text: 'Payment schedules for distributors, wholesalers, retailers, institutions, and business partners are governed by separate commercial agreements.',
      },
      {
        type: 'text',
        text: 'Website information does not override signed purchase agreements or negotiated payment terms.',
      },
    ],
  },
  {
    title: 'Customer Support',
    blocks: [
      {
        type: 'text',
        text: 'Our support team is committed to resolving genuine concerns as quickly as possible.',
      },
      {
        type: 'text',
        text: 'For assistance regarding payments, orders, product quality, or refund requests, customers can contact CHUSKI using the official contact details provided on the website.',
      },
    ],
  },
  {
    title: 'Policy Updates',
    blocks: [
      {
        type: 'text',
        text: 'CHUSKI may revise this Payments & Refunds Policy from time to time to reflect operational, legal, or business changes.',
      },
      {
        type: 'text',
        text: 'The latest version published on the website shall apply.',
      },
    ],
  },
]

function PaymentsRefunds() {
  return (
    <>
      <section className="page-hero page-hero--payments">
        <Container maxWidth="lg">
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
                  <Box sx={{ display: 'grid', gap: 1.5 }}>
                    {item.blocks.map((block, index) =>
                      block.type === 'list' ? (
                        <Box
                          key={index}
                          component="ul"
                          sx={{ m: 0, pl: 3, display: 'grid', gap: 0.75 }}
                        >
                          {block.items.map((point) => (
                            <Typography
                              key={point}
                              component="li"
                              color="text.secondary"
                            >
                              {point}
                            </Typography>
                          ))}
                        </Box>
                      ) : (
                        <Typography key={index} color="text.secondary">
                          {block.text}
                        </Typography>
                      )
                    )}
                  </Box>
                </article>
              </Grid>
            ))}
          </Grid>
          <Typography
            color="text.secondary"
            sx={{ mt: 3, textAlign: 'center', fontSize: '0.9rem' }}
          >
            This policy applies only to purchases made through authorised CHUSKI
            business channels. Products purchased through third-party retailers,
            distributors, or marketplaces may also be subject to their respective
            return and refund policies.
          </Typography>
        </Container>
      </section>
    </>
  )
}

export default PaymentsRefunds
