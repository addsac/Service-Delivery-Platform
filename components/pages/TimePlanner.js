import IconLayer from '@/public/icon/icon-layer.svg'
import { motion } from 'framer-motion'
import GridContainer from '../layout/GridContainer'
import store from '@/store/store'

export default function TimePlanner({ transition }) {
  const timePlannerData = store.data.timePlanner

  return (
    <motion.div 
      initial={{ opacity: 0, x: '-50px' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '14px'} } 
      transition={ transition }
    >
      <GridContainer>
        <div className='flex flex-col gap-y-16 py-8'>
          {/* Title and description */}
          <div className='flex flex-col gap-y-6'>
            <h1 className='text-xxxxl text-slate-900 font-medium'>
              Time planner
            </h1>
            <p className='text-md text-slate-500'>
              Qui puoi vedere le fasi in corso del progetto
            </p>
          </div>

          {/* Content */}
          <div className='relative flex flex-col gap-y-16'>
            {/* Row decoration */}
            <div className='ml-10 h-full w-px absolute border-l-2 border-dashed border-slate-900/5'></div>
          
            { timePlannerData.map((plan, index) => (
              <div className='flex gap-x-10'>
                {/* Square  */}
                <div className='relative flex h-20 w-20'>
                  { plan.active && <span class="animate-ping absolute inline-flex h-full w-full rounded-md bg-slate-400 z-[-1]"></span> }
                  <div className='h-20 w-20 flex-center rounded-md bg-white shadow-1'>
                    <IconLayer />
                  </div>
                </div>

                <div>
                  <div className='h-[30px] w-full'></div>
                  <div className='flex flex-col gap-y-10'>
                    <div className='flex flex-col gap-y-6'>
                      <p className="text-md text-slate-900 font-medium"> { plan.title } </p>
                      <p className="text-base text-slate-500 leading-[170%]"> { plan.description } </p>
                    </div>
                    { plan.data.map((item) => (
                      <div className='flex flex-col gap-y-4'>
                        <p className="text-base text-slate-900 font-medium"> { item.title } </p>
                        <p className="text-base text-slate-500 leading-[170%]"> { item.body } </p>
                      </div>
                    )) }
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </GridContainer>
    </motion.div>
  )
}
