import KeyTag from './ui/KeyTag'
import IconCartel from '../public/icon/icon-cartel.svg'
import IconFolder from '../public/icon/icon-folder.svg'
import IconCalendar from '../public/icon/icon-calendar.svg'
import IconPhone from '../public/icon/icon-phone.svg'
import Button from '@/components/ui/Button'
import NotificationContainer from '@/components/ui/NotificationContainer'
import { useState } from 'react'
import { menuState } from '@/store/atom/sidebarAtom'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { AnimatePresence, motion } from 'framer-motion'

export default function TopbarMobile() {

  const [boolNotification, setBoolNotitication] = useState(false)

  const setMenu = useSetRecoilState(menuState)
  const menu = useRecoilValue(menuState)
  const [buttonArray] = useState(['Time Planner', 'Assets', 'Appuntamenti', 'Contatti'])

  const [mobileMenuModal, setMobileMenuModal] = useState(false)

  return (
    <div className='lg:hidden'>
        {/* Modal background */}
        <AnimatePresence>
            {(mobileMenuModal) && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => setMobileMenuModal(false)}
                    className='fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm cursor-pointer' 
                />
            )}
        </AnimatePresence>
        
        {/* Modal menu mobile */}
        <AnimatePresence>
            {(mobileMenuModal) && (
                <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '-100%' }}
                    transition={{ duration: 0.2 }}
                    className='fixed left-0 top-0 bottom-0 z-50 w-2/3 flex flex-col justify-between bg-white shadow-1' 
                >
                    <div className='flex flex-col gap-y-[6px] m-6'>
                        {buttonArray.map((text, index) => (
                            <button
                                key={text}
                                className={`button-sidebar ${menu == (index+1) ? 'button-sidebar-active' : ''}`}
                                onClick={ () => {setMenu((index+1)); setMobileMenuModal(false)} }
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
                                    text={`${index + 1}`}
                                    color={`${menu == (index+1) ? 'white' : 'slate-900'}`} 
                                />
                            </button>
                        ))}
                    </div>

                    {/* bottom part */}
                    <div className='border-t border-slate-900 border-opacity-[7%] py-6'>
                        <p className='text-sm text-slate-500 mx-6'> © Sito confidenziale – Tutti i diritti riservati </p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>


        <div className='w-screen h-[80px] px-8 flex items-center justify-between fixed lg:hidden bg-white shadow-1 z-10'>
            {/* logo */}
            <img src='logo.svg' alt='' className='w-auto h-6 max-h-6' />

            <div className='flex gap-x-3 items-center'>
                {/* notification button */}
                <div className='relative'>
                    <Button 
                        type="outline"
                        text=""
                        size="icon"
                        icon="bell"
                        notificationNumber={2}
                        handleClick={() => setBoolNotitication(true)}
                    />
                    {/* Modal notification mobile */}
                    <AnimatePresence>
                        {boolNotification && <NotificationContainer clickOutsideFunction={() => setBoolNotitication(false)} /> }
                    </AnimatePresence>
                </div>

                {/* menu button */}
                <Button 
                    type="secondary"
                    text=""
                    size="icon"
                    icon="menu"
                    handleClick={() => setMobileMenuModal(true)}
                />
            </div>
        </div>
    </div>
  )
}
