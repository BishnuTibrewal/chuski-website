import { Container, Grid, Typography } from '@mui/material'
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded'
import SectionHeader from '../components/SectionHeader'

function About() {
  return (
    <>
      <section className="page-hero page-hero--about">
        <Container maxWidth="lg">
          <Typography variant="h1">Built for bright freezer moments</Typography>
          <Typography className="page-hero__copy">
            CHUSKI brings back the simple joy of tube ice pops with vibrant
            flavours, clean packaging, and a playful brand made for Indian summers.
          </Typography>
          <a className="scroll-cue" href="#about-story" aria-label="Scroll to brand story">
            <span>Meet the brand</span>
            <KeyboardArrowDownRoundedIcon />
          </a>
        </Container>
      </section>

      <section className="section" id="about-story">
        <Container maxWidth="xl">
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 5 }}>
              <SectionHeader
                align="left"
                eyebrow="Our story"
                title="Every summer has a CHUSKI story."
                description="For generations, frozen treats have been part of India's happiest moments—from running home after school to sharing laughs with friends on a warm afternoon. CHUSKI was created to bring those little moments of joy back, one colourful ice pop at a time."
              />
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <div className="story-panel">
                <Typography>
                  Every CHUSKI begins with a simple idea: happiness doesn't have to
                  be complicated. A refreshing ice pop, a bright smile, and a few
                  carefree minutes are enough to create memories that last for years.
                </Typography>
                <Typography>
                  Whether it's children enjoying their favourite flavours, families
                  celebrating together, or someone simply looking for relief on a hot
                  summer day, our products are made to make everyday moments feel
                  special.
                </Typography>
                <Typography>
                  Behind every colourful pack is our commitment to quality, hygiene,
                  consistency, and taste. We believe retailers deserve products
                  customers trust, and customers deserve frozen treats they can enjoy
                  with confidence.
                </Typography>
                <Typography>
                  As we continue to grow, our promise remains the same:
                </Typography>
                <Typography>"Little Licks of Happiness."</Typography>
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
