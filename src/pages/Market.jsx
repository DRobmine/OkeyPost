import React from 'react'
import Footer from '../components/Footer'
import Voprosi from '../components/Voprosi'
import Numbers from '../components/Numbers'
import logo from '../JS/logo'
import { useTranslation } from 'react-i18next'

function Market() {
  const {t} = useTranslation()
  return (
    <>
    <div>
    <div className='flex justify-center items-center'>
          <div className='w-[1450px] h-[210px] rounded-2xl bg-gradient-to-r from-[#5B52A3] to-[#40B8EA]'>
            <p className='text-[16px] font-light text-white ml-36 mt-8'>{t('market1')}</p>
            <h1 className='text-[48px] font-extrabold text-white ml-36 mt-6'>{t('market2')}</h1>
          </div>
      </div>


      <div className='flex justify-center items-center'>
        <div className='w-[1250px]'>
          <div className='grid grid-cols-5 gap-y-3 mt-24 '>
          <div className='w-[230px] h-[180px] rounded-2xl shadow grid justify-center items-center py-8'>
                  <img src='/logo/logo1.png' alt="" className='h-[30px] w-[160px]' />
                  <p className='font-bold'>Primark {t('market3')}</p>
                </div>
            {
              logo.map((d) => (
                <div key={d.id} className='w-[230px] h-[180px] rounded-2xl shadow grid justify-center items-center py-8'>
                  <img src={d.img} alt="" className='h-[40px] w-[150px]' />
                  <p className='font-bold'>{d.title}</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
    <Numbers/>
    <Voprosi/>
    <Footer/>
    </>
  )
}

export default Market