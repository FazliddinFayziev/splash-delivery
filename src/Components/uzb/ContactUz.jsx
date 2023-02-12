import React from 'react'
import { FaPhoneAlt } from "react-icons/fa"
import { TbWorld } from "react-icons/tb"
import { BsTelegram } from "react-icons/bs"
import { AiFillInstagram } from "react-icons/ai"

const ContactUz = () => {
    return (
        <section id='contactUZ' className='font-dosis font-semibold'>
            <div className='flex justify-center py-6'>
                <div className='w-[150px] h-full'>
                    <h1 className="wavy text-2xl flex justify-center" href="#">Bog'lanish</h1>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='justify-center w-[60%] h-full grid md:grid-cols-2 mx-0 grid-cols-1'>
                    <div className='w-full h-[300px]'>
                        <img className='w-full h-full object-cover object-center' src="https://res.cloudinary.com/dcrolfqsj/image/upload/v1675927969/contact_nirjyf.jpg" alt="splash" />
                    </div>
                    <div className='w-full h-[200px] text-2xl'>
                        <div className='flex justify-center h-full items-center'>
                            <div>
                                {/* 1 */}
                                <div className='flex'>
                                    <div className='mr-2'>
                                        <FaPhoneAlt fontSize={20} />
                                    </div>
                                    <h1><a href="tel:+998 71 208 9119">+998 71 208 9119</a></h1>
                                </div>
                                {/* 2 */}
                                <div className='flex'>
                                    <div className='mr-2'>
                                        <FaPhoneAlt fontSize={20} />
                                    </div>
                                    <h1><a href="tel:+998 71 208 9119">+998 97 425 9119</a></h1>
                                </div>
                                {/* 3 */}
                                <div className='flex'>
                                    <div className='mr-2'>
                                        <TbWorld fontSize={20} />
                                    </div>
                                    <h1><a href="https://www.splash.uz">www.splash.uz</a></h1>
                                </div>
                                {/* 4 */}
                                <div className='flex'>
                                    <div className='mr-2'>
                                        <BsTelegram fontSize={20} />
                                    </div>
                                    <h1><a href="https://t.me/splashwaterbot">t.me/splashwaterbot</a></h1>
                                </div>
                                {/* 5 */}
                                <div className='flex'>
                                    <div className='mr-2'>
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
