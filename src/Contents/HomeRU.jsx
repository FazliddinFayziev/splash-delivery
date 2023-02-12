import React from 'react';
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

const HomeRU = () => {
    return (
        <>
            <NavbarRU />
            <HerroBannerRU />
            <PhoneFixerRU />
            <SectionOneRU />
            <NewRU />
            <XizmatRU />
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
