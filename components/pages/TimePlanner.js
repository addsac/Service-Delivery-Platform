import { motion } from "framer-motion";

export default function TimePlanner({ transition }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: '14px' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '-14px'} } 
      transition={ transition }
    >
        TimePlanner
    </motion.div>
  )
}
