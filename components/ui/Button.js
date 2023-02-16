'use client'

import IconBell from '../../public/icon/icon-bell.svg'
import IconDownload from '../../public/icon/icon-download.svg'

export default function Button({ type, size, icon, text = '', notificationNumber, handleClick }) {
  const nullFunction = (event) => {
    event.preventDefault()
  }

  return (
    <button 
      onClick={handleClick ? handleClick : nullFunction}
      className={`
          btn-${type}
          ${size == 'sm' ? 'btn-size-sm' : size == 'lg' ? 'btn-size-lg' : ''}
          font-medium
          relative
      `}
    >
      {icon == 'bell' && (
          <div className="text-slate-900">
            <IconBell />
          </div>
      )}
      {notificationNumber && (
        <div className='w-4 h-4 flex-center rounded-[50%] bg-slate-900 text-[10px] text-white absolute -top-2 -right-2'>
          { notificationNumber }
        </div>
      )}

      { icon == 'download' && (
        <div className="text-white">
          <IconDownload />
        </div>
      )}

      <p>
        { text }
      </p>

      {icon == 'arrow-right' && (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="text-white h-5 w-5">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.75 6.75L19.25 12L13.75 17.25"></path>
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H4.75"></path>
        </svg>          
      )}
    </button>
  )
}
