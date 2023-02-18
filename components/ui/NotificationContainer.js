import store from '@/store/store'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { useDetectClickOutside } from 'react-detect-click-outside'
import { formatDistance } from 'date-fns'
import { it } from 'date-fns/locale'

export default function NotificationContainer({ clickOutsideFunction }) {
  const [activeMenu, setActiveMenu] = useState(1) // 1 = Notitiche, 2 = Comunicazioni

  const notifications = store.data.notifications
  const messages = store.data.messages

  const ref = useDetectClickOutside({ onTriggered: clickOutsideFunction })

  return (
    <motion.div 
        initial={{ opacity: 1, y: '-8px' }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: '-8px' }}
        ref={ref}
        className='mt-3 absolute bottom-100 right-0 bg-white shadow-1 w-[280px] lg:w-[400px] h-[350px] lg:h-[500px] overflow-y-scroll rounded-md flex flex-col'
    >
        <div className="px-5 text-base font-medium text-slate-900 flex items-center gap-x-5">
            <button onClick={() => setActiveMenu(1)} className={`relative ${activeMenu == 1 ? 'text-slate-900' : 'text-slate-500 hover:text-slate-900'} text-base pt-5 pb-[18px] px-1`}>
                Notifiche
                <AnimatePresence>
                    {activeMenu === 1 && (
                    <motion.div
                        layoutId='notitications-button-modal'
                        className='absolute left-0 right-0 bottom-0 h-0.5 bg-slate-900'
                        initial={false}
                        transition={sidebarButtonsTransition}
                    />
                    )}
                </AnimatePresence>
            </button>
            <button onClick={() => setActiveMenu(2)} className={`relative ${activeMenu == 2 ? 'text-slate-900' : 'text-slate-500 hover:text-slate-900'} text-base pt-5 pb-[18px] px-1`}>
                Comunicazioni
                <AnimatePresence>
                    {activeMenu === 2 && (
                    <motion.div
                        layoutId='notitications-button-modal'
                        className='absolute left-0 right-0 bottom-0 h-0.5 bg-slate-900'
                        initial={false}
                        transition={sidebarButtonsTransition}
                    />
                    )}
                </AnimatePresence>
            </button>
        </div>
        {activeMenu == 1 ? (
            notifications.map((item) => (
                <div className='px-5 py-4 [border-top:_1px_solid_rgba(15,23,42,0.07)] last:border-b flex flex-col hover:bg-slate-50 gap-y-2'>
                    <p className='text-base leading-[140%] text-slate-900'>
                        { item.title }
                    </p>
                    <p className='text-[13px] text-slate-500'>
                        {formatDistance(new Date(item.date), new Date(), { addSuffix: true, locale: it})}
                    </p>
                </div>
            ))
        ) : (
            messages.map((item) => (
                <div className='px-5 py-4 [border-top:_1px_solid_rgba(15,23,42,0.07)] last:border-b flex flex-col hover:bg-slate-50 gap-y-2'>
                    <p className='text-base leading-[140%] text-slate-900'>
                        { item.text }
                    </p>
                    <p className='text-[13px] text-slate-500'>
                        {formatDistance(new Date(item.date), new Date(), { addSuffix: true, locale: it})}
                    </p>
                </div>
            ))
        )}
    </motion.div>
  )
}

const sidebarButtonsTransition = {
    ease: 'circOut',
    duration: 0.17,
    delay: 0.05
}
  