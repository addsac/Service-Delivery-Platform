import GridContainer from '../layout/GridContainer'
import Button from '@/components/ui/Button'
import IconChevronRight from '@/public/icon/icon-chevron-right.svg'
import IconFile from '@/public/icon/icon-file.svg'
import IconDownload from '@/public/icon/icon-download.svg'
import IconLink from '@/public/icon/icon-link.svg'
import IconArrowTopRight from '@/public/icon/icon-arrow-top-right.svg'
import IconFolderLg from '@/public/icon/icon-folder-lg.svg'
import IconArrowRight from '@/public/icon/icon-arrow-right.svg'
import { motion } from 'framer-motion'
import store from '@/store/store'
import { useState } from 'react'

export default function Assets({ transition }) {
  const assets = store.data.assets

  const [folderSelected, setFolderSelected] = useState([])

  const resetFolderSelected = (folder, indexFolder) => {
    console.log(folder) // set this as the active folder 
    setFolderSelected([...folderSelected.slice(0, indexFolder + 1)])
  }

  const resetFolderSelectedAsAssets = () => {
    setFolderSelected([])
  }

  const handleClickAsset = (item) => {
    if(item.type == 'file') window.open(item.url, "_blank")
    if(item.type == 'link') window.open(item.url, "_blank")
    if(item.type == 'folder') setFolderSelected([...folderSelected, item])
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: '14px' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '-14px'} } 
      transition={ transition }
    >
      <GridContainer>
        <div className='flex flex-col gap-y-16 py-8'>
          <div className='flex items-start justify-between gap-x-6'>
            <div className='flex flex-col gap-y-6'>
              <h1 className='text-xxxxl text-slate-900 font-medium'>
                Assets
              </h1>
              <p className='text-md text-slate-500'>
                Qui puoi vedere e scaricare tutti i file del progetto
              </p>
            </div>
            <Button
              type="primary"
              size="sm"
              text="Scarica tutto"
              icon="download"
            />
          </div>

          <div className='flex flex-col gap-y-6'>
            <div className='flex flex-wrap gap-y-2 gap-x-1 text-md text-gray-900 font-medium'>
              <button onClick={() => resetFolderSelectedAsAssets()}> Assets </button>
              {folderSelected.length > 0 && (
                <>
                  {folderSelected.map((folder, index) => (
                    <>
                    <IconChevronRight />
                    { folderSelected.length == (index+1) ? (
                      <p className='opacity-50'> 
                        { folder.name } 
                      </p>
                    ) : (
                      <button onClick={() => resetFolderSelected(folder, index)} className='text-md'>
                        { folder.name } 
                      </button> 
                    )}
                    </>
                  ))}
                </>
              )}
            </div>
            <div className='w-full h-px bg-slate-900/10'></div>
            {/* File and Link row */}
            <div className='grid grid-cols-6 gap-6'>
              { assets.map((item) => (
                <button onClick={() => handleClickAsset(item)} className='col-span-2 flex flex-col gap-y-3 hover:-translate-y-1 transition duration-200 ease-out'>
                  <div className='h-[120px] w-full bg-slate-900 rounded-md flex-center text-white/40'>
                    { item.type == 'file' && <IconFile /> }
                    { item.type == 'link' && <IconLink /> }
                    { item.type == 'folder' && <IconFolderLg /> }
                  </div>
                  <div className='w-full flex items-center justify-between text-base text-slate-900'>
                    <p> {item.name} </p>
                    { item.type == 'file' && (
                      <div className='w-5 h-5'>
                        <IconDownload />
                      </div>
                    )}
                    { item.type == 'link' && (
                      <div className='w-5 h-5'>
                        <IconArrowTopRight />
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

        </div>
      </GridContainer>
    </motion.div>
  )
}
