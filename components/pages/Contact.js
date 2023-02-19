import GridContainer from '../layout/GridContainer'
import Button from '../ui/Button'
import store from '@/store/store'
import { motion } from 'framer-motion'

export default function Contact({ transition }) {
  const contacts = store.data.contacts
  return (
    <motion.div 
      initial={{ opacity: 0, x: '-50px' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '14px'} } 
      transition={ transition }
    >
      <GridContainer>
        <div className='flex flex-col gap-y-16 py-8'>
          <div className='flex flex-col gap-y-6'>
            <h1 className='text-xxxxl text-slate-900 font-medium'>
              Contatti
            </h1>
            <p className='text-md text-slate-500'>
              Hai bisogno di contattarci? Puoi farlo con tutti i link di seguito.
            </p>
          </div>

          <div className='flex flex-col gap-y-6'>
            <p className='text-md font-medium text-slate-900'> Contatti diretti </p>
            <div className='flex flex-col border-t border-slate-900/5'>
              {contacts.phone != '' && (
                <div className='flex items-center justify-between py-4 border-b border-slate-900/5'>
                  <p className='text-md text-slate-600'> Telefono </p>
                  <Button 
                    text={contacts.phone}
                    type="secondary"
                    size="sm"
                    handleClick={() => {window.open('tel:'+contacts.phone)}}
                  />
                </div> 
              )}
              {contacts.email != '' && (
                <div className='flex items-center justify-between py-4 border-b border-slate-900/5'>
                  <p className='text-md text-slate-600'> Email </p>
                  <Button 
                    text={contacts.email}
                    type="secondary"
                    size="sm"
                    handleClick={() => {window.open('mailto:'+contacts.email)}}
                  />
                </div>
              )}
              {(contacts.whatsapp.text != '' && contacts.whatsapp.url != '') && (
                <div className='flex items-center justify-between py-4 border-b border-slate-900/5'>
                  <p className='text-md text-slate-600'> Whatsapp </p>
                  <Button 
                    text={contacts.whatsapp.text}
                    type="secondary"
                    size="sm"
                    handleClick={() => {window.open('https://wa.me/'+contacts.whatsapp.url)}}
                  />
                </div>
              )}
              { contacts.website != '' && (
                <div className='flex items-center justify-between py-4 border-b border-slate-900/5'>
                  <p className='text-md text-slate-600'> Sito web </p>
                  <Button 
                    text={contacts.website}
                    type="secondary"
                    size="sm"
                    handleClick={() => {window.open(contacts.website)}}
                  />
                </div>
              )}
            </div>
          </div>

          <div className='flex flex-col gap-y-6'>
            <p className='text-md font-medium text-slate-900'> Social media </p>
            <div className='flex flex-col border-t border-slate-900/5'>
              {contacts.social.map((item) => (
                <div className='flex items-center justify-between py-4 border-b border-slate-900/5'>
                  <p className='text-md text-slate-600'> {item.title} </p>
                  <Button 
                    text={item.url}
                    type="secondary"
                    size="sm"
                    handleClick={() => {window.open(item.url)}}
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </GridContainer>
    </motion.div>
  )
}
