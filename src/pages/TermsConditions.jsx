import { Container, Typography } from '@mui/material'
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded'

const terms = [
  {
    title: 'General Use',
    text: 'By accessing this website, you agree to use it only for lawful and appropriate purposes. The website is intended to provide information about CHUSKI, its products, brand, availability, and business enquiries.',
  },
  {
    title: 'Product Information',
    text: 'Product flavours, ingredients, nutritional values, packaging, pack sizes, MRP, availability, and designs may vary by batch, location, season, distributor, or retailer. Images shown on the website are for representation only. Customers should always refer to the actual product packaging before consumption.',
  },
  {
    title: 'Food Safety & Storage',
    text: 'CHUSKI products are frozen food items and must be stored as per the recommended freezer temperature mentioned on the packaging. The company is not responsible for product quality issues caused by improper storage, thawing, refreezing, mishandling, or delayed consumption after purchase.',
  },
  {
    title: 'Allergens & Ingredients',
    text: 'While we aim to provide accurate ingredient information, customers with allergies, dietary restrictions, or medical conditions should carefully check the product label before consuming. Product formulations may be updated from time to time.',
  },
  {
    title: 'Retailer & Distributor Enquiries',
    text: 'Business enquiries submitted through the website do not guarantee dealership, distribution rights, supply confirmation, pricing approval, or commercial association. All partnerships are subject to verification, availability, business terms, and company approval.',
  },
  {
    title: 'Pricing & Availability',
    text: 'Prices, offers, product availability, and distribution areas may change without prior notice. Final pricing may vary depending on location, retailer, taxes, logistics, and applicable trade terms.',
  },
  {
    title: 'Intellectual Property',
    text: 'The CHUSKI name, logo, tagline, product visuals, packaging designs, website content, graphics, images, and brand assets are owned by or licensed to CHUSKI. They may not be copied, modified, reused, reproduced, or distributed without written permission.',
  },
  {
    title: 'Website Accuracy',
    text: 'We try to keep website information accurate and updated, but errors, delays, or omissions may occur. CHUSKI reserves the right to update, modify, remove, or correct any website content at any time without notice.',
  },
  {
    title: 'Third-Party Links',
    text: 'The website may contain links to third-party platforms such as social media, maps, payment partners, or communication tools. CHUSKI is not responsible for the content, privacy practices, or reliability of third-party websites.',
  },
  {
    title: 'Limitation of Liability',
    text: 'CHUSKI shall not be liable for losses, damages, health issues, service interruptions, or claims arising from misuse of website information, improper product handling, incorrect storage, third-party actions, or reliance on outdated information.',
  },
  {
    title: 'Changes to Terms',
    text: 'CHUSKI may update these Terms & Conditions from time to time. Continued use of the website means you accept the latest version of these terms.',
  },
  {
    title: 'Contact',
    text: 'For product, business, or support enquiries, customers and partners may contact CHUSKI through the official contact details provided on the website.',
  },
]

function TermsConditions() {
  return (
    <>
      <section className="page-hero page-hero--terms">
        <Container maxWidth="lg">
          <Typography variant="h1">Terms & Conditions</Typography>
          <Typography className="page-hero__copy">
            Please read these terms before using the CHUSKI website, browsing
            products, or contacting us for retail and distribution enquiries.
          </Typography>
          <a className="scroll-cue" href="#terms-content" aria-label="Scroll to terms">
            <span>Read terms</span>
            <KeyboardArrowDownRoundedIcon />
          </a>
        </Container>
      </section>

      <section className="section" id="terms-content">
        <Container maxWidth="md">
          <div className="policy-stack">
            {terms.map((item) => (
              <article className="policy-panel" key={item.title}>
                <Typography variant="h3">{item.title}</Typography>
                <Typography color="text.secondary">{item.text}</Typography>
              </article>
            ))}
          </div>
          <Typography
            color="text.secondary"
            sx={{ mt: 3, textAlign: 'center', fontSize: '0.9rem' }}
          >
            These Terms &amp; Conditions are for website use and general brand
            information. For specific business, distributor, retailer, or legal
            agreements, separate written terms may apply.
          </Typography>
        </Container>
      </section>
    </>
  )
}

export default TermsConditions
