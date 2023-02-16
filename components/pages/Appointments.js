import { motion } from 'framer-motion'
import GridContainer from '../layout/GridContainer'

export default function Appointments({ transition }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: '14px' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '-14px'} } 
      transition={ transition }
    >
      <GridContainer>
        <div className='flex flex-col gap-y-16 py-8'>
          <div className='flex flex-col gap-y-6'>
            <h1 className='text-xxxxl text-slate-900 font-medium'>
              Appuntamenti
            </h1>
            <p className='text-md text-slate-500'>
              Qui sono elencati i prossimi appuntamenti fissati.
            </p>
          </div>
        </div>
      </GridContainer>
    </motion.div>
  )
}
