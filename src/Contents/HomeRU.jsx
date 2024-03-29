import React, { useEffect } from 'react';
import ContactRU from '../Components/rus/ContactRU';
import PhoneFixerRU from '../Components/rus/FixedPhoneRU';
import FooterRU from '../Components/rus/FooterRU';
import GalleryRU from '../Components/rus/GalleryRU';
import HerroBannerRU from '../Components/rus/HerroBannerRU';
import LocationSectionRU from '../Components/rus/LocationRU';
import MaxsulotRU from '../Components/rus/MaxsulotRU';
import NavbarRU from '../Components/rus/NavbarRU';
import NewRU from '../Components/rus/NewRU';
import SectionOneRU from '../Components/rus/SectionOneRU';
import TolovRU from '../Components/rus/TolovRU';
import XizmatRU from '../Components/rus/XizmatRU';
import TopRU from '../Components/rus/TopRU';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TarkibRU from '../Components/rus/TarkibRU';
import MoreRU from '../Components/rus/MoreRU';

const HomeRU = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <>
            <div className='w-[100%] h-[30px] bg-[#e3f4fe] flex justify-center items-center font-dosis'>
                Сайт находится в тестовом режиме
            </div>
            <NavbarRU />
            <HerroBannerRU />
            <PhoneFixerRU />
            <TopRU />
            <SectionOneRU />
            <TarkibRU />
            <NewRU />
            <XizmatRU />
            <MoreRU />
            <MaxsulotRU />
            <TolovRU />
            <GalleryRU />
            <ContactRU />
            <LocationSectionRU />
            <FooterRU />
        </>
    )
}

export default HomeRU;
