import React from 'react'
import Wave from 'react-wavify'
import { FaPhoneAlt } from "react-icons/fa"
import { TbWorld } from "react-icons/tb"
import { BsTelegram } from "react-icons/bs"
import { AiFillInstagram } from "react-icons/ai"
import { HashLink } from 'react-router-hash-link';

const FooterUZ = () => (
    <>
        <Wave
            fill='#379EFF'
            paused={false}
            options={{
                height: 30,
                amplitude: 20,
                speed: 0.15,
                points: 4
            }}
        />
        <footer className='w-full h-full mt-[-10px] bg-[#379EFF] font-dosis font-semibold'>
            <div className='flex justify-center'>
                <div className='w-full h-full flex justify-center items-center'>
                    <div className='grid md:grid-cols-3 mx-0 grid-cols-1 p-2'>
                        {/* first */}
                        <div className='w-[250px] h-[300px]'>
                            {/* delivery */}
                            <div className='flex ml-3'>
                                <div className='h-[40px] border-l-4 border-blue-900'></div>
                                <div className='flex items-center ml-2'>
                                    <h1 className='w-full text-2xl text-white'>Menu:</h1>
                                </div>
                            </div>
                            <ul className='font-dosis font-semibold text-white ml-5'>
                                <li className='relative group w-[40px] mt-2'>
                                    <HashLink smooth to="#hero-banerUZ">
                                        Home
                                    </HashLink>
                                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
                                </li>
                                <li className='relative group w-[70px] mt-2'>
                                    <HashLink smooth to="#suvUZ">
                                        Suv tarkibi
                                    </HashLink>
                                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
                                </li>
                                <li className='relative group w-[50px] mt-2'>
                                    <HashLink smooth to="#xizmatUZ">
                                        Xizmat
                                    </HashLink>
                                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
                                </li>
                                <li className='relative group w-[50px] mt-2'>
                                    <HashLink smooth to="#maxsulotUZ">
                                        Maxsulot
                                    </HashLink>
                                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
                                </li>
                                <li className='relative group w-[50px] mt-2'>
                                    <HashLink smooth to="#tolovUZ">
                                        To'lov
                                    </HashLink>
                                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
                                </li>
                                <li className='relative group w-[60px] mt-2'>
                                    <HashLink smooth to="#contactUZ">
                                        Bog'lanish
                                    </HashLink>
                                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
                                </li>
                                <li className='relative group w-[55px] mt-2'>
                                    <HashLink smooth to="#locationUZ">
                                        Lokatsiya
                                    </HashLink>
                                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
                                </li>
                            </ul>
                        </div>
                        {/* second */}
                        <div className='w-[250px] h-[300px] text-white'>
                            {/* delivery */}
                            <div className='flex ml-3'></div>
                            <div className='ml-5'></div>
                        </div>
                        {/* third */}
                        <div className='w-[250px] h-[300px]'>
                            <div className='flex justify-center h-full items-center'>
                                <div>
                                    <button className='border-2 border-[#ffffff] bg-[#ffffff] p-2 rounded-full' type='button'>
                                        <a href="https://t.me/splashuzbot">
                                            Buyurtma berish
                                        </a>
                                    </button>
                                    <div className='flex mt-5'>
                                        <div className='w-[50px] h-[50px]'>
                                            <img className='w-full h-full object-cover object-center rounded-full' src="https://res.cloudinary.com/dcrolfqsj/image/upload/v1676018462/telegram_i5g0wj.png" alt="splash-telegram" />
                                        </div>
                                        <h1 className='flex justify-center items-center text-white'>
                                            Telegram Bot
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-full'>
                <div className='flex justify-center items-center'>
                    <a href="https://t.me/sky_line_team">
                        <div className='w-[70px] h-[70px]'>
                            <img className='w-full h-full object-cover object-center' src="https://res.cloudinary.com/dcrolfqsj/image/upload/v1676019652/skyline-removebg-preview_afmskk.png" alt="skyline" />
                        </div>
                    </a>
                    <div className='w-[100px] h-[50px]'>
                        <img className='w-full h-full object-cover object-center' src="https://res.cloudinary.com/dcrolfqsj/image/upload/v1676019652/ee3a7cf3-4a37-4a36-9d18-68808292b131-removebg-preview_bpihe9.png" alt="splash" />
                    </div>
                </div>
                <div>
                    <h3 className='text-white text-center mt-2'>Copyright © Barcha huquqlar himoyalangan</h3>
                </div>
            </div>
        </footer>
    </>


)

export default FooterUZ