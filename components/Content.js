import { menuState } from '@/store/atom/sidebarAtom'
import { useRecoilValue } from 'recoil'

export default function Content() {
    const menu = useRecoilValue(menuState)
  return (
    <div className='h-screen w-full flex-center'>
        <p>
            { menu }
        </p>
    </div>
  )
}
