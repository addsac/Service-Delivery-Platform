import GridContainer from './layout/GridContainer'
import Button from './ui/Button'
import NotificationContainer from './ui/NotificationContainer'
import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function Topbar() {
  const [boolNotification, setBoolNotitication] = useState(false)

  return (
    <div className='fixed w-[calc(100%-300px)] pt-10 pb-8 flex-center bg-slate-50 border-b border-slate-900/5 z-10'>
        <GridContainer className='w-full flex items-center justify-between h-8'>
            <p className="text-md text-slate-500"> Progetto: sito web dello studio del Dr. Caron </p>
            <div className='relative'>
              <Button 
                  text="Notifiche"
                  type="secondary"
                  size="sm"
                  icon="bell"
                  notificationNumber="2"
                  handleClick={() => setBoolNotitication(!boolNotification)}
              />
              <AnimatePresence>
                {boolNotification && <NotificationContainer clickOutsideFunction={() => setBoolNotitication(false)} /> }
              </AnimatePresence>
            </div>
        </GridContainer>
    </div>
  )
}
