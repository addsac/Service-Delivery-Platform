import Appointments from '@/components/pages/Appointments'
import Assets from '@/components/pages/Assets'
import Contact from '@/components/pages/Contact'
import TimePlanner from '@/components/pages/TimePlanner'
import { menuState } from '@/store/atom/sidebarAtom'
import { AnimatePresence } from 'framer-motion'
import { useRecoilValue } from 'recoil'

export default function Content() {
    const menu = useRecoilValue(menuState)
  return (
    <div className='min-h-screen w-full pt-[88px] lg:pt-[105px]'>
      <AnimatePresence mode='wait' initial={false}>
        { menu == 1 && <TimePlanner key="content-1" transition={transition} /> }
        { menu == 2 && <Assets key="content-2" transition={transition} /> }
        { menu == 3 && <Appointments key="content-3" transition={transition} /> }
        { menu == 4 && <Contact key="content-4" transition={transition} /> }
      </AnimatePresence>
    </div>
  )
}

const transition = {
  x: { duration: 0.1 },
  default: { ease: "circOut" }
}
