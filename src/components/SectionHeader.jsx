import { Box, Typography } from '@mui/material'
import { motion } from 'framer-motion'

function SectionHeader({ eyebrow, title, description, align = 'center' }) {
  return (
    <Box
      component={motion.div}
      className={`section-header section-header--${align}`}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55 }}
    >
      {eyebrow && <Typography className="eyebrow">{eyebrow}</Typography>}
      <Typography variant="h2">{title}</Typography>
      {description && (
        <Typography className="section-header__description">{description}</Typography>
      )}
    </Box>
  )
}

export default SectionHeader
