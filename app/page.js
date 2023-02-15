'use client'

import PasswordModal from '@/components/PasswordModal'
import Sidebar from '@/components/Sidebar'
import Content from '@/components/Content'
import { securityState } from '@/store/atom/securityAtom'
import store from '@/store/store' 
import { AnimatePresence } from 'framer-motion'
import { useRecoilValue } from 'recoil'

export default function Home() {
  const security = useRecoilValue(securityState)

  return (
    <>
      <Sidebar />
      <main className='pl-[300px]'>
        <AnimatePresence>
          { !security && <PasswordModal password={store.password} /> }
          { security && <Content /> }
        </AnimatePresence>
      </main> 
    </>
  )
}
