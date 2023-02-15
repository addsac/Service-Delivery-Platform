'use client'

import PasswordModal from '@/components/PasswordModal'
import { securityState } from '@/store/atom/securityAtom'
import store from '@/store/store' 
import { AnimatePresence } from 'framer-motion'
import { useRecoilValue } from 'recoil'

export default function Home() {
  const security = useRecoilValue(securityState)

  return (
    <main>
      <AnimatePresence>
        { !security && (
          <PasswordModal password={store.password} />  
        )}
      </AnimatePresence>
    </main>
  )
}
