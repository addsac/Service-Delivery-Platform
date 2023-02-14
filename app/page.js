'use client'

import PasswordModal from '@/components/PasswordModal';
import store from '@/store/store' 
import { useState } from 'react';

export default function Home() {
  const [checkSecurity, setCheckSecurity] = useState(false)

  const checkPassword = (string) => {
    if(string == store.password){
      setCheckSecurity(false)
    }
    else{
      alert(1)
    }
  }

  return (
    <main>
      { !checkSecurity && (
        <PasswordModal password={store.password} />  
      )}
    </main>
  )
}
