import GridContainer from '../layout/GridContainer'
import Button from '@/components/ui/Button'
import IconChevronRight from '@/public/icon/icon-chevron-right.svg'
import IconFile from '@/public/icon/icon-file.svg'
import IconDownload from '@/public/icon/icon-download.svg'
import IconLink from '@/public/icon/icon-link.svg'
import IconArrowTopRight from '@/public/icon/icon-arrow-top-right.svg'
import IconFolderLg from '@/public/icon/icon-folder-lg.svg'
import { motion, AnimatePresence } from 'framer-motion'
import store from '@/store/store'
import { useState } from 'react'

export default function Assets({ transition }) {
  const assets = store.data.assets

  const [currentAssets, setCurrentAssets] = useState(assets)

  const [folderSelected, setFolderSelected] = useState([])

  const resetFolderSelected = (folder, indexFolder) => {
    setCurrentAssets([...folder.assets])
    setFolderSelected([...folderSelected.slice(0, indexFolder + 1)])
  }

  const resetFolderSelectedAsAssets = () => {
    setFolderSelected([])
    setCurrentAssets([...assets])
  }

  const handleClickAsset = (item) => {
    if(item.type == 'file') window.open(item.url, "_blank")
    if(item.type == 'link') window.open(item.url, "_blank")
    if(item.type == 'folder') {
      setFolderSelected([...folderSelected, item])
      setCurrentAssets([...item.assets])
    }
  }

  return (
    <motion.div 
      initial={{ opacity: 0, x: '-50px' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '14px'} } 
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
                      <AnimatePresence>
                        { folderSelected.length == (index+1) ? (
                          <motion.p 
                            initial={{ y: '5px', opacity: 0 }}
                            animate={{ y: 0, opacity: 0.5}}
                            exit={{ y: '-5px', opacity: 0 }}
                            key={'folder-list-' + index + '-' + folder.name}
                          > 
                            { folder.name } 
                          </motion.p>
                        ) : (
                          <motion.button 
                            initial={{ opacity: 0.5 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0.5 }}
                            key={'folder-list-' + index + '-' + folder.name}
                            onClick={() => resetFolderSelected(folder, index)} className='text-md'
                          >
                            { folder.name } 
                          </motion.button> 
                        )}
                        </AnimatePresence>
                    </>
                  ))}
                </>
              )}
            </div>
            <div className='w-full h-px bg-slate-900/10'></div>
            {/* File and Link row */}
            <div 
              className='grid grid-cols-6 gap-6'
            >
              <AnimatePresence mode='wait'>
                {currentAssets.map((item, index) => (
                  <motion.button 
                    initial={{ y: '8px', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: '8px', opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    whileHover={{ y: -5 }}
                    key={'file-' + index + '-' + item.name}
                    onClick={() => handleClickAsset(item)} 
                    className='col-span-2 flex flex-col gap-y-3'
                  >
                    <div className='h-[140px] w-full bg-slate-900 rounded-md flex-center text-slate-500'>
                      { item.type == 'file' && <IconFile /> }
                      { item.type == 'link' && <span className='w-10 h-10 stroke-2'><IconLink /></span> }
                      { item.type == 'folder' && <IconFolderLg /> }
                    </div>
                    <div className='w-full flex items-start justify-between text-base text-slate-900'>
                      <div className='flex flex-col items-start gap-y-[6px] text-left'>
                        <p> {item.name} </p>
                        { item.type == 'folder' && ( <p className='text-sm text-slate-500'> {item.assets.length} File </p> )}
                      </div>
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
                  </motion.button>
                ))}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </GridContainer>
    </motion.div>
  )
}
