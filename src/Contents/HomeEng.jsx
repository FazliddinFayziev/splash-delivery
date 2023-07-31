import React, { useEffect } from 'react'
import NavbarEng from '../Components/eng/NavbarEng'
import HerroBannerEng from '../Components/eng/HerroBannerEng'
import PhoneFixer from '../Components/eng/FixedPhoneEng'
import SectionOneEng from '../Components/eng/SectionOneEng'
import NewEng from '../Components/eng/NewEng'
import XizmatEng from '../Components/eng/XizmatEng'
import MaxsulotEng from '../Components/eng/MaxsulotEng'
import TolovEng from '../Components/eng/TolovEng'
import GalleryEng from '../Components/eng/GalleryEng'
import ContactEng from "../Components/eng/ContactEng"
import LocationEng from "../Components/eng/LocationEng"
import FooterEng from "../Components/eng/FooterEng"
import TopEng from '../Components/eng/TopEng'
import TarkibEng from '../Components/eng/TarkibEng'
import AOS from 'aos';
import 'aos/dist/aos.css';
import MoreEng from '../Components/eng/MoreEng'


const HomeEng = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <>
            <div className='w-[100%] h-[30px] bg-[#e3f4fe] flex justify-center items-center font-dosis'>
                The site is in test mode
            </div>
            <NavbarEng />
            <HerroBannerEng />
            <PhoneFixer />
            <TopEng />
            <SectionOneEng />
            <TarkibEng />
            <NewEng />
            <XizmatEng />
            <MoreEng />
            <MaxsulotEng />
            <TolovEng />
            <GalleryEng />
            <ContactEng />
            <LocationEng />
            <FooterEng />
        </>
    )
}

export default HomeEng