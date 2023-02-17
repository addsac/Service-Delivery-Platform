import store from '@/store/store'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function NotificationContainer() {
  const [activeMenu, setActiveMenu] = useState(1) // 1 = Notitiche, 2 = Comunicazioni

  const notifications = store.data.notifications
  const messages = store.data.messages

  return (
    <motion.div 
        initial={{ opacity: 1, y: '-8px' }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: '-8px' }}
        className='mt-3 absolute bottom-100 right-0 bg-white shadow-1 w-[400px] min-h-[500px] max-h-[260px] overflow-y-scroll rounded-md flex flex-col'
    >
        <div className="px-5 text-base text-slate-900 flex items-center gap-x-5">
            <button onClick={() => setActiveMenu(1)} className={`${activeMenu == 1 ? 'border-slate-900 text-slate-900' : 'border-transparent text-slate-500 hover:text-slate-900'} border-b-2 text-base pt-5 pb-[18px] px-1`}>
                Notifiche
            </button>
            <button onClick={() => setActiveMenu(2)} className={`${activeMenu == 2 ? 'border-slate-900 text-slate-900' : 'border-transparent text-slate-500 hover:text-slate-900'} border-b-2 text-base pt-5 pb-[18px] px-1`}>
                Comunicazioni
            </button>
        </div>
        {activeMenu == 1 ? (
            notifications.map((item) => (
                <div className='px-5 py-4 [border-top:_1px_solid_rgba(15,23,42,0.07)] last:border-b flex flex-col hover:bg-slate-50 gap-y-[6px]'>
                    <p className='text-base leading-[140%] text-slate-900'>
                        { item.title }
                    </p>
                    <p className='text-base text-slate-500'>
                        {item.date}
                    </p>
                </div>
            ))
        ) : (
            messages.map((item) => (
                <div className='px-5 py-4 [border-top:_1px_solid_rgba(15,23,42,0.07)] last:border-b flex flex-col hover:bg-slate-50 gap-y-[6px]'>
                    <p className='text-base leading-[140%] text-slate-900'>
                        { item.text }
                    </p>
                    <p className='text-base text-slate-500'>
                        {item.date}
                    </p>
                </div>
            ))
        )}
    </motion.div>
  )
}
