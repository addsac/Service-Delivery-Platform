import GridContainer from '../layout/GridContainer'
import AppointmentsCard from '../AppointmentsCard'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import store from '@/store/store'
import { isFuture, isPast } from 'date-fns'

export default function Appointments({ transition }) {

  const futureAppoinments = store.data.appointments.filter( item => isFuture(new Date(item.date)) )
  const pastAppoinments = store.data.appointments.filter( item => isPast(new Date(item.date)) )

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

          <div className='flex flex-col gap-y-6'>
            <p className='text-md font-medium text-slate-900'> Prossimi appuntamenti </p>
            {futureAppoinments.map((item) => <AppointmentsCard item={item} />)}
          </div>

          <div className='flex flex-col gap-y-6'>
            <p className='text-md font-medium text-slate-900'> Appuntamenti passati </p>
            {pastAppoinments.map((item) => <AppointmentsCard item={item} />)}
          </div>

        </div>
      </GridContainer>
    </motion.div>
  )
}
