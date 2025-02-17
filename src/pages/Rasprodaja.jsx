import React from 'react'
import Footer from '../components/Footer'
import Voprosi from '../components/Voprosi'
import Numbers from '../components/Numbers'
import { useTranslation } from 'react-i18next'

function Rasprodaja() {
  const {t} = useTranslation()
  return (
    <>
    <div>
      <div className='flex justify-center items-center'>
        <div className='w-[1450px] h-[380px] rounded-2xl bg-gradient-to-r from-[#5B52A3] to-[#40B8EA]'>
          <p className='text-[16px] font-light text-white ml-36 mt-12'>{t('rasprodaja1')}</p>
          <h1 className='text-[48px] font-extrabold text-white ml-36 mt-6 '>{t('rasprodaja2')}</h1>
          <h3 className='text-[30px] font-bold text-white ml-36 mt-4'>{t('rasprodaja3')}</h3>
          <button className='bg-[#00C97B] font-bold text-white ml-36 h-16 w-[240px] mt-8 rounded-[36px] text-[17px]'>{t('pokupka4')}</button>
        </div>
      </div>

      <div className='flex justify-center items-center mt-24'>
        <div className='w-[1250px]'>
          <h1 className='text-[44px] font-extrabold w-[700px]'>{t('rasprodaja4')}</h1>
          <div className='grid grid-cols-2 gap-y-8 mt-12'>
            <div className='flex gap-10'>
              <img src="/photo5.png" alt="" className='rounded-2xl w-[300px] h-[300px]' />
              <div>
                <h1 className='text-[24px] font-bold mt-5'>{t('rasprodaja5')}</h1>
                <p className='text-[18px] w-[300px] font-light mt-5'><p className='flex gap-2'>{t('rasprodaja6')}<p className='font-bold'>£7.99 (3365₽)</p>{t('rasprodaja7')}</p> <p className='flex gap-2'>{t('rasprodaja8')}<p className='text-[#01CD7D] font-bold'>{t('rasprodaja9')}</p></p> <p className='flex gap-2'>{t('rasprodaja10')}<p className='text-[#01CD7D] font-bold'>{t('rasprodaja9')}</p></p></p>
                <p className='text-[18px] w-[300px] font-light mt-5'>{t('rasprodaja11')}<p className='flex gap-2'>{t('rasprodaja55')}<p className='text-[#01CD7D] text-[18px] font-bold'>{t('rasprodaja12')}</p></p></p>
                <p className='text-[#01CD7D] text-[18px] font-bold mt-5'>{t('rasprodaja13')}</p>
              </div>
            </div>
            <div className='flex gap-10'>
              <img src="/photo6.png" alt="" className='rounded-2xl w-[300px] h-[300px]' />
              <div>
                <h1 className='text-[24px] font-bold mt-5'>{t('rasprodaja14')}</h1>
                <p className='mt-5'>
                  <p className='text-[18px] font-bold'>{t('rasprodaja15')}</p>
                  <p className='text-[18px] font-light flex gap-2 '>{t('rasprodaja16')}<p className='text-[#01CD7D] font-bold'>{t('rasprodaja17')}</p></p>
                  <p className='text-[#01CD7D] font-bold text-[18px]'> {t('rasprodaja14')}!</p>
                </p>
                <p className='mt-5'>
                  <p className='text-[18px] font-light flex gap-2'>{t('rasprodaja19')} <p className='font-bold'>£7.99 (3365₽)</p></p>
                  <p className='text-[18px] font-light flex gap-2'>{t('rasprodaja20')}<p className='font-bold'>£7.99 (3365₽)</p></p>
                </p>
                <p className='text-[#01CD7D] text-[18px] font-bold mt-5'>{t('rasprodaja13')}</p>
              </div>
            </div>
            <div className='flex gap-10'>
              <img src="/photo7.png" alt="" className='rounded-2xl w-[300px] h-[300px]' />
              <div>
                <h1 className='text-[24px] font-bold mt-5'>{t('rasprodaja21')}</h1>
                <p className='mt-5'>
                  <p className='flex text-[18px] font-light gap-2'><p className='text-[#01CD7D] font-bold'>{t('rasprodaja22')}</p>{t('rasprodaja23')}<p className='font-bold'>£7.99 (3365₽)</p></p>
                  <p className='flex text-[18px] font-light gap-2'><p className='text-[#01CD7D] font-bold'>{t('rasprodaja24')}</p>{t('rasprodaja23')}<p className='font-bold'>£7.99 (3365₽)</p></p>
                  <p className='flex text-[18px] font-light gap-2'><p className='text-[#01CD7D] font-bold'>{t('rasprodaja25')}</p>{t('rasprodaja23')}<p className='font-bold'>£7.99 (3365₽)</p></p>
                </p>
                <p className='text-[18px] font-light flex gap-2 mt-5'>{t('rasprodaja26')} <p className='font-bold'>40%</p>{t('rasprodaja27')}</p>
                <p className='text-[#01CD7D] text-[18px] font-bold mt-10'>{t('rasprodaja13')}</p>
              </div>
            </div>
            <div className='flex gap-10'>
              <img src="/photo8.png" alt="" className='rounded-2xl w-[300px] h-[300px]' />
              <div>
                <h1 className='text-[24px] font-bold mt-5'>{t('rasprodaja28')}</h1>
                <p className='text-[18px] w-[300px] font-light mt-5'><p className='flex gap-2'>{t('rasprodaja6')}<p className='font-bold'>£7.99 (3365₽)</p>{t('rasprodaja7')}</p> <p className='flex gap-2'>{t('rasprodaja8')}<p className='text-[#01CD7D] font-bold'>{t('rasprodaja9')}</p></p> <p className='flex gap-2'>{t('rasprodaja10')}<p className='text-[#01CD7D] font-bold'>{t('rasprodaja9')}</p></p></p>
                <p></p>
                <p className='text-[#01CD7D] text-[18px] font-bold mt-20'>{t('rasprodaja13')}</p>
              </div>
            </div>
            <div className='flex gap-10'>
              <img src="/photo9.png" alt="" className='rounded-2xl w-[300px] h-[300px]' />
              <div>
                <h1 className='text-[24px] font-bold mt-5'>{t('rasprodaja29')}</h1>
                <p className='text-[18px] font-bold mt-5'>{t('rasprodaja30')} <br /> {t('rasprodaja31')}</p>
                <p className=''><p className='text-[18xp] font-bold mt-5'>{t('rasprodaja32')}</p><p className='text-[18xp] font-light flex gap-2'><p className='font-bold'>- 60%</p>{t('rasprodaja33')}</p></p>
                <p className='text-[18px] font-bold text-[#01CD7D] mt-14'>{t('rasprodaja34')}</p>
              </div>
            </div>
            <div className='flex gap-10'>
              <img src="/photo10.png" alt="" className='rounded-2xl w-[300px] h-[300px]' />
              <div>
                <h1 className='text-[24px] font-bold mt-5'>{t('rasprodaja35')}</h1>
                <p className='mt-5'>
                  <p className='text-[18px] font-bold'>{t('rasprodaja36')}</p>
                  <p className='text-[18px] font-light'> {t('rasprodaja37')} <p className='flex gap-2'>{t('rasprodaja18')}<p className='font-bold'>60% OFF</p></p></p>
                </p>
                <p className='text-[18px] font-light mt-5'>Shop Pajar, Sorel, UGG, Calvin Klein <br />Jeans, Tommy Hilfiger</p>
                <p className='text-[#01CD7D] text-[18px] font-bold mt-5'>{t('rasprodaja13')}</p>
              </div>
            </div>
            <div className='flex gap-10'>
              <img src="/photo11.png" alt="" className='rounded-2xl w-[300px] h-[300px]' />
              <div>
                <h1 className='text-[24px] font-bold mt-5'>{t('rasprodaja38')}</h1>
                <p className='mt-5'>
                  <p className='text-[18px] font-bold'>{t('rasprodaja39')} <br />{t('rasprodaja40')}</p>
                  <p className='text-[18px] font-light flex gap-2'>{t('rasprodaja41')} <p className='font-bold'>£7.99 (3365₽)</p></p>
                </p>
                <p className='text-[18px] font-light flex gap-2 mt-5'>{t('rasprodaja42')}<p className='font-bold'>£7.99 (3365₽)</p>{t('rasprodaja43')}</p>
                <p className='flex gap-2 text-[18px] font-light'><p className='font-bold'>{t('rasprodaja44')}</p> {t('rasprodaja45')}</p>
                <p className='text-[18px] font-bold text-[#01CD7D] mt-5'>{t('rasprodaja34')}</p>
              </div>
            </div>
            <div className='flex gap-10'>
              <img src="/photo12.png" alt="" className='rounded-2xl w-[300px] h-[300px]' />
              <div>
                <h1 className='text-[24px] font-bold mt-5'>levi.com</h1>
                <p className='flex text-[18px] font-light gap-2 mt-5'><p className='text-[#01CD7D] font-bold'>{t('rasprodaja46')}</p>{t('rasprodaja47')}<p className='font-bold'>£7.99 (3365₽)</p></p>
                <p className='text-[18px] font-bold mt-5'>{t('rasprodaja48')}<br />{t('rasprodaja49')}</p>
                <p className='text-[18px] font-bold text-[#01CD7D] mt-16'>{t('rasprodaja34')}</p>
              </div>
            </div>
            <div className='flex gap-10'>
              <img src="/photo13.png" alt="" className='rounded-2xl w-[300px] h-[300px]' />
              <div>
                <h1 className='text-[24px] font-bold mt-5'>UGG® - {t('rasprodaja50')}</h1>
                <p className='mt-5'>
                  <p className='flex gap-2 text-[18px] font-light'>{t('rasprodaja51')} <p className='font-bold'>£7.99 (3365₽)</p></p>
                  <p  className='flex gap-2 text-[18px] font-light'>{t('rasprodaja52')} <p className='font-bold'>£7.99 (3365₽)</p></p>
                  <p className='flex gap-2 text-[18px] font-light'>{t('rasprodaja53')}<p className='text-[#01CD7D] font-bold'>{t('rasprodaja54')}</p></p>
                </p>
                <p className='mt-5'>
                <p className='flex text-[18px] font-light gap-2'><p className='text-[#01CD7D] font-bold'>{t('rasprodaja56')}</p>{t('rasprodaja23')}<p className='font-bold'>£7.99 (3365₽)</p></p>
                <p className='flex text-[18px] font-light gap-2'><p className='text-[#01CD7D] font-bold'>{t('rasprodaja57')}</p>{t('rasprodaja23')}<p className='font-bold'>£7.99 (3365₽)</p></p>
                </p>
                <p className='text-[#01CD7D] text-[18px] font-bold mt-5'>{t('rasprodaja13')}</p>
              </div>
            </div>
            <div className='flex gap-10'>
              <img src="/photo14.png" alt="" className='rounded-2xl w-[300px] h-[300px]' />
              <div>
                <h1 className='text-[24px] font-bold mt-5'>New Balance</h1>
                <p className='mt-5'>
                <p className='text-[18px] font-bold'>{t('rasprodaja58')}</p>
                <p className='text-[18px] font-light flex gap-2 mt-3'>- <p className='font-bold'>30%</p> {t('rasprodaja59')}</p>
                <p className='flex gap-2 text-[18px] font-light'><p className='font-bold'>{t('rasprodaja60')}</p> {t('rasprodaja61')} <p className='font-bold'>$50+</p></p>
                </p>
                <p className='text-[#01CD7D] text-[18px] font-bold mt-20'>{t('rasprodaja13')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Numbers/>

    </div>
    <Voprosi/>
    <Footer/>
    </>
  )
}

export default Rasprodaja