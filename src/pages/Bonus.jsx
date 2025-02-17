import React from 'react'
import Footer from '../components/Footer'
import { useTranslation } from 'react-i18next'

function Bonus() {
  const {t} = useTranslation()
  return (
    <>
    <div>
      <div className='flex justify-center items-center'>
          <div className='w-[1450px] h-[380px] rounded-2xl bg-gradient-to-r from-[#5B52A3] to-[#40B8EA]'>
            <p className='text-[16px] font-light text-white ml-36 mt-12'>{t('bonus1')}</p>
            <h1 className='text-[48px] font-extrabold text-white ml-36 mt-6 '>{t('bonus2')}</h1>
            <h3 className='text-[30px] font-bold text-white ml-36 mt-4'>{t('bonus3')}</h3>
            <button className='bg-[#00C97B] font-bold text-white ml-36 h-16 w-[240px] mt-8 rounded-[36px] text-[17px]'>{t('bonus4')}</button>
          </div>
        </div>


        <div className='flex justify-self-center items-center mt-24'>
          <div className='w-[1250px]'>
            <h1 className='text-[44px] font-extrabold'>{t('bonus5')}</h1>
            <div className='grid grid-cols-2 mt-12 gap-y-6'>
              <div className='w-[600px] h-[280px] rounded-2xl shadow pl-10'>
                <img src="bonus1.svg" alt="" className='pt-6' />
                <h1 className='text-[18px] font-bold pt-6'>{t('bonus6')}</h1>
                <p className='font-light pt-3 w-[400px]'>{t('bonus7')}</p>
              </div>
              <div className='w-[600px] h-[280px] rounded-2xl shadow pl-10'>
                <img src="bonus2.svg" alt="" className='pt-6' />
                <h1 className='text-[18px] font-bold pt-6'>{t('bonus8')} </h1>
                <p className='font-light pt-3 w-[480px]'>{t('bonus9')}</p>
              </div>
              <div className='w-[600px] h-[280px] rounded-2xl shadow pl-10'>
                <img src="bonus3.svg" alt="" className='pt-6' />
                <h1 className='text-[18px] font-bold pt-6'>{t('bonus10')}</h1>
                <p className='font-light pt-3 w-[500px]'>{t('bonus11')}</p>
              </div>
              <div className='w-[600px] h-[280px] rounded-2xl shadow pl-10'>
                <img src="bonus4.svg" alt="" className='pt-6' />
                <h1 className='text-[18px] font-bold pt-6'>{t('bonus12')}</h1>
                <p className='font-light pt-3 w-[500px]'>{t('bonus13')}</p>
              </div>
              <div className='w-[600px] h-[280px] rounded-2xl shadow pl-10'>
                <img src="bonus5.svg" alt="" className='pt-6' />
                <h1 className='text-[18px] font-bold pt-6'>{t('bonus14')}</h1>
                <p className='font-light pt-3 w-[550px]'>{t('bonus15')} </p>
              </div>
            </div>
          </div>
        </div>


        <div className='flex justify-center items-center mt-36'>
        <div className='bg-gradient-to-r from-[#5B52A3] to-[#40B8EA] w-[1450px] h-[480px] rounded-[36px] flex items-center justify-center'>
            <div className='flex justify-center w-[1300px] gap-10 items-center'>
              <img src="bonus6.svg" alt="" className='w-[402px] h-[405px]' />
                <div>
                    <h1 className='text-[40px] text-white w-[700px] font-bold'>{t('bonus16')}</h1>
                    <p className='text-[#FFFFFF] text-[18px] pt-10 font-normal'>{t('bonus17')}</p>
                    <button className='bg-[#00C97B] font-bold text-white h-16 w-[240px] mt-12 rounded-[36px] text-[17px]'>{t('bonus18')}</button>
                </div>
            </div>
        </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Bonus