import React from 'react'
import blog from '../JS/blog'
import Footer from '../components/Footer'
import { useTranslation } from 'react-i18next'
import Voprosi from '../components/Voprosi'

function Blog() {
  const {t} = useTranslation()

  console.log(blog);
  
  return (
    <>
    <div>
      <div className='flex justify-center items-center'>
          <div className='w-[1450px] h-[210px] rounded-2xl bg-gradient-to-r from-[#5B52A3] to-[#40B8EA]'>
            <p className='text-[16px] font-light text-white ml-36 mt-8'>{t('blog1')}</p>
            <h1 className='text-[48px] font-extrabold text-white ml-36 mt-6'>{t('blog2')}</h1>
          </div>
      </div>


      <div className='flex justify-center items-center mt-24'>
        <div className='w-[1250px]'>
          <div className='grid grid-cols-3 gap-y-4'>
            <div className='shadow w-[400px] h-[430px] rounded-2xl'>
                  <img src='/img/image1.png' alt="" className='w-[400px] h-[260px] rounded-t-2xl' />
                  <p className='text-[22px] font-bold w-[375px] pl-5 pt-10'>{t('blog3')}</p>
                  <div className='flex justify-between px-5 pt-5'>
                    <p className='text-[13px] text-[#919191]'>22.10.2021</p>
                    <p className='text-[13px] text-[#919191] flex gap-2'><img src="clock.svg" alt="" />{t('blog15')}</p>
                  </div>
            </div>
            <div className='shadow w-[400px] h-[430px] rounded-2xl'>
                  <img src='/img/image2.png' alt="" className='w-[400px] h-[260px] rounded-t-2xl' />
                  <p className='text-[22px] font-bold w-[375px] pl-5 pt-10'>{t('blog4')}</p>
                  <div className='flex justify-between px-5 pt-5'>
                    <p className='text-[13px] text-[#919191]'>22.10.2021</p>
                    <p className='text-[13px] text-[#919191] flex gap-2'><img src="clock.svg" alt="" />{t('blog15')}</p>
                  </div>
            </div>
            <div className='shadow w-[400px] h-[430px] rounded-2xl'>
                  <img src='/img/image3.png' alt="" className='w-[400px] h-[260px] rounded-t-2xl' />
                  <p className='text-[22px] font-bold w-[375px] pl-5 pt-10'>{t('blog5')}</p>
                  <div className='flex justify-between px-5 pt-5'>
                    <p className='text-[13px] text-[#919191]'>22.10.2021</p>
                    <p className='text-[13px] text-[#919191] flex gap-2'><img src="clock.svg" alt="" />{t('blog15')}</p>
                  </div>
            </div>
            <div className='shadow w-[400px] h-[430px] rounded-2xl'>
                  <img src='/img/image4.png' alt="" className='w-[400px] h-[260px] rounded-t-2xl' />
                  <p className='text-[22px] font-bold w-[375px] pl-5 pt-10'>{t('blog6')}</p>
                  <div className='flex justify-between px-5 pt-5'>
                    <p className='text-[13px] text-[#919191]'>22.10.2021</p>
                    <p className='text-[13px] text-[#919191] flex gap-2'><img src="clock.svg" alt="" />{t('blog15')}</p>
                  </div>
            </div>
            <div className='shadow w-[400px] h-[430px] rounded-2xl'>
                  <img src='/img/image5.png' alt="" className='w-[400px] h-[260px] rounded-t-2xl' />
                  <p className='text-[22px] font-bold w-[375px] pl-5 pt-10'>{t('blog7')}</p>
                  <div className='flex justify-between px-5 pt-5'>
                    <p className='text-[13px] text-[#919191]'>22.10.2021</p>
                    <p className='text-[13px] text-[#919191] flex gap-2'><img src="clock.svg" alt="" />{t('blog15')}</p>
                  </div>
            </div>
            <div className='shadow w-[400px] h-[430px] rounded-2xl'>
                  <img src='/img/image6.png' alt="" className='w-[400px] h-[260px] rounded-t-2xl' />
                  <p className='text-[22px] font-bold w-[375px] pl-5 pt-10'>{t('blog8')}</p>
                  <div className='flex justify-between px-5 pt-5'>
                    <p className='text-[13px] text-[#919191]'>22.10.2021</p>
                    <p className='text-[13px] text-[#919191] flex gap-2'><img src="clock.svg" alt="" />{t('blog15')}</p>
                  </div>
            </div>
            <div className='shadow w-[400px] h-[430px] rounded-2xl'>
                  <img src='/img/image7.png' alt="" className='w-[400px] h-[260px] rounded-t-2xl' />
                  <p className='text-[22px] font-bold w-[375px] pl-5 pt-10'>{t('blog9')}</p>
                  <div className='flex justify-between px-5 pt-5'>
                    <p className='text-[13px] text-[#919191]'>22.10.2021</p>
                    <p className='text-[13px] text-[#919191] flex gap-2'><img src="clock.svg" alt="" />{t('blog15')}</p>
                  </div>
            </div>
            <div className='shadow w-[400px] h-[430px] rounded-2xl'>
                  <img src='/img/image8.png' alt="" className='w-[400px] h-[260px] rounded-t-2xl' />
                  <p className='text-[22px] font-bold w-[375px] pl-5 pt-10'>{t('blog10')}</p>
                  <div className='flex justify-between px-5 pt-5'>
                    <p className='text-[13px] text-[#919191]'>22.10.2021</p>
                    <p className='text-[13px] text-[#919191] flex gap-2'><img src="clock.svg" alt="" />{t('blog15')}</p>
                  </div>
            </div>
            <div className='shadow w-[400px] h-[430px] rounded-2xl'>
                  <img src='/img/image9.png' alt="" className='w-[400px] h-[260px] rounded-t-2xl' />
                  <p className='text-[22px] font-bold w-[375px] pl-5 pt-10'>{t('blog11')}</p>
                  <div className='flex justify-between px-5 pt-5'>
                    <p className='text-[13px] text-[#919191]'>22.10.2021</p>
                    <p className='text-[13px] text-[#919191] flex gap-2'><img src="clock.svg" alt="" />{t('blog15')}</p>
                  </div>
            </div>
            <div className='shadow w-[400px] h-[430px] rounded-2xl'>
                  <img src='/img/image10.png' alt="" className='w-[400px] h-[260px] rounded-t-2xl' />
                  <p className='text-[22px] font-bold w-[375px] pl-5 pt-10'>{t('blog12')}</p>
                  <div className='flex justify-between px-5 pt-5'>
                    <p className='text-[13px] text-[#919191]'>22.10.2021</p>
                    <p className='text-[13px] text-[#919191] flex gap-2'><img src="clock.svg" alt="" />{t('blog15')}</p>
                  </div>
            </div>
            <div className='shadow w-[400px] h-[430px] rounded-2xl'>
                  <img src='/img/image11.png' alt="" className='w-[400px] h-[260px] rounded-t-2xl' />
                  <p className='text-[22px] font-bold w-[375px] pl-5 pt-10'>{t('blog13')}</p>
                  <div className='flex justify-between px-5 pt-5'>
                    <p className='text-[13px] text-[#919191]'>22.10.2021</p>
                    <p className='text-[13px] text-[#919191] flex gap-2'><img src="clock.svg" alt="" />{t('blog15')}</p>
                  </div>
            </div>
            <div className='shadow w-[400px] h-[430px] rounded-2xl'>
                  <img src='/img/image12.png' alt="" className='w-[400px] h-[260px] rounded-t-2xl' />
                  <p className='text-[22px] font-bold w-[375px] pl-5 pt-10'>{t('blog14')}</p>
                  <div className='flex justify-between px-5 pt-5'>
                    <p className='text-[13px] text-[#919191]'>22.10.2021</p>
                    <p className='text-[13px] text-[#919191] flex gap-2'><img src="clock.svg" alt="" />{t('blog15')}</p>
                  </div>
            </div>
          </div>
        </div>
      </div>


    <div className='flex justify-center items-center gap-1 mt-12 mb-24'>
    <button className='flex justify-center items-center gap-1'>
        <div className='flex justify-center items-center pb-1 border-2 rounded-full border-[#C0C9D7] text-[#C0C9D7] w-[42px] h-[42px] text-[29px]'>←</div>
        <div className='flex justify-center items-center border-2 rounded-full border-[#FF5290] text-[#FF5290] w-[42px] h-[42px]'>1</div>
        <div className='flex justify-center items-center border-2 rounded-full border-[#C0C9D7] text-[#C0C9D7] w-[42px] h-[42px]'>2</div>
        <div className='flex justify-center items-center text-[#C0C9D7] text-[17px]'>...</div>
        <div className='flex justify-center items-center border-2 rounded-full border-[#C0C9D7] text-[#C0C9D7] w-[42px] h-[42px]'>23</div>
        <div className='flex justify-center items-center border-2 rounded-full border-[#C0C9D7] text-[#C0C9D7] w-[42px] h-[42px]'>24</div>
        <div className='flex justify-center items-center pb-1 border-2 rounded-full border-[#C0C9D7] text-[#C0C9D7] w-[42px] h-[42px] text-[29px]'>→</div>
    </button>
    </div>

      <Voprosi/>
      <Footer/>
    </div>
    </>
  )
}

export default Blog