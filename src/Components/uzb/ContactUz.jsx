import React from 'react'
import { FaPhoneAlt } from "react-icons/fa"
import { TbWorld } from "react-icons/tb"
import { BsTelegram } from "react-icons/bs"
import { AiFillInstagram } from "react-icons/ai"

const ContactUz = () => {
    return (
        <section id='contactUZ' className='font-dosis font-semibold bg-[#f8fcff]'>
            <div className='flex justify-center py-6'>
                <div className='w-[150px] h-full'>
                    <h1 className="wavy text-2xl flex justify-center" href="#">Bog'lanish</h1>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='justify-center w-[60%] h-full grid md:grid-cols-2 mx-0 grid-cols-1'>
                    <div data-aos="fade-up"
                        data-aos-duration="1000" className='w-full h-[100%]'>
                        <img className='w-full h-full object-cover object-center' src="https://res.cloudinary.com/dcrolfqsj/image/upload/v1675927969/contact_nirjyf.jpg" alt="splash" />
                    </div>
                    <div className='w-full h-[100%] text-2xl'>
                        <div className='flex justify-center h-full items-center'>
                            <div>
                                {/* 1 */}
                                <div data-aos="fade-up"
                                    data-aos-duration="1000" className='flex'>
                                    <div className='mr-2 flex justify-center items-center'>
                                        <FaPhoneAlt fontSize={20} />
                                    </div>
                                    <h1><a href="tel:+998 71 208 9119">+998 71 208 9119</a></h1>
                                </div>
                                {/* 2 */}
                                <div data-aos="fade-up"
                                    data-aos-duration="1000" className='flex'>
                                    <div className='mr-2 flex justify-center items-center'>
                                        <BsTelegram fontSize={20} />
                                    </div>
                                    <h1><a href="https://t.me/splashuzbot">t.me/splashuzbot</a></h1>
                                </div>
                                {/* 3 */}
                                <div data-aos="fade-up"
                                    data-aos-duration="1000" className='flex'>
                                    <div className='mr-2 flex justify-center items-center'>
                                        <AiFillInstagram fontSize={20} />
                                    </div>
                                    <h1><a href="https://instagram.com/splash.uz">instagram.com/splash.uz</a></h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUz
