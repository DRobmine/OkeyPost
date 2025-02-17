import { Link } from "react-router-dom";
import {initReactI18next, useTranslation} from "react-i18next"
import i18n from 'i18next';
import { useState } from "react";
import uz from "../locale/uz";
import ru from "../locale/ru";
import en from "../locale/en";
import Form from "./Form";


  i18n.use(initReactI18next).init({
    resources: {
      ru: {translation: ru},
      uz: {translation: uz},
      en: {translation: en},
    },
    lng: 'en',
    fallbackLng: "en"
  })

  
  
  
  function Navbar() {


    const [showModal, setShowModal] =useState(false)
    
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }
  
  
  const {t} = useTranslation()

  return (
  <>
    <nav className="bg-white px-6 py-4 flex items-center justify-evenly">
      <div><Link to={'/logo'}><img src="/Logo.svg" alt="" /></Link></div>
      <div className="flex gap-6 items-center">
        <Link onClick={() => setShowModal(false)} to={'/pokupka'}>{t('navbar1')}</Link>
        <Link onClick={() => setShowModal(false)} to={'/rasprodaja'}>{t('navbar2')}</Link>
        <Link onClick={() => setShowModal(false)} to={'/cost'}>{t('navbar3')}</Link>
        <Link onClick={() => setShowModal(false)} to={'/help'}>{t('navbar4')}</Link>
        <Link onClick={() => setShowModal(false)} to={'/bonus'}>{t('navbar5')}</Link>
        <Link onClick={() => setShowModal(false)} to={'/blog'}>{t('navbar6')}</Link>
        <Link onClick={() => setShowModal(false)} to={'/market'}>{t('navbar7')}</Link>
      </div>
      <div className="flex gap-4 items-center">
      <button onClick={() => setShowModal(true)} className="flex items-center gap-2"><img src="/вход.svg" alt="" />{t('navbar8')}</button>
      <button className="w-48 h-10 rounded-[36px] bg-[#00C97B] text-white">{t('navbar9')}</button>
      <select onClick={(e) => changeLanguage(e.target.value)} name="" id="">
            <option value="eng">EN</option>
            <option value="ru">RU</option>
            <option value="uz">UZ</option>
          </select>
      </div>
    </nav>
    {
      showModal && <Form setShowModal={setShowModal}/>
    }
  </>
  );
}

export default Navbar