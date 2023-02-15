export default function Sidebar() {
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
            <p className='text-sm uppercase text-slate-500 tracking-[1px]'> menù </p>

            <div className='flex flex-col gap-y-[6px]'>
              <button className='button-sidebar button-sidebar-active'>
                <div className='flex items-center gap-x-[6px] py-[2px]'>
                  <img src='icon/icon-cartel.svg' alt='' className='w-5 h-5' />
                  <p className="text-base font-medium text-white"> Time Planner </p>
                </div>
                <p className="text-sm text-white/50 font-medium"> ⌘1 </p>
              </button>
              <button className='button-sidebar'>
                <div className='flex items-center gap-x-[6px] py-[2px]'>
                  <img src='icon/icon-folder.svg' alt='' className='w-5 h-5 opacity-50' />
                  <p className="text-base font-medium"> Assets </p>
                </div>
                <p className="text-sm font-medium"> ⌘2 </p>
              </button>
              <button className='button-sidebar'>
                <div className='flex items-center gap-x-[6px] py-[2px]'>
                  <img src='icon/icon-calendar.svg' alt='' className='w-5 h-5 opacity-50' />
                  <p className="text-base font-medium"> Appuntamenti </p>
                </div>
                <p className="text-sm font-medium"> ⌘3 </p>
              </button>
              <button className='button-sidebar'>
                <div className='flex items-center gap-x-[6px] py-[2px]'>
                  <img src='icon/icon-phone.svg' alt='' className='w-5 h-5 opacity-50' />
                  <p className="text-base font-medium"> Contatti </p>
                </div>
                <p className="text-sm font-medium"> ⌘4 </p>
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
