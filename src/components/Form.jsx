import React from 'react'
import { useTranslation } from 'react-i18next'

function Form({setShowModal}) {
  const {t} = useTranslation()
  return (<>
    <div className="fixed w-full h-full bg-black top-0 left-0 bg-opacity-80">
            <div className='flex justify-center items-center pt-8 pl-[550px]'>
                <button onClick={() => setShowModal(false)}>
            <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.0801 13.0815C16.1913 16.1928 31.8184 31.8198 39.243 39.2444" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M39.2441 13.0815C36.1329 16.1928 20.5058 31.8198 13.0812 39.2444" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
                </button>
            </div>
        <div className='flex justify-center items-center'>
        <form className='w-[480px] h-[600px] rounded-2xl shadow bg-white'>
            <h1 className='text-[24px] font-bold w-[300px] pl-8 leading-[30px] mt-8'>{t('form1')}</h1>
            <p className='font-bold pl-8 mt-7'>{t('form2')}</p>
            <input type="text" placeholder='' className='w-[400px] h-[60px] border-[#C0C9D7] bg-[#FCFDFF] border-2 rounded-md mt-2 ml-8' />
            <p className='font-bold pl-8 pt-6'>{t('form3')}</p>
            <input type="text" placeholder='' className='w-[400px] h-[60px] border-[#C0C9D7] bg-[#FCFDFF] border-2 rounded-md mt-2 ml-8' />
            <p className='font-bold pl-8 pt-6'>{t('form4')}</p>
            <input type="text" placeholder='' className='w-[400px] h-[60px] border-[#C0C9D7] bg-[#FCFDFF] border-2 rounded-md mt-2 ml-8' />
            <p className='flex gap-2 text-[14px] pl-8 pt-7'><p className='text-[#00C97B]'>{t('form5')}</p>{t('form6')}<p className='text-[#00C97B]'>{t('form7')}</p></p>
            <div className='flex gap-14 mt-6 ml-8 items-center'>
            <button className='bg-[#00D981] text-white text-[15px] w-[200px] h-[60px] rounded-[36px]'>{t('form8')}</button>
            <button>
            <svg width="158" height="48" viewBox="0 0 158 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="55" width="48" height="48" rx="24" fill="#4267B2"/>
            <path d="M80.789 34.9999V24.5085H84.3269L84.8566 20.4198H80.789V17.8093C80.789 16.6256 81.1192 15.8188 82.8248 15.8188L85 15.8178V12.1609C84.6236 12.1113 83.3325 12 81.8304 12C78.6942 12 76.5471 13.9053 76.5471 17.4046V20.4199H73V24.5086H76.547V35L80.789 34.9999Z" fill="white"/>
            <rect x="110" width="48" height="48" rx="24" fill="#5181B8"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M145.426 18.0157C145.6 17.4303 145.426 17 144.599 17H141.864C141.169 17 140.848 17.3716 140.675 17.7816C140.675 17.7816 139.284 21.2065 137.313 23.4313C136.676 24.0753 136.386 24.2799 136.038 24.2799C135.864 24.2799 135.613 24.0753 135.613 23.4899V18.0157C135.613 17.313 135.411 17 134.831 17H130.533C130.099 17 129.838 17.3261 129.838 17.6351C129.838 18.3013 130.823 18.4548 130.924 20.3282V24.3974C130.924 25.2895 130.765 25.4513 130.417 25.4513C129.49 25.4513 127.235 22.0108 125.897 18.0743C125.635 17.3091 125.372 17 124.673 17H121.938C121.156 17 121 17.3716 121 17.7816C121 18.5134 121.927 22.1434 125.317 26.9442C127.578 30.2225 130.762 32 133.659 32C135.398 32 135.613 31.6053 135.613 30.9253V28.4474C135.613 27.6579 135.777 27.5004 136.328 27.5004C136.734 27.5004 137.429 27.7053 139.052 29.286C140.906 31.1592 141.212 32 142.255 32H144.99C145.771 32 146.162 31.6053 145.937 30.8262C145.69 30.0498 144.805 28.9236 143.63 27.5882C142.992 26.827 142.036 26.0073 141.747 25.5976C141.341 25.0706 141.457 24.8365 141.747 24.3684C141.747 24.3684 145.079 19.626 145.426 18.0159V18.0157Z" fill="white"/>
            <rect width="48" height="48" rx="24" fill="#EA4335"/>
            <path d="M12.0075 24.0153C11.7677 17.8285 17.2988 12.1111 23.6199 12.0369C26.8416 11.7677 29.9759 12.9934 32.414 14.9926C31.4139 16.07 30.3963 17.1349 29.3094 18.1319C27.163 16.8543 24.5787 15.8807 22.0702 16.7454C18.0242 17.8741 15.5739 22.5546 17.0712 26.4326C18.3111 30.4828 23.3393 32.7055 27.28 31.0041C29.3205 30.2883 30.6658 28.4437 31.2561 26.4616C28.9176 26.416 26.5785 26.4445 24.2399 26.3812C24.2341 25.018 24.2282 23.66 24.2341 22.2968C28.134 22.2911 32.0397 22.2797 35.9455 22.3139C36.1853 25.654 35.6823 29.2285 33.4661 31.9093C30.4313 35.7359 24.8244 36.859 20.2632 35.3578C15.4225 33.8 11.9022 29.0221 12.0075 24.0153Z" fill="white"/>
            </svg>
            </button>
            </div>
        </form>
        </div>
      </div>
    </>
  )
}

export default Form