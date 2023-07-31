import React, { useEffect } from 'react'
import ContactUz from '../Components/uzb/ContactUz'
import PhoneFixer from '../Components/uzb/FixedPhoneUZ'
import FooterUZ from '../Components/uzb/FooterUZ'
import GalleryUZ from '../Components/uzb/GalleryUZ'
import HerroBannerUZ from '../Components/uzb/HerroBannerUZ'
import LocationSection from '../Components/uzb/LocationUz'
import MaxsulotUZ from '../Components/uzb/MaxsulotUZ'
import NavbarUZ from '../Components/uzb/NavbarUZ'
import NewUZ from '../Components/uzb/NewUZ'
import SectionOneUZ from '../Components/uzb/SectionOneUZ'
import TolovUZ from '../Components/uzb/TolovUZ'
import XizmatUZ from '../Components/uzb/XizmatUZ'
import TopUZ from '../Components/uzb/TopUZ'
import AOS from 'aos';
import 'aos/dist/aos.css';
import TarkibUZ from '../Components/uzb/TarkibUZ'
import MoreUZ from '../Components/uzb/MoreUZ'

const HomeUZ = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <>
            <div className='w-[100%] h-[30px] bg-[#e3f4fe] flex justify-center items-center font-dosis'>
                Sayt test rejimida
            </div>
            <NavbarUZ />
            <HerroBannerUZ />
            <PhoneFixer />
            <TopUZ />
            <SectionOneUZ />
            <TarkibUZ />
            <NewUZ />
            <XizmatUZ />
            <MoreUZ />
            <MaxsulotUZ />
            <TolovUZ />
            <GalleryUZ />
            <ContactUz />
            <LocationSection />
            <FooterUZ />
        </>
    )
}

export default HomeUZ