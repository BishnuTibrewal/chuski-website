import { motion } from 'framer-motion'

function IcePopVisual({ gradient, color, label, size = 'medium' }) {
  return (
    <motion.div
      className={`ice-pop ice-pop--${size}`}
      aria-label={label}
      role="img"
      style={{ '--pop-gradient': gradient, '--pop-color': color }}
      whileHover={{ y: -8, rotate: -2 }}
      transition={{ type: 'spring', stiffness: 220, damping: 16 }}
    >
      <span className="ice-pop__shine" />
      <span className="ice-pop__bite" />
      <span className="ice-pop__stick" />
    </motion.div>
  )
}

export default IcePopVisual
