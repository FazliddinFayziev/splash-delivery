import React from 'react'
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

const HomeUZ = () => {
    return (
        <>
            <div className='w-[100%] h-[30px] bg-[#e3f4fe] flex justify-center items-center font-dosis'>
                Sayt test rejimida
            </div>
            <NavbarUZ />
            <HerroBannerUZ />
            <PhoneFixer />
            <SectionOneUZ />
            <NewUZ />
            <XizmatUZ />
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