import React from 'react'
import { useTranslation } from 'react-i18next'

function Dostavka() {
    const {t} = useTranslation()
  return (
    <div className='flex justify-center items-center mt-24'>
          <div className='w-[1250px]'>
            <h1 className='font-extrabold text-[44px] mb-14'>{t('dostavka1')}</h1>
            <div className='w-[1250px] h-[104px] rounded-2xl flex shadow items-center mb-6'>
                <div className='w-[700px] pl-10 border-r border-[#C0C9D7] gap-6 text-[18px] h-[90px] font-bold flex items-center'><img src="/pochta.svg" alt="" className='w-[52px] h-[52px]' />{t('dostavka2')}</div>
                <div className='w-[170px] pl-5 border-r border-[#C0C9D7] pt-4 h-[90px]'>
                    <p className='text-[14px]'>{t('dostavka3')}</p>
                    <p className='text-[20px] font-bold'>10-14 {t('days')}</p>
                </div>
                <div className='w-[170px] pl-5 border-r border-[#C0C9D7] pt-4 h-[90px]'>
                    <p className='text-[14px]'>{t('dostavka4')}</p>
                    <p className='text-[20px] font-bold flex gap-2'>{t('rasprodaja47')} £27.00 <img src="/info.svg" alt="" /></p>
                </div>
                <div className='w-[170px] pl-5 border-r border-[#C0C9D7] pt-4 h-[90px]'>
                    <p className='text-[14px]'>Итого:</p>
                    <p className='text-[20px] font-bold flex gap-2'>£41.99<img src="/info.svg" alt="" /></p>
                </div>
                <div className=' flex justify-center items-center w-[40px]'><img src="/strelka.svg" alt="" /></div>
            </div>



            <div className='w-[1250px] h-[104px] rounded-2xl flex shadow items-center mb-6'>
                <div className='w-[700px] pl-10 border-r border-[#C0C9D7] gap-6 text-[18px] h-[90px] font-bold flex items-center'><img src="/ems.svg" alt="" className='w-[52px] h-[52px]' />{t('dostavka6')}</div>
                <div className='w-[170px] pl-5 border-r border-[#C0C9D7] pt-4 h-[90px]'>
                    <p className='text-[14px]'>{t('dostavka3')}</p>
                    <p className='text-[20px] font-bold'>9-12 {t('days')}</p>
                </div>
                <div className='w-[170px] pl-5 border-r border-[#C0C9D7] pt-4 h-[90px]'>
                    <p className='text-[14px]'>{t('dostavka4')}</p>
                    <p className='text-[20px] font-bold flex gap-2'>{t('rasprodaja47')} £40.00 <img src="/info.svg" alt="" /></p>
                </div>
                <div className='w-[170px] pl-5 border-r border-[#C0C9D7] pt-4 h-[90px]'>
                    <p className='text-[14px]'>{t('dostavka5')}</p>
                    <p className='text-[20px] font-bold flex gap-2'>£54.55<img src="/info.svg" alt="" /></p>
                </div>
                <div className=' flex justify-center items-center w-[40px]'><img src="/strelka.svg" alt="" /></div>
            </div>



            <div className='w-[1250px] h-[104px] rounded-2xl flex shadow items-center'>
                <div className='w-[700px] pl-10 border-r border-[#C0C9D7] gap-6 text-[18px] h-[90px] font-bold flex items-center'><img src="/paket.svg" alt="" className='w-[52px] h-[52px]' />{t('dostavka7')}</div>
                <div className='w-[170px] pl-5 border-r border-[#C0C9D7] pt-4 h-[90px]'>
                    <p className='text-[14px]'>{t('dostavka3')}</p>
                    <p className='text-[20px] font-bold'>10-14 {t('days')}</p>
                </div>
                <div className='w-[170px] pl-5 border-r border-[#C0C9D7] pt-4 h-[90px]'>
                    <p className='text-[14px]'>{t('dostavka4')}</p>
                    <p className='text-[20px] font-bold flex gap-2'>{t('rasprodaja47')} £13.00 <img src="/info.svg" alt="" /></p>
                </div>
                <div className='w-[170px] pl-5 border-r border-[#C0C9D7] pt-4 h-[90px]'>
                    <p className='text-[14px]'>Итого:</p>
                    <p className='text-[20px] font-bold flex gap-2'>£90.50<img src="/info.svg" alt="" /></p>
                </div>
                <div className=' flex justify-center items-center w-[40px]'><img src="/strelka.svg" alt="" /></div>
            </div>
          </div>
        </div>
  )
}

export default Dostavka