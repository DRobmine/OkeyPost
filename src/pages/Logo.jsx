import React from 'react'
import Footer from '../components/Footer'
import Rassitat from '../components/Rassitat'
import Dostavka from '../components/Dostavka'
import { useTranslation } from 'react-i18next'

function Logo() {
  const {t} = useTranslation()
  return (
    <>
    <div>
        <div className='flex justify-center items-center'>
        <div className='bg-gradient-to-r from-[#5B52A3] to-[#40B8EA] w-[1450px] h-[680px] rounded-[36px] flex items-center justify-center'>
            <div className='flex justify-center w-[1300px] gap-10 items-center'>
                <div>
                    <h1 className='text-[62px] text-white w-[650px] font-extrabold leading-[80px]'>{t('logo1')}</h1>
                    <p className='text-[#FFFFFF] text-[20px] w-[650px] pt-10 leading-[45px] font-thin'>{t('logo2')}</p>
                    <button className='bg-[#00C97B] font-bold text-white h-16 w-[260px] mt-12 rounded-[36px] text-[17px]'>{t('logo3')}</button>
                </div>
            <img src="bighuman.svg" alt="" className='w-[600px] h-[650px]' />
            </div>
        </div>
        </div>





        <div className='flex justify-center items-center mt-[100px]'>
        <div className='w-[1250px] h-[893px]'>
          <div className='text-[44px] font-extrabold w-[500px]'>{t('logo4')}</div>
          <div className='w-[1250px] shadow h-[90px] rounded-2xl flex items-center mt-5'>
            <ul className='flex items-center justify-around w-[1250px]'>
              <img src="/rightstr.svg" alt="" />
              <li className='flex items-center justify-center gap-2 font-bold bg-[#F2F6FC] w-[179px] h-[90px]'><img src="/cartoon-kurtka.svg" alt="" />{t('logo5')}</li>
              <li className='flex items-center justify-center gap-2 font-bold'><img src="/tv.svg" alt="" />{t('logo6')}</li>
              <li className='flex items-center justify-center gap-2 font-bold'><img src="/sumka.svg" alt="" />{t('logo7')}</li>
              <li className='flex items-center justify-center gap-2 font-bold'><img src="/pudra.svg" alt="" />{t('logo8')}</li>
              <li className='flex items-center justify-center gap-2 font-bold'><img src="/kubog.svg" alt="" />{t('logo9')}</li>
              <li className='flex items-center justify-center gap-2 font-bold'><img src="/pudra2.svg" alt="" />{t('logo10')}</li>
              <img src="/leftstr.svg" alt="" />
            </ul>
          </div>
          <div className='flex justify-between mt-24'>
            <div>
              <p className='text-[26px] w-[400px] font-bold'>{t('logo11')}</p>
              <div className='w-[400px] bg-[#F2F6FC] h-[120px] rounded-2xl flex items-center gap-6 justify-start mt-12'>
                <img src="/russia.png" alt="" className='w-[75px] h-[54px] ml-10' />
                <div className=''>
                <p className='text-[18px]'>{t('logo12')}</p>
                <p className='text-[26px] font-bold'>7891,46₽</p>
                </div>
              </div>
                <div className='flex gap-6 mt-[168px]'>
                  <img src="/futbolka.svg" alt="" />
                  <img src="rightstr.svg" alt="" />
                </div>
              </div>
            <div className=''>
              <img src="/kurtka.svg" alt="" className='w-[400px] h-[400px] bg-[#F2F6FC] rounded-full'/>
              <p className='text-[18px] font-light flex justify-center mt-[40px]'>{t('logo13')}</p>
              <p className='flex text-[26px] font-bold justify-center'>{t('logo14')} <p className='text-[#01CD7D]'>$119.56</p></p>
            </div>
            <div>
              <p className='flex w-[335px] text-[26px] font-bold'>{t('logo15')} <p className='text-[#01CD7D] flex items-end'>£7.79</p></p>
              <div className='w-[400px] bg-[#F2F6FC] h-[120px] rounded-2xl flex items-center gap-6 justify-start mt-12'>
                <img src="/uk.png" alt="" className='w-[75px] h-[54px] ml-10' />
                <div className=''>
                <p className='text-[18px]'>{t('logo16')}</p>
                <p className='text-[26px] font-bold text-[#01CD7D]'>£80.62</p>
                </div>
              </div>
              <div className='flex gap-6 mt-[168px] justify-end'>
                  <img src="leftstr.svg" alt="" />
                  <img src="/shim.svg" alt="" />
                </div>
            </div>
          </div>
        </div>
        </div>


        <div className='flex justify-center items-center mt-24'>
        <div className='w-[1250px] shadow h-[180px] flex justify-evenly items-center rounded-2xl'>
          <div className='gap-3 border-r-[2px] w-[250px] text-[18px] font-bold flex items-center h-[130px]'><img src="/kankulyator.svg" alt="" />{t('logo17')}</div>
          <div className='gap-3 border-r-[2px] w-[250px] text-[18px] font-bold flex items-center h-[130px]'><img src="/document.svg" alt="" />{t('logo18')}</div>
          <div className='gap-3 border-r-[2px] w-[250px] text-[18px] font-bold flex items-center h-[130px]'><img src="/teleshka.svg" alt="" />{t('logo19')}</div>
          <div className='gap-3 w-[250px] text-[18px] font-bold flex items-center h-[130px]'><img src="/magazin.svg" alt="" />{t('logo20')}</div>
        </div>
        </div>



        <div className='flex justify-center items-center mt-36'>
        <div className='bg-gradient-to-r from-[#5B52A3] to-[#40B8EA] w-[1450px] h-[480px] rounded-[36px] flex items-center justify-center'>
            <div className='flex justify-center w-[1300px] gap-10 items-center'>
              <img src="woman.svg" alt="" className='w-[402px] h-[405px]' />
                <div>
                    <h1 className='text-[30px] text-white w-[800px] font-bold'>{t('logo21')}</h1>
                    <p className='text-[#FFFFFF] text-[18px] pt-10 font-normal'>{t('logo22')}</p>
                    <button className='bg-[#00C97B] font-bold text-white h-16 w-[240px] mt-12 rounded-[36px] text-[17px]'>{t('logo23')}</button>
                </div>
            </div>
        </div>
        </div>



        <div className='grid justify-center items-center mt-24'>
          <div className='w-[1250px]'>
          <h1 className='text-[44px] font-extrabold w-[1000px]'>OkeyPost {t('logo24')} </h1>
          <p className='text-[20px] font-light w-[700px] mt-6 text-[#1F2428]'>{t('logo25')}</p>
          </div>
          <Rassitat/>
        </div>

        <Dostavka/>


        <div className='flex justify-center items-center mt-24'>
          <div className='w-[1250px]'>
            <h1 className='text-[44px] font-extrabold w-[700px]'>{t('logo26')}</h1>
            <div className='flex justify-between'>
              <div><img src="/pokupka1.svg" alt="" />
              <p className='text-[20px] font-bold w-[200px]'>{t('logo27')}</p>
              <p className='font-light text-[#1F2428] pt-3 w-[290px]'>{t('logo28')}<span className='text-[#00C97B]'>{t('logo29')}</span> OkeyPost</p>
              </div>
              <div><img src="/pokupka2.svg" alt="" />
              <p className='text-[20px] font-bold w-[250px]'>{t('logo30')}</p>
              <p className='font-light text-[#1F2428] pt-3 w-[290px]'>{t('logo31')}</p>
              </div>
              <div><img src="/pokupka3.svg" alt="" />
              <p className='text-[20px] font-bold w-[180px]'>{t('logo32')}</p>
              <p className='font-light text-[#1F2428] pt-3 w-[250px]'>{t('logo33')}</p>
              </div>
              <div><img src="/pokupka4.svg" alt="" />
              <p className='text-[20px] font-bold w-[170px]'>{t('logo34')}</p>
              <p className='font-light text-[#1F2428] pt-3 w-[200px]'>{t('logo35')}</p>
              </div>
            </div>
            <p className='text-[20px] font-light text-[#1F2428] w-[700px] mt-10'>{t('logo36')}</p>
            <button className='bg-[#00C97B] font-bold text-white h-16 w-[240px] mt-12 rounded-[36px] text-[17px]'>{t('logo37')}</button>
          </div>
        </div>




        <div className='flex justify-center items-center mt-32'>
        <div className='bg-gradient-to-r from-[#5B52A3] to-[#40B8EA] w-[1450px] h-[480px] rounded-[36px] flex items-center justify-center'>
            <div className='flex justify-center w-[1300px] gap-10 items-center'>
              <img src="/virtual.svg" alt="" className='w-[402px] h-[405px]' />
                <div>
                    <h1 className='text-[44px] text-white w-[850px] font-extrabold'>{t('logo38')}</h1>
                    <p className='text-[#FFFFFF] text-[18px] pt-10 font-normal'>{t('logo39')}</p>
                    <button className='bg-[#00C97B] font-bold text-white h-16 w-[240px] mt-12 rounded-[36px] text-[17px]'>{t('logo23')}</button>
                </div>
            </div>
        </div>
        </div>



        <div className='flex justify-center items-center mt-32'>
          <div className='w-[1250px]'>
            <h1 className='text-[44px] font-extrabold w-[900px]'>{t('logo40')}</h1>
            <p className='text-[20px] text-[#1F2428] w-[550px] font-light mt-6'>{t('logo41')}</p>
            <div className='flex justify-between items-center'>
              <div className='rounded-2xl h-[250px] shadow w-[400px] pl-8 pt-8'>
                <img src="/vibor1.svg" alt="" />
                <h1 className='font-bold text-[18px] pt-8'>{t('logo42')}</h1>
                <p className='text-[#1F2428] pt-2'>{t('logo43')}</p>
              </div>
              <div className='rounded-2xl h-[250px] shadow w-[400px] pl-8 pt-8'>
                <img src="/vibor2.svg" alt="" />
                <h1 className='font-bold text-[18px] pt-8'>{t('logo44')}</h1>
                <p className='text-[#1F2428] pt-2'>{t('logo45')}</p>
              </div>
              <div className='rounded-2xl h-[250px] shadow w-[400px] pl-8 pt-8'>
                <img src="/vibor3.svg" alt="" />
                <h1 className='font-bold text-[18px] pt-8'>{t('logo46')}</h1>
                <p className='text-[#1F2428] pt-2'>{t('logo47')}</p>
              </div>
            </div>
          </div>
        </div>



        <div className='flex justify-center items-center mt-24'>
          <div className='w-[1250px]'>
            <h1 className='text-[36px] font-extrabold mb-6'>{t('logo48')}</h1>
            <div className='grid grid-cols-2 gap-6'>
              <div className='h-[260px] w-[620px] shadow rounded-2xl flex justify-between'>
                <img src="/photo1.png" className='h-[230px] w-[230px] ml-[10px] mt-[15px]' alt="" />
                <div className='mt-3'>
                  <h1 className='text-[18px] font-bold pt-2'>NIKOLAY S</h1>
                  <img src="/stars.svg" className='pt-2' alt="" />
                  <p className='font-light text-[#1F2428] mr-[65px] pt-2'>{t('logo49')}</p>
                  <div className='flex mt-20 items-center'>
                    <p className='text-[14px] font-bold w-12'>{t('logo50')}</p>
                    <p className='text-[#1F2428] font-light'><p className='flex'>16 {t('logo51')} 2021</p>{t('logo52')}</p>
                  </div>
                </div>
              </div>
              <div className='h-[260px] w-[620px] shadow rounded-2xl flex gap-5'>
                <img src="/photo2.png" className='h-[230px] w-[230px] ml-[10px] mt-[15px]' alt="" />
                <div className='mt-3'>
                  <h1 className='text-[18px] font-bold pt-2'>DMITRIY D</h1>
                  <img src="/stars.svg" className='pt-2' alt="" />
                  <p className='font-light text-[#1F2428] w-64 pt-2'>{t('logo53')}</p>
                  <div className='flex mt-14 items-center'>
                    <p className='text-[14px] font-bold w-12'>{t('logo50')}</p>
                    <p className='text-[#1F2428] font-light w-36'>16 {t('logo51')} 2021 {t('logo54')}</p>
                  </div>
                </div>
              </div>
              <div className='h-[260px] w-[620px] shadow rounded-2xl flex justify-between'>
                <img src="/photo3.png" className='h-[230px] w-[230px] ml-[10px] mt-[15px]' alt="" />
                <div className='mt-3'>
                  <h1 className='text-[18px] font-bold pt-2'>VLADIMIR E</h1>
                  <img src="/stars.svg" className=' pt-2' alt="" />
                  <p className='font-light text-[#1F2428] w-80 mr-10 pt-2'>{t('logo55')}</p>
                  <div className='flex mt-9 items-center'>
                    <p className='text-[14px] font-bold w-12'>{t('logo50')}</p>
                    <p className='text-[#1F2428] font-light'><p className='flex'>16 {t('logo51')} 2021</p>{t('logo52')}</p>
                  </div>
                </div>
              </div>
              <div className='h-[260px] w-[620px] shadow rounded-2xl flex justify-between'>
                <img src="/photo4.png" className='h-[230px] w-[230px] ml-[10px] mt-[15px]' alt="" />
                <div className='mt-3'>
                  <h1 className='text-[18px] font-bold pt-2'>Оксана</h1>
                  <img src="/stars.svg" className='pt-2' alt="" />
                  <p className='font-light text-[#1F2428] w-72 mr-[72px] pt-2'>{t('logo56')}</p>
                  <div className='flex mt-[60px] items-center'>
                    <p className='text-[14px] font-bold w-12'>{t('logo50')}</p>
                    <p className='text-[#1F2428] font-light w-36'>16 {t('logo51')} 2021 {t('logo57')}</p>
                  </div>
                </div>
              </div>
            </div>
            <button className='bg-[#00C97B] font-bold text-white h-[66px] w-[240px] mt-12 rounded-[36px] text-[17px]'>{t('logo58')}</button>
          </div>
        </div>


        <div className='flex justify-center items-center mt-36'>
          <div className='w-[1250px]'>
            <h1 className='font-extrabold text-[44px]'>{t('logo59')}</h1>
            <p className='font-light text-[18px] w-[1250px] mt-6'>{t('logo60')}</p>
            <p className='font-light text-[18px] w-[1250px] mt-6'>{t('logo61')}</p>
            <p className='font-light text-[18px] w-[1250px] mt-6'>{t('logo62')}</p>
            <p className='font-light text-[18px] w-[1250px] mt-6'>Okeypost.com – {t('logo63')}</p>
          </div>
        </div>


        <div className='flex justify-center items-center mt-56'>
        <div className='bg-gradient-to-r from-[#5B52A3] to-[#40B8EA] w-[1450px] h-[250px] rounded-[36px] flex items-center justify-center'>
            <div className='flex justify-evenly w-[1300px] gap-10 items-center'>
              <h1 className='text-[30px] font-bold text-white w-[500px]'>{t('logo64')}</h1>
              <div className='flex border-b w-[300px] h-20 items-center gap-3 text-white border-white'><img src="/gmail.svg" alt="" />{t('logo65')}</div>
              <button className='bg-[#00C97B] font-bold text-white h-16 w-[240px] mt-12 rounded-[36px] text-[17px]'>{t('logo66')}</button>
            </div>
        </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Logo