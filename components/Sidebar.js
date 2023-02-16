import { useState } from "react"
import { menuState } from "@/store/atom/sidebarAtom"
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion"
import KeyTag from './ui/KeyTag'
import IconCartel from '../public/icon/icon-cartel.svg'
import IconFolder from '../public/icon/icon-folder.svg'
import IconCalendar from '../public/icon/icon-calendar.svg'
import IconPhone from '../public/icon/icon-phone.svg'

export default function Sidebar() {
  const setMenu = useSetRecoilState(menuState)
  const menu = useRecoilValue(menuState)

  const [buttonArray] = useState(['Time Planner', 'Assets', 'Appuntamenti', 'Contatti'])
  const [hovered, setHovered] = useState(buttonArray[0])

  return (
    <div className='w-[300px] fixed top-0 bottom-0 bg-white shadow-sidebar flex flex-col justify-between pt-10 pb-6'>
        {/* top part */}
        <div className='relative flex flex-col gap-y-16'>
          {/* logo */}
          <div>
            <img src='logo.svg' alt='' className='w-auto h-8 max-h-8 mx-6' />
          </div>

          {/* divider */}
          <div className='absolute top-16 w-full h-px border-t border-slate-900 border-opacity-[7%]'></div>

          {/* menu */}
          <div className='flex flex-col gap-y-4 mx-6'>
            {/* <p className='text-sm uppercase text-slate-500 tracking-[1px]'> menù </p> */}

            <AnimatePresence>
              <div onMouseLeave={() => setHovered(buttonArray[menu-1])} className='flex flex-col gap-y-[6px]'>
                <AnimateSharedLayout crossfade>
                  {buttonArray.map((text, index) => (
                    <button
                      key={text}
                      className={`button-sidebar ${menu == (index+1) ? 'button-sidebar-active' : ''} relative`}
                      onClick={() => setMenu((index+1))}
                      onMouseEnter={() => setHovered(text)}
                    >
                      <div className='flex items-center gap-x-[6px] py-[2px]'>
                        <span className='w-5 h-5'>
                          { index == 0 && <IconCartel /> }
                          { index == 1 && <IconFolder /> }
                          { index == 2 && <IconCalendar /> }
                          { index == 3 && <IconPhone /> }
                        </span>
                        <p className='text-base font-medium'> { text } </p>
                        {text === 'Assets' && <p className='text-base opacity-80'>(12)</p>}
                      </div>
                      <KeyTag
                        text={`⌘${index + 1}`}
                        color={`${menu == (index+1) ? 'white' : 'slate-900'}`} 
                      />

                      {/* background framer animation */}
                      <AnimatePresence>
                        {hovered === text && (
                          <motion.div
                            layoutId='sidebar-button-hover-background'
                            className='sidebar-button-hover-background z-[-1]'
                            initial={false}
                            transition={{sidebarButtonsTransition}}
                          />
                        )}
                      </AnimatePresence>
                    </button>
                  ))}
                </AnimateSharedLayout>
              </div>
            </AnimatePresence>
          </div>
        </div>

        {/* bottom part */}
        <div className='border-t border-slate-900 border-opacity-[7%] pt-6'>
          <p className='text-sm text-slate-500 mx-6'> © Sito confidenziale – Tutti i diritti riservati </p>
        </div>
    </div>
  )
}

const sidebarButtonsTransition = {
  ease: 'circOut',
}
