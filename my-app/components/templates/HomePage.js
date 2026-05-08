import React from 'react'
import Layout from '../layout/Layout'
import styles from "./HomePage.module.css"
import HeroSection from '../layout/HeroSection'
import TourSection from '../sections/TourSection/TourSection'
import Bannner from '../sections/PhonePurchaseBanner/phonePurchaseBanner'
import WhyTorino from '../sections/WhyTorino/WhyTorino'
import TourGallary from '../sections/TourGallary/TourGallary'
import { Toaster } from 'react-hot-toast'
import AuthForm from '../auth/AuthForm'
import Footer from '../layout/Footer/Footer'


function HomePage({toursData}) {
  console.log("HOME TOURS:", toursData);
  return (
    <div className={styles.container}>
    
        {/* <Layout/>  */}
        {/* <Toaster position="top-center" /> */}
        <AuthForm/>
        <HeroSection tours={toursData}/>
        <TourSection toursData={toursData} />
        <Bannner/>
        <TourGallary/>
        <WhyTorino/>
         {/* <Footer/> */}
    </div>
  )
}

export default HomePage