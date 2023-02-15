import { menuState } from "@/store/atom/sidebarAtom"
import { useRecoilValue, useSetRecoilState } from 'recoil'
import KeyTag from './ui/KeyTag'
import IconCartel from '../public/icon/icon-cartel.svg'
import IconFolder from '../public/icon/icon-folder.svg'
import IconCalendar from '../public/icon/icon-calendar.svg'
import IconPhone from '../public/icon/icon-phone.svg'

export default function Sidebar() {
  const setMenu = useSetRecoilState(menuState)
  const menu = useRecoilValue(menuState)

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

            <div className='flex flex-col gap-y-[6px]'>
              <button
                className={`button-sidebar ${menu == 1 ? 'button-sidebar-active' : ''}`}
                onClick={() => setMenu(1)}
              >
                <div className='flex items-center gap-x-[6px] py-[2px]'>
                  <span className='w-5 h-5'>
                    <IconCartel />
                  </span>
                  <p className="text-base font-medium"> Time Planner </p>
                </div>
                <KeyTag
                  text="⌘1" 
                  color={`${menu == 1 ? 'white' : 'slate-900'}`} 
                />
              </button>
              <button
                className={`button-sidebar ${menu == 2 ? 'button-sidebar-active' : ''}`}
                onClick={() => setMenu(2)}
              >
                <div className='flex items-center gap-x-[6px] py-[2px]'>
                  <span className='w-5 h-5'>
                    <IconFolder />
                  </span>
                  <p className="text-base font-medium"> Assets </p>
                  <p className="text-base text-slate-500/50"> (12) </p>
                </div>
                <KeyTag
                  text="⌘2" 
                  color={`${menu == 2 ? 'white' : 'slate-900'}`} 
                />
              </button>
              <button
                className={`button-sidebar ${menu == 3 ? 'button-sidebar-active' : ''}`}
                onClick={() => setMenu(3)}
              >
                <div className='flex items-center gap-x-[6px] py-[2px]'>
                  <span className='w-5 h-5'>
                    <IconCalendar />
                  </span>
                  <p className="text-base font-medium"> Appuntamenti </p>
                </div>
                <KeyTag
                  text="⌘3" 
                  color={`${menu == 3 ? 'white' : 'slate-900'}`} 
                />
              </button>
              <button
                className={`button-sidebar ${menu == 4 ? 'button-sidebar-active' : ''}`}
                onClick={() => setMenu(4)}
              >
                <div className='flex items-center gap-x-[6px] py-[2px]'>
                  <span className='w-5 h-5'>
                    <IconPhone />
                  </span>
                  <p className="text-base font-medium"> Contatti </p>
                </div>
                <KeyTag
                  text="⌘4" 
                  color={`${menu == 4 ? 'white' : 'slate-900'}`} 
                />
              </button>
            </div>
          </div>
        </div>

        {/* bottom part */}
        <div className='border-t border-slate-900 border-opacity-[7%] pt-6'>
          <p className='text-sm text-slate-500 mx-6'> © Sito confidenziale – Tutti i diritti riservati </p>
        </div>
    </div>
  )
}
