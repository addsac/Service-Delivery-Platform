'use client'

export default function Button({ type, size, icon, text = '' }) {
  return (
    <button 
      className={`
          btn-${type}
          ${size == 'sm' ? 'btn-size-sm' : size == 'lg' ? 'btn-size-lg' : ''}
          font-medium
      `}
    >
        { text }
        {icon == 'arrow-right' && (
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="text-white h-5 w-5">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.75 6.75L19.25 12L13.75 17.25"></path>
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H4.75"></path>
            </svg>          
        )}
    </button>
  )
}
