import React from 'react'
import { useTranslation } from 'react-i18next'

function Footer() {

    const {t} = useTranslation()

  return (
    <div className='flex justify-center items-center h-[400px] w-[98vw]'>
        <div>
        <div className='border-b-[#C0C9D7] w-[1400px] border-b-2 flex justify-evenly'>
            <div className='flex justify-evenly gap-24 pb-12'>
                <ul className='grid'>
                    <img src="/Logo.svg" alt="" className='w-40' />
                    <div className='flex gap-2 mt-[-84px]'>
                    <img src="/whatsap.svg" alt="" className='w-10 h-10' />
                    <img src="/whatsapp.svg" alt="" className='w-10 h-10' />
                    <img src="/massage.svg" alt="" className='w-10 h-10' />
                    </div>
                </ul>
                <ul className=''>
                    <h1 className='font-bold text-[17px]'>{t('footer1')}</h1>
                    <li className='font-light text-[#1F2428] pb-2'>{t('footer2')}</li>
                    <li className='font-light text-[#1F2428] pb-2'>{t('footer3')}</li>
                    <li className='font-light text-[#1F2428] pb-2'>{t('footer4')}</li>
                    <li className='font-light text-[#1F2428] pb-2'>{t('footer5')}</li>
                    <li className='font-light text-[#1F2428] pb-2'>{t('footer6')}</li>
                    <li className='font-light text-[#1F2428] pb-2'>{t('footer7')}</li>
                    <li className='font-light text-[#1F2428] pb-2'>{t('footer8')}</li>
                </ul>
                <ul className=''>
                    <h1 className='font-bold text-[17px]'>{t('footer9')}</h1>
                    <li className='font-light text-[#1F2428] pb-2'>{t('footer10')}</li>
                    <li className='font-light text-[#1F2428] pb-2'>{t('footer11')}</li>
                    <li className='font-light text-[#1F2428] pb-2'>{t('footer12')}</li>
                    <li className='font-light text-[#1F2428] pb-2'>{t('footer13')}</li>
                    <li className='font-light text-[#1F2428] pb-2'>{t('footer14')}</li>
                    <li className='font-light text-[#1F2428] pb-2'>{t('footer15')}</li>
                </ul>
                <ul className=''>
                    <h1 className='font-bold text-[17px]'>{t('footer16')}</h1>
                    <li className='font-light text-[#1F2428] pb-2'>{t('footer17')}</li>
                    <li className='font-light text-[#1F2428] pb-2'>{t('footer18')}</li>
                    <li className='font-light text-[#1F2428] pb-2'>{t('footer19')}</li>
                    <li className='font-light text-[#1F2428] pb-2'>{t('footer20')}</li>
                    <li className='font-light text-[#1F2428] pb-2'>{t('footer21')}</li>
                </ul>
            </div>
        </div>
        <div className='flex justify-center text-[#1F2428] text-[15px]'>© 2021 Okeypost . {t('footer22')}.</div>
        </div>
    </div>
  )
}

export default Footer