export default function GridContainer({ children, className }) {
  return (
    <div className={`w-full px-16 grid grid-cols-8 gap-x-6`}>
        <div className='col-span-1'></div>
        <div className={`col-span-6 ${className}`}>
            { children }
        </div>
        <div className='col-span-1'></div>
    </div>
  )
}
