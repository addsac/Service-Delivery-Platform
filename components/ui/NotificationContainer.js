import { motion } from 'framer-motion'

export default function NotificationContainer() {
  return (
    <motion.div 
        initial={{ opacity: 1, y: '-8px'}}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: '-8px' }}
        transition={transition}
        className='mt-3 absolute bottom-100 left-100 bg-white shadow-1 w-[240px] min-h-[260px] max-h-[260px] overflow-y-scroll rounded-base flex flex-col'
    >
        <div className="p-3 text-base text-slate-900 font-medium"> Notifiche </div>
        {[1, 2, 3].map((item, index) => (
            <div className='px-3 py-2 [border-top:_1px_solid_rgba(15,23,42,0.07)] flex flex-col hover:bg-slate-50 gap-y-2'>
                <div className='flex items-center justify-between text-[14px] text-slate-900'>
                    <div className='flex items-center gap-x-2'>
                        <div className='h-[6px] w-[6px] rounded-[50%] bg-slate-900'></div>
                        <p className='font-medium'> Nuovo Link!</p>
                    </div>
                    <p> 12/04/2023 </p>
                </div>
                <p className='text-sm leading-[150%] text-slate-500'>
                    Un nuovo link è disponibile. Vai alla pagina “Assets” per vederlo.
                </p>
            </div>
        ))}
    </motion.div>
  )
}

const transition = {
    x: { duration: 0.1 },
    default: { ease: "circOut" }
}
