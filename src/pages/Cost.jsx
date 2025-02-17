import React from 'react'
import Footer from '../components/Footer'
import Voprosi from '../components/Voprosi'
import Rassitat from '../components/Rassitat'
import Dostavka from '../components/Dostavka'
import { useTranslation } from 'react-i18next'

function Cost() {

  const {t} = useTranslation()
  return (
    <>
    <div>
    <div className='flex justify-center items-center'>
        <div className='w-[1450px] h-[210px] rounded-2xl bg-gradient-to-r from-[#5B52A3] to-[#40B8EA]'>
          <p className='text-[16px] font-light text-white ml-36 mt-8'>{t('cost1')}</p>
          <h1 className='text-[48px] font-extrabold text-white ml-36 mt-6'>{t('cost2')}</h1>
        </div>
      </div>


      <div className='flex justify-center items-center mt-24'>
        <div className='w-[1250px] flex justify-between'>
          <div>
            <img src="/cost1.svg" alt="" className='w-[300px] h-[300px]' />
            <h1 className='text-[24px] font-bold w-[250px] mt-5'>{t('cost3')}</h1>
            <p className='text-[18px] font-light w-[250px] leading-[35px] mt-2'>{t('cost4')}</p>
            <button className='w-[180px] h-[56px] bg-[#41B7E9] rounded-lg text-white text-[15px] font-bold mt-8'>{t('cost5')}</button>
          </div>
          <div>
            <img src="/cost2.svg" alt="" className='w-[300px] h-[300px]' />
            <h1 className='text-[24px] font-bold w-[350px] mt-5'>{t('cost6')}</h1>
            <p className='text-[18px] font-light w-[300px] leading-[35px] mt-2'>{t('cost7')}</p>
            <button className='w-[180px] h-[56px] bg-[#41B7E9] rounded-lg text-white text-[15px] font-bold mt-8'>{t('raprodaja47')} £10.00</button>
          </div>
          <div>
            <img src="/cost3.svg" alt="" className='w-[300px] h-[300px]' />
            <h1 className='text-[24px] font-bold w-[250px] mt-5'>{t('cost8')}</h1>
            <p className='text-[18px] font-light w-[250px] leading-[35px] mt-2'>{t('cost9')}</p>
            <button className='w-[180px] h-[56px] bg-[#41B7E9] rounded-lg text-white text-[15px] font-bold mt-8'>{t('raprodaja47')} £0.25</button>
          </div>
          <div>
            <img src="/cost4.svg" alt="" className='w-[300px] h-[300px]' />
            <h1 className='text-[24px] font-bold w-[250px] mt-5'>{t('cost10')}</h1>
            <p className='text-[18px] font-light w-[250px] leading-[35px] mt-2'>{t('cost11')}</p>
            <button className='w-[180px] h-[56px] bg-[#41B7E9] rounded-lg text-white text-[15px] font-bold mt-8'>{t('cost5')}</button>
          </div>
        </div>
      </div>


      <div className='flex justify-self-center items-center mt-24'>
        <div className='w-[1250px]'>
          <h1 className='text-[44px] font-extrabold w-[700px]'>{t('cost12')}</h1>
          <p className='text-[20px] font-light w-[700px] mt-5'>{t('cost13')}</p>
          <Rassitat/>
        </div>
      </div>


      <Dostavka/>


      <div className='flex justify-center items-center mt-24'>
        <div className='w-[1250px]'>
          <h1 className='text-[44px] font-extrabold'>{t('cost14')}</h1>
          <div className='grid grid-cols-2 mt-5 gap-x-[50px]'>
            <div className='w-[600px] shadow rounded-2xl h-[80px] flex justify-between items-center mt-5'>
              <div className='text-[18px] font-bold pl-10'>{t('cost15')}</div>
              <div className='font-bold flex w-[150px] justify-center border-l-2 border-[#C0C9D7] h-[60px] items-center'>£1.00/1 {t('cost16')}</div>
            </div>
            <div className='w-[600px] shadow rounded-2xl h-[80px] flex justify-between items-center mt-5'>
              <div className='text-[18px] font-bold pl-10'>{t('cost17')}</div>
              <div className='font-bold flex w-[150px] justify-center border-l-2 border-[#C0C9D7] h-[60px] items-center'>£1.00</div>
            </div>
            <div className='w-[600px] shadow rounded-2xl h-[80px] flex justify-between items-center mt-5'>
              <div className='text-[18px] font-bold pl-10'>{t('cost18')}</div>
              <div className='font-bold flex w-[150px] justify-center border-l-2 border-[#C0C9D7] h-[60px] items-center'>£5.00</div>
            </div>
            <div className='w-[600px] shadow rounded-2xl h-[80px] flex justify-between items-center mt-5'>
              <div className='text-[18px] font-bold pl-10'>{t('cost19')}</div>
              <div className='font-bold flex w-[150px] justify-center border-l-2 border-[#C0C9D7] h-[60px] items-center'>£10.00</div>
            </div>
            <div className='w-[600px] shadow rounded-2xl h-[80px] flex justify-between items-center mt-5'>
              <div className='text-[18px] font-bold pl-10'>{t('cost17')}</div>
              <div className='font-bold flex w-[150px] justify-center border-l-2 border-[#C0C9D7] h-[60px] items-center'>£1.00</div>
            </div>
            <div className='w-[600px] shadow rounded-2xl h-[80px] flex justify-between items-center mt-5'>
              <div className='text-[18px] font-bold pl-10'>{t('cost20')}</div>
              <div className='font-bold flex w-[150px] justify-center border-l-2 border-[#C0C9D7] h-[60px] items-center'>£2.00</div>
            </div>
          </div>
          <div>
            <div className='shadow rounded-2xl h-[104px] flex justify-between items-center mt-5'>
              <div>
              <div className='text-[18px] font-bold pl-10'>{t('cost21')}</div>
              <div className='text-[14px] pl-10 pt-3'>{t('cost22')}</div>
              </div>
              <div className='font-bold flex w-[350px] justify-center border-l-2 border-[#C0C9D7] h-[80px] items-center'>£5.00</div>
            </div>
            <div className='shadow rounded-2xl h-[104px] flex justify-between items-center mt-5'>
              <div>
              <div className='text-[18px] font-bold pl-10'>{t('cost23')}</div>
              <div className='text-[14px] pl-10 pt-3'>{t('cost25')}</div>
              </div>
              <div className='font-bold flex w-[350px] justify-center border-l-2 border-[#C0C9D7] h-[80px] items-center'>£1.00 {t('cost26')}</div>
            </div>
            <div className='shadow rounded-2xl h-[104px] flex justify-between items-center mt-5'>
              <div>
              <div className='text-[18px] font-bold pl-10'>{t('cost23')}</div>
              <div className='text-[14px] pl-10 pt-3'>{t('cost27')}</div>
              </div>
              <div className='font-bold flex w-[350px] justify-center border-l-2 border-[#C0C9D7] h-[80px] items-center'>£10 + {t('cost28')}</div>
            </div>
            <div className='shadow rounded-2xl h-[104px] flex justify-between items-center mt-5'>
              <div>
              <div className='text-[18px] font-bold pl-10'>{t('cost29')}</div>
              <div className='text-[14px] pl-10 pt-3'>{t('cost30')}</div>
              </div>
              <div className='font-bold flex w-[350px] justify-center border-l-2 border-[#C0C9D7] h-[80px] items-center'>£10</div>
            </div>
            <div className='shadow rounded-2xl h-[104px] flex justify-between items-center mt-5'>
              <div>
              <div className='text-[18px] font-bold pl-10'>{t('cost31')}</div>
              <div className='text-[14px] pl-10 pt-3'>{t('cost32')}</div>
              </div>
              <div className='font-bold flex w-[350px] justify-center border-l-2 border-[#C0C9D7] h-[80px] items-center'>{t('cost5')}</div>
            </div>
            <div className='shadow rounded-2xl h-[104px] flex justify-between items-center mt-5'>
              <div>
              <div className='text-[18px] font-bold pl-10'>{t('cost18')}</div>
              <div className='text-[14px] pl-10 pt-3'>{t('cost32')}</div>
              </div>
              <div className='font-bold flex w-[350px] justify-center border-l-2 border-[#C0C9D7] h-[80px] items-center'>{t('cost34')}</div>
            </div>
          </div>
        </div>
      </div>



      <div className='flex justify-center items-center mt-56'>
        <div className='w-[1250px]'>
          <h1 className='text-[44px] font-extrabold'>{t('cost35')}</h1>
          <div className='shadow rounded-2xl h-[132px] flex justify-between items-center mt-5'>
              <div>
              <div className='text-[18px] font-bold pl-10'>{t('cost36')}</div>
              <div className='text-[14px] w-[800px] pl-10 pt-3'>{t('cost37')}</div>
              </div>
              <div className='font-bold flex w-[350px] justify-center border-l-2 border-[#C0C9D7] h-[105px] items-center'>{t('cost38')} <br />{t('cost39')}<br /> {t('cost40')}</div>
            </div>
          <div className='shadow rounded-2xl h-[104px] flex justify-between items-center mt-5'>
              <div>
              <div className='text-[18px] font-bold pl-10'>{t('cost41')}</div>
              <div className='text-[14px] pl-10 pt-3'>{t('cost42')}</div>
              </div>
              <div className='font-bold flex w-[350px] justify-center border-l-2 border-[#C0C9D7] h-[80px] items-center'>£2</div>
            </div>
        </div>
      </div>


      <div className='flex justify-center items-center mt-36'>
        <div className='bg-gradient-to-r from-[#5B52A3] to-[#40B8EA] w-[1450px] h-[530px] rounded-[36px] flex items-center justify-center'>
            <div className='flex justify-center w-[1300px] gap-10 items-center'>
              <img src="man.svg" alt="" className='w-[402px] h-[405px]' />
                <div>
                    <h1 className='text-[30px] text-white w-[850px] font-bold'>{t('cost43')}</h1>
                    <p className='text-[#FFFFFF] text-[18px] pt-10 font-light flex gap-2 border-b-2 w-[600px] pb-5'><img src="info2.svg" alt="" />{t('cost44')}</p>
                <div className='flex items-center mt-12 gap-14'>
                    <button className='bg-[#00C97B] font-bold text-white h-16 w-[240px] rounded-[36px] text-[17px]'>{t('cost45')}</button>
                    <p className='text-[14px] text-white w-[500px]'>{t('cost46')}</p>
                </div>
                </div>
            </div>
        </div>
        </div>


        <div className='flex justify-center items-center mt-36'>
          <div className='w-[1250px]'>
            <h1 className='text-[44px] font-extrabold'>{t('cost47')}</h1>
            <div className='mt-8'>
            <div className='shadow rounded-2xl h-[84px] flex justify-between items-center mt-5'>
              <div>
              <div className='text-[18px] font-bold pl-10'>{t('cost48')}</div>
              </div>
              <div className='font-bold flex w-[625px] justify-center border-l-2 border-[#C0C9D7] h-[65px] items-center'>{t('cost49')}</div>
            </div>
            <div className='shadow rounded-2xl h-[84px] flex justify-between items-center mt-5'>
              <div>
              <div className='text-[18px] font-bold pl-10'>{t('cost50')}</div>
              </div>
              <div className='font-bold flex w-[625px] justify-center border-l-2 border-[#C0C9D7] h-[65px] items-center'>{t('cost51')}</div>
            </div>
            <div className='shadow rounded-2xl h-[84px] flex justify-between items-center mt-5'>
              <div>
              <div className='text-[18px] font-bold pl-10'>{t('cost52')}</div>
              </div>
              <div className='font-bold flex w-[625px] justify-center border-l-2 border-[#C0C9D7] h-[65px] items-center'>{t('cost53')}</div>
            </div>
            </div>
          </div>
        </div>



        <div className='flex justify-center items-center mt-36 mb-28'>
          <div className='w-[1250px]'>
            <h1 className='text-[44px] font-extrabold'>{t('cost18')}</h1>
            <div className='grid grid-cols-2 mt-5 gap-x-[50px]'>
            <div className='w-[600px] shadow rounded-2xl h-[104px] flex justify-between items-center mt-5'>
              <div className=''>
              <div className='text-[18px] font-bold pl-10'>{t('cost55')} </div>
              <div className='text-[14px] pl-10 txet-[#222222]'>{t('cost62')}</div>
              </div>
              <div className='font-bold flex w-[150px] justify-center border-l-2 border-[#C0C9D7] h-[80px] items-center'>£3.99</div>
            </div>
            <div className='w-[600px] shadow rounded-2xl h-[104px] flex justify-between items-center mt-5'>
              <div className=''>
              <div className='text-[18px] font-bold pl-10'>{t('cost57')}</div>
              <div className='text-[14px] pl-10 txet-[#222222]'>{t('cost58')}</div>
              </div>
              <div className='font-bold flex w-[150px] justify-center border-l-2 border-[#C0C9D7] h-[80px] items-center'>£1.99</div>
            </div>
            <div className='w-[600px] shadow rounded-2xl h-[104px] flex justify-between items-center mt-5'>
              <div className=''>
              <div className='text-[18px] font-bold pl-10'>{t('cost59')}</div>
              <div className='text-[14px] pl-10 txet-[#222222]'>{t('cost58')}</div>
              </div>
              <div className='font-bold flex w-[150px] justify-center border-l-2 border-[#C0C9D7] h-[80px] items-center'>£4.99</div>
            </div>
            <div className='w-[600px] shadow rounded-2xl h-[104px] flex justify-between items-center mt-5'>
              <div className=''>
              <div className='text-[18px] font-bold pl-10'>{t('cost61')}</div>
              <div className='text-[14px] pl-10 txet-[#222222]'>{t('cost62')}</div>
              </div>
              <div className='font-bold flex w-[150px] justify-center border-l-2 border-[#C0C9D7] h-[80px] items-center'>£0.25</div>
            </div>
            <div className='w-[600px] shadow rounded-2xl h-[104px] flex justify-between items-center mt-5'>
              <div className=''>
              <div className='text-[18px] font-bold pl-10'>{t('cost63')}</div>
              <div className='text-[14px] pl-10 txet-[#222222]'>{t('cost62')}</div>
              </div>
              <div className='font-bold flex w-[150px] justify-center border-l-2 border-[#C0C9D7] h-[80px] items-center'>£0.25</div>
            </div>
          </div>
          </div>
        </div>
    </div>
    <Voprosi/>
    <Footer/>
    </>
  )
}

export default Cost