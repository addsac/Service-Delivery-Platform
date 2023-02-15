import Button from '@/components/ui/Button'
import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { securityState } from '@/store/atom/securityAtom'
import { useSetRecoilState } from 'recoil'

export default function PasswordModal() {
    const [passwordWritter, setPasswordWritter] = useState('')
    const setSecurity = useSetRecoilState(securityState)

    const input = useRef(null)

    const onChangeInputPassword = ({target: {value}}) => {
        setPasswordWritter(value);
    }

    const checkPassword = (event) => {
        event.preventDefault()

        if(process.env.NEXT_PUBLIC_PASSWORD == passwordWritter){
            setSecurity(true)
        }
        else{
            alert('La password è sbagliata, riprova.')
            input.current.focus()
        }
    }

    return (
        <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{scale: 0.9, opacity: 0}}
            transition={defaultTransition}
            className='fixed w-screen h-screen inset-0 z-50 flex-center'
        >
            <div className='w-full max-w-[417px] mx-3 h-auto flex flex-col gap-y-16 text-center'>
                <div className='flex flex-col items-center gap-y-10'>
                    {/* Icon */}
                    <div className='h-12 w-12 bg-slate-900 rounded-base flex-center'>
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className='text-white h-6 w-6'>
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                                d="M15 13.25C17.3472 13.25 19.25 11.3472 19.25 9C19.25 6.65279 17.3472 4.75 15 4.75C12.6528 4.75 10.75 6.65279 10.75 9C10.75 9.31012 10.7832 9.61248 10.8463 9.90372L4.75 16V19.25H8L8.75 18.5V16.75H10.5L11.75 15.5V13.75H13.5L14.0963 13.1537C14.3875 13.2168 14.6899 13.25 15 13.25Z"></path>
                            <path stroke="currentColor"
                                d="M16.5 8C16.5 8.27614 16.2761 8.5 16 8.5C15.7239 8.5 15.5 8.27614 15.5 8C15.5 7.72386 15.7239 7.5 16 7.5C16.2761 7.5 16.5 7.72386 16.5 8Z"></path>
                        </svg>
                    </div>

                    <div className='flex flex-col items-center gap-y-6'>
                        <p className='text-xxl text-slate-900 font-medium'>
                            Bentornato, Sr. Gianfranco.
                        </p>

                        <p className='text-lg text-slate-500'>
                        Inserisci la password per accedere al progetto
                        </p>
                    </div>
                </div>

                <form submit={checkPassword} className='flex flex-col gap-y-8'>
                    <input 
                        ref={input}
                        type='password'
                        value={passwordWritter} 
                        onChange={onChangeInputPassword} 
                        className='input-1' 
                        autoComplete='new-password'
                        autoFocus
                    />

                    <div className='flex flex-col gap-y-4'>
                        <Button
                            text="Entra" 
                            type="primary" 
                            size="lg"
                            icon="arrow-right"
                            handleClick={checkPassword}
                        />

                        <div className='flex-center'>
                            <Button
                                text="Password dimenticata?" 
                                type="outline"
                                size="sm"
                            />
                        </div>
                    </div>
                </form>
            </div>

            <div className="absolute bottom-8 mx-auto">
                <p className='text-base text-slate-500'>
                    © 2023 Pegaso Digital Studio
                </p>
            </div>
        </motion.div>
    )
}

let defaultTransition = {
  duration: 0.3,
  delay: 0.05,
  type: "tween",
  ease: "circInOut",
};
