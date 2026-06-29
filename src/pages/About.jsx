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
            CHUSKI is a placeholder FMCG ice pops brand with a premium, playful
            identity and a simple promise: Little Licks of Happiness.
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
                description="This page is ready for founder notes, sourcing commitments, manufacturing details, and brand milestones."
              />
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <div className="story-panel">
                <Typography>
                  CHUSKI celebrates the familiar joy of an ice pop with modern
                  FMCG polish. The brand system is colorful, approachable, and
                  built for quick recognition across freezers, posters, digital
                  shelves, and distributor material.
                </Typography>
                <Typography>
                  Placeholder messaging can be replaced with verified operational
                  details such as production capacity, city availability, retailer
                  onboarding, ingredient policy, certifications, and customer care
                  response timelines.
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
              ['Premium', 'A polished presentation for modern retail and gifting.'],
              ['Scalable', 'Reusable content blocks for future commerce and campaigns.'],
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
