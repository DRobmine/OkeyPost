import React from 'react'
import Footer from '../components/Footer'
import Voprosi from '../components/Voprosi'
import { useTranslation } from 'react-i18next'

function Pokupka() {
  const {t} = useTranslation()
  return (
    <>
    <div>
      <div className='flex justify-center items-center'>
        <div className='w-[1450px] h-[380px] rounded-2xl bg-gradient-to-r from-[#5B52A3] to-[#40B8EA]'>
          <p className='text-[16px] font-light text-white ml-36 mt-12'>{t('pokupka1')}</p>
          <h1 className='text-[48px] font-extrabold text-white ml-36 mt-6 '>{t('pokupka2')}</h1>
          <h3 className='text-[34px] font-bold text-white ml-36 mt-4'>{t('pokupka3')}</h3>
          <button className='bg-[#00C97B] font-bold text-white ml-36 h-16 w-[240px] mt-8 rounded-[36px] text-[17px]'>{t('pokupka4')}</button>
        </div>
      </div>



        <div className='flex justify-center items-center mt-24'>
          <div className='w-[1250px]'>
            <h1 className='text-[44px] font-extrabold'>{t('pokupka5')}</h1>
            <p className='text-[20px] pt-6 font-light w-[850px] text-[#1F2428]'>{t('pokupka6')}</p>
            <div className='flex mt-16'>
              <img src="/pokupka5.svg" alt="" />
              <div className='ml-16'>
                <div className='flex items-center gap-10'><h1 className='text-[80px] font-normal text-[#01CD7D] border-r-2 w-44'>01</h1>
                <h1 className='text-[24px] font-bold w-[350px]'>{t('pokupka7')}</h1></div>
                <p className='text-[18px] font-light text-[#1F2428] w-[900px] mt-6'>Okeypost {t('pokupka8')}</p>
              </div>
            </div>
            <div className='flex mt-16'>
              <img src="/pokupka6.svg" alt="" />
              <div className='ml-16'>
                <div className='flex items-center gap-10'><h1 className='text-[80px] font-normal text-[#01CD7D] border-r-2 w-44'>02</h1>
                <h1 className='text-[24px] font-bold w-[350px]'>{t('pokupka9')}</h1></div>
                <p className='text-[18px] font-light text-[#1F2428] w-[950px] mt-6'>{t('pokupka10')} <span className='text-[#01CD7D]'>{t('pokupka11')}</span></p>
              </div>
            </div>
            <div className='flex mt-16'>
              <img src="/pokupka7.svg" alt="" />
              <div className='ml-16'>
                <div className='flex items-center gap-10'><h1 className='text-[80px] font-normal text-[#01CD7D] border-r-2 w-44'>03</h1>
                <h1 className='text-[24px] font-bold w-[350px]'>{t('pokupka12')}</h1></div>
                <p className='text-[18px] font-light text-[#1F2428] w-[850px] mt-6'>{t('pokupka13')}</p>
              </div>
            </div>
            <div className='flex mt-16'>
              <img src="/pokupka8.svg" alt="" />
              <div className='ml-16'>
                <div className='flex items-center gap-10'><h1 className='text-[80px] font-normal text-[#01CD7D] border-r-2 w-44'>04</h1>
                <h1 className='text-[24px] font-bold w-[350px]'>{t('pokupka14')}</h1></div>
                <p className='text-[18px] font-light text-[#1F2428] w-[950px] mt-6'>{t('pokupka15')}<br /> <br />
                {t('pokupka16')}</p>
              </div>
            </div>
            <div className='flex mt-16'>
              <img src="/pokupka9.svg" alt="" />
              <div className='ml-16'>
                <div className='flex items-center gap-10'><h1 className='text-[80px] font-normal text-[#01CD7D] border-r-2 w-44'>05</h1>
                <h1 className='text-[24px] font-bold w-[350px]'>{t('pokupka17')}</h1></div>
                <p className='text-[18px] font-light text-[#1F2428] w-[800px] mt-6'>{t('pokupka18')}</p>
              </div>
            </div>
            <button className='bg-[#00C97B] font-bold text-white h-16 w-[240px] mt-8 rounded-[36px] text-[17px] mb-36'>{t('pokupka4')}</button>
          </div>
        </div>
    </div>
    <Voprosi/>
    <Footer/>
    </>
  )
}

export default Pokupka