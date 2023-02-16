function KeyTag({ text = '', color = 'white' }) {
  return (
    <div
        className={`
            py-0.5 px-[6px] rounded-sm opacity-50 tracking-wider
            ${color == 'white' ? 'text-white border border-b-2 border-white' : 'text-' + color + ' border border-b-2 border-' + color }
        `}
    >
        <p className="text-sm font-medium">
            { text }
        </p>
    </div>
  )
}

export default KeyTag