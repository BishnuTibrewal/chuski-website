import { Container, Grid, Typography } from '@mui/material'
import SectionHeader from '../components/SectionHeader'

function About() {
  return (
    <>
      <section className="page-hero page-hero--about">
        <Container maxWidth="lg">
          <Typography className="eyebrow">About CHUSKI</Typography>
          <Typography variant="h1">Built for bright freezer moments</Typography>
          <Typography className="page-hero__copy">
            CHUSKI brings back the simple joy of tube ice pops with vibrant
            flavours, clean packaging, and a playful brand made for Indian summers.
          </Typography>
        </Container>
      </section>

      <section className="section">
        <Container maxWidth="xl">
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 5 }}>
              <SectionHeader
                align="left"
                eyebrow="Our story"
                title="Small treats, big recall"
                description="We make freezer treats that are easy to stock, easy to love, and memorable from the first cold sip."
              />
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <div className="story-panel">
                <Typography>
                  CHUSKI celebrates the familiar joy of tearing open a chilled
                  tube pop after school, during a market run, or at a summer event.
                  The experience is simple: bright flavour, icy refreshment, and a
                  smile in every pack.
                </Typography>
                <Typography>
                  For retailers and distributors, the range is built with clear
                  flavour cues, compact freezer storage, and a colourful shelf
                  presence that helps customers pick quickly and come back often.
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section className="section section--tint">
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            {[
              ['Playful', 'A brand voice that feels joyful without losing trust.'],
              ['Fresh', 'Icy, fruit-led profiles made for hot days and quick refreshment.'],
              ['Retail smart', 'Compact tube packs designed for visibility, hygiene, and repeat sales.'],
            ].map(([title, text]) => (
              <Grid size={{ xs: 12, md: 4 }} key={title}>
                <div className="value-card">
                  <Typography variant="h3">{title}</Typography>
                  <Typography color="text.secondary">{text}</Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>
    </>
  )
}

export default About
