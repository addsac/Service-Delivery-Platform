function KeyTag({ text = '', color = 'white' }) {
  return (
    <div
        className={`
            py-0.5 px-1 rounded-sm opacity-50 tracking-wider
            ${color == 'white' ? 'text-white' : 'text-' + color}
        `}
    >
        <p className="text-sm font-medium">
            { text }
        </p>
    </div>
  )
}

export default KeyTag