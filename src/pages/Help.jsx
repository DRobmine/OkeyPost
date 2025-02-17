import React from 'react'
import Voprosi from '../components/Voprosi'
import Footer from '../components/Footer'
import { useTranslation } from 'react-i18next'

function Help() {
  const {t} = useTranslation()
  return (
    <>
    <div>
      <div className='flex justify-center items-center'>
        <div className='w-[1450px] h-[210px] rounded-2xl bg-gradient-to-r from-[#5B52A3] to-[#40B8EA]'>
          <p className='text-[16px] font-light text-white ml-36 mt-8'>{t('help1')}</p>
          <h1 className='text-[48px] font-extrabold text-white ml-36 mt-6'>{t('help2')}</h1>
        </div>
      </div>


      <div className='flex justify-center items-center mt-24'>
        <div className='w-[1250px] h-[180px] shadow rounded-2xl flex items-center justify-center'>
          <div className='w-[1100px] border-b-2 border-[#222222] gap-y-5 grid'>
            <h1 className='text-[14px] font-bold'>{t('help3')}</h1>
            <div className='flex justify-between pb-5'>
            <p className='font-light text-[#222222]'>{t('help4')}</p>
            <img src="/search.svg" alt="" />
            </div>
          </div>
        </div>
      </div>


      <div className='flex justify-center items-center mt-24'>
        <div className='w-[1250px]'>
          <h1 className='text-[44px] font-extrabold'>{t('help5')}</h1>
          <div className='h-[90px] shadow flex justify-between items-center rounded-2xl px-5 mt-10'>
            <h1 className='text-[18px] font-bold'>{t('help6')}</h1>
            <img src="strelka.svg" alt="" className='w-[24px] h-[24px]' />
          </div>
          <div className='h-[90px] shadow flex justify-between items-center rounded-2xl px-5 mt-4'>
            <h1 className='text-[18px] font-bold'>{t('help7')}</h1>
            <img src="strelka.svg" alt="" className='w-[24px] h-[24px]' />
          </div>
          <div className='h-[90px] shadow flex justify-between items-center rounded-2xl px-5 mt-4'>
            <h1 className='text-[18px] font-bold'>{t('help8')}</h1>
            <img src="strelka.svg" alt="" className='w-[24px] h-[24px]' />
          </div>
          <div className='h-[90px] shadow flex justify-between items-center rounded-2xl px-5 mt-4'>
            <h1 className='text-[18px] font-bold'>{t('help9')}</h1>
            <img src="strelka.svg" alt="" className='w-[24px] h-[24px]' />
          </div>
          <div className='h-[90px] shadow flex justify-between items-center rounded-2xl px-5 mt-4'>
            <h1 className='text-[18px] font-bold'>{t('help10')}</h1>
            <img src="strelka.svg" alt="" className='w-[24px] h-[24px]' />
          </div>
          <div className='h-[90px] shadow flex justify-between items-center rounded-2xl px-5 mt-4'>
            <h1 className='text-[18px] font-bold'>{t('help11')}</h1>
            <img src="strelka.svg" alt="" className='w-[24px] h-[24px]' />
          </div>
          <div className='h-[90px] shadow flex justify-between items-center rounded-2xl px-5 mt-4'>
            <h1 className='text-[18px] font-bold'>{t('help12')}</h1>
            <img src="strelka.svg" alt="" className='w-[24px] h-[24px]' />
          </div>
        </div>
      </div>



      <div className='flex justify-center items-center mt-36'>
        <div className='w-[1250px]'>
          <h1 className='text-[44px] font-extrabold'>{t('help13')}</h1>
          <div className='h-[90px] shadow flex justify-between items-center rounded-2xl px-5 mt-10'>
            <h1 className='text-[18px] font-bold'>{t('help14')}</h1>
            <img src="strelka.svg" alt="" className='w-[24px] h-[24px]' />
          </div>
          <div className='h-[90px] shadow flex justify-between items-center rounded-2xl px-5 mt-4'>
            <h1 className='text-[18px] font-bold'>{t('help15')}</h1>
            <img src="strelka.svg" alt="" className='w-[24px] h-[24px]' />
          </div>
          <div className='h-[90px] shadow flex justify-between items-center rounded-2xl px-5 mt-4'>
            <h1 className='text-[18px] font-bold'>{t('help16')}</h1>
            <img src="strelka.svg" alt="" className='w-[24px] h-[24px]' />
          </div>
          <div className='h-[90px] shadow flex justify-between items-center rounded-2xl px-5 mt-4'>
            <h1 className='text-[18px] font-bold'>{t('help17')}</h1>
            <img src="strelka.svg" alt="" className='w-[24px] h-[24px]' />
          </div>
          <div className='h-[90px] shadow flex justify-between items-center rounded-2xl px-5 mt-4'>
            <h1 className='text-[18px] font-bold'>{t('help18')}</h1>
            <img src="strelka.svg" alt="" className='w-[24px] h-[24px]' />
          </div>
          <div className='h-[90px] shadow flex justify-between items-center rounded-2xl px-5 mt-4'>
            <h1 className='text-[18px] font-bold'>{t('help19')}</h1>
            <img src="strelka.svg" alt="" className='w-[24px] h-[24px]' />
          </div>
          <div className='h-[90px] shadow flex justify-between items-center rounded-2xl px-5 mt-4'>
            <h1 className='text-[18px] font-bold'>{t('help20')}</h1>
            <img src="strelka.svg" alt="" className='w-[24px] h-[24px]' />
          </div>
        </div>
      </div>




      <div className='flex justify-center items-center mt-36'>
        <div className='w-[1250px]'>
          <h1 className='text-[44px] font-extrabold'>{t('help21')}</h1>
          <div className='h-[90px] shadow flex justify-between items-center rounded-2xl px-5 mt-10'>
            <h1 className='text-[18px] font-bold'>{t('help22')}</h1>
            <img src="strelka.svg" alt="" className='w-[24px] h-[24px]' />
          </div>
          <div className='h-[90px] shadow flex justify-between items-center rounded-2xl px-5 mt-4'>
            <h1 className='text-[18px] font-bold'>{t('help23')}</h1>
            <img src="strelka.svg" alt="" className='w-[24px] h-[24px]' />
          </div>
          <div className='h-[90px] shadow flex justify-between items-center rounded-2xl px-5 mt-4'>
            <h1 className='text-[18px] font-bold'>{t('help24')}</h1>
            <img src="strelka.svg" alt="" className='w-[24px] h-[24px]' />
          </div>
          <div className='h-[90px] shadow flex justify-between items-center rounded-2xl px-5 mt-4'>
            <h1 className='text-[18px] font-bold'>{t('help25')}</h1>
            <img src="strelka.svg" alt="" className='w-[24px] h-[24px]' />
          </div>
          <div className='h-[90px] shadow flex justify-between items-center rounded-2xl px-5 mt-4'>
            <h1 className='text-[18px] font-bold'>{t('help26')}</h1>
            <img src="strelka.svg" alt="" className='w-[24px] h-[24px]' />
          </div>
          <div className='h-[90px] shadow flex justify-between items-center rounded-2xl px-5 mt-4'>
            <h1 className='text-[18px] font-bold'>{t('help27')}</h1>
            <img src="strelka.svg" alt="" className='w-[24px] h-[24px]' />
          </div>
          <div className='h-[90px] shadow flex justify-between items-center rounded-2xl px-5 mt-4'>
            <h1 className='text-[18px] font-bold'>{t('help28')}</h1>
            <img src="strelka.svg" alt="" className='w-[24px] h-[24px]' />
          </div>
        </div>
      </div>



      <div className='flex justify-center items-center mt-36'>
        <div className='w-[1250px]'>
          <h1 className='text-[44px] font-extrabold'>{t('help29')}</h1>
          <div className='h-[90px] shadow flex justify-between items-center rounded-2xl px-5 mt-10'>
            <h1 className='text-[18px] font-bold'>{t('help30')}</h1>
            <img src="strelka.svg" alt="" className='w-[24px] h-[24px]' />
          </div>
          <div className='h-[90px] shadow flex justify-between items-center rounded-2xl px-5 mt-4'>
            <h1 className='text-[18px] font-bold'>{t('help31')}</h1>
            <img src="strelka.svg" alt="" className='w-[24px] h-[24px]' />
          </div>
          <div className='h-[90px] shadow flex justify-between items-center rounded-2xl px-5 mt-4'>
            <h1 className='text-[18px] font-bold'>{t('help32')}</h1>
            <img src="strelka.svg" alt="" className='w-[24px] h-[24px]' />
          </div>
        </div>
      </div>



      <div className='flex justify-center items-center mt-36'>
        <div className='w-[1250px]'>
          <h1 className='text-[44px] font-extrabold'> {t('help33')}</h1>
          <div className='h-[90px] shadow flex justify-between items-center rounded-2xl px-5 mt-10'>
            <h1 className='text-[18px] font-bold'>{t('help34')}</h1>
            <img src="strelka.svg" alt="" className='w-[24px] h-[24px]' />
          </div>
          <div className='h-[90px] shadow flex justify-between items-center rounded-2xl px-5 mt-4'>
            <h1 className='text-[18px] font-bold'>{t('help35')}</h1>
            <img src="strelka.svg" alt="" className='w-[24px] h-[24px]' />
          </div>
          <div className='h-[90px] shadow flex justify-between items-center rounded-2xl px-5 mt-4'>
            <h1 className='text-[18px] font-bold'>{t('help36')}</h1>
            <img src="strelka.svg" alt="" className='w-[24px] h-[24px]' />
          </div>
          <div className='h-[90px] shadow flex justify-between items-center rounded-2xl px-5 mt-4'>
            <h1 className='text-[18px] font-bold'>{t('help37')}</h1>
            <img src="strelka.svg" alt="" className='w-[24px] h-[24px]' />
          </div>
          <div className='h-[90px] shadow flex justify-between items-center rounded-2xl px-5 mt-4'>
            <h1 className='text-[18px] font-bold'>{t('help38')}</h1>
            <img src="strelka.svg" alt="" className='w-[24px] h-[24px]' />
          </div>
          <div className='h-[90px] shadow flex justify-between items-center rounded-2xl px-5 mt-4'>
            <h1 className='text-[18px] font-bold'>{t('help39')}</h1>
            <img src="strelka.svg" alt="" className='w-[24px] h-[24px]' />
          </div>
          <div className='h-[90px] shadow flex justify-between items-center rounded-2xl px-5 mt-4'>
            <h1 className='text-[18px] font-bold'>{t('help40')}</h1>
            <img src="strelka.svg" alt="" className='w-[24px] h-[24px]' />
          </div>
        </div>
      </div>



      <div className='flex justify-center items-center mt-36'>
        <div className='w-[1250px]'>
          <h1 className='text-[44px] font-extrabold'>{t('help41')}</h1>
          <div className='h-[90px] shadow flex justify-between items-center rounded-2xl px-5 mt-10'>
            <h1 className='text-[18px] font-bold'>{t('help42')}</h1>
            <img src="strelka.svg" alt="" className='w-[24px] h-[24px]' />
          </div>
          <div className='h-[90px] shadow flex justify-between items-center rounded-2xl px-5 mt-4'>
            <h1 className='text-[18px] font-bold'>{t('help43')}</h1>
            <img src="strelka.svg" alt="" className='w-[24px] h-[24px]' />
          </div>
          <div className='h-[90px] shadow flex justify-between items-center rounded-2xl px-5 mt-4'>
            <h1 className='text-[18px] font-bold'>{t('help44')}</h1>
            <img src="strelka.svg" alt="" className='w-[24px] h-[24px]' />
          </div>
          <div className='h-[90px] shadow flex justify-between items-center rounded-2xl px-5 mt-4'>
            <h1 className='text-[18px] font-bold'>{t('help45')}</h1>
            <img src="strelka.svg" alt="" className='w-[24px] h-[24px]' />
          </div>
          <div className='h-[90px] shadow flex justify-between items-center rounded-2xl px-5 mt-4'>
            <h1 className='text-[18px] font-bold'>{t('help46')}</h1>
            <img src="strelka.svg" alt="" className='w-[24px] h-[24px]' />
          </div>
          <div className='h-[90px] shadow flex justify-between items-center rounded-2xl px-5 mt-4'>
            <h1 className='text-[18px] font-bold'>{t('help47')}</h1>
            <img src="strelka.svg" alt="" className='w-[24px] h-[24px]' />
          </div>
        </div>
      </div>
    </div>
    <div className='mt-36'>
    <Voprosi/>
    </div>
    <Footer/>
    </>
  )
}

export default Help