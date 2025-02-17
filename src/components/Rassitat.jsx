import React from 'react'
import { useTranslation } from 'react-i18next'

function Rassitat() {
  const {t} = useTranslation()
  return (
    <div className='h-[270px] shadow w-[1250px] rounded-2xl mt-12 grid justify-center'>
            <div className='flex justify-evenly items-center gap-6 mt-6'>
              <div className='border-b-2 border-[#222222] w-[220px] h-[75px] space-y-3'> <p className='text-[14px] font-bold'>{t('rassitat1')}</p>
                <div className='flex'><img src="/strana.svg" alt="" />
                <select name="" id=""><option value="">{t('rassitat2')}</option></select>
                </div>
              </div>
              <div className='border-b-2 border-[#222222] w-[220px] h-[75px] space-y-3'> <p className='text-[14px] font-bold'>{t('rassitat3')}</p>
              <div className='flex'><img src="/gorod.svg" alt="" />
              <p>{t('rassitat4')}</p>
              </div>
              </div>
              <div className='border-b-2 border-[#222222] w-[220px] h-[75px] space-y-3'> <p className='text-[14px] font-bold'>{t('rassitat5')}</p>
              <div className='flex'><img src="/index.svg" alt="" />
              <p>{t('rassitat6')}</p>
              </div>
              </div>
              <div className='border-b-2 border-[#222222] w-[220px] h-[75px] space-y-3'> <p className='text-[14px] font-bold'>{t('rassitat7')}</p>
              <div className='flex'><img src="/ves.svg" alt="" />
              <p>0,5</p>
              </div>
              </div>
              <div className='border-b-2 border-[#222222] w-[220px] h-[75px] space-y-3'> <p className='text-[14px] font-bold'>{t('rassitat8')}</p>
              <div className='flex'><img src="/usluga.svg" alt="" />
              <select name="" id=""><option value="">{t('rassitat9')}</option></select>
              </div>
              </div>
            </div>
            <button className='bg-[#00C97B] font-bold text-white h-16 w-[240px] mt-12 rounded-[36px] text-[17px]'>{t('rassitat10')}</button>
          </div>
  )
}

export default Rassitat