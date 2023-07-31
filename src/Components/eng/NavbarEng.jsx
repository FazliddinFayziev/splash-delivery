import React, { useEffect, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai"
import { useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const NavbarEng = () => {
    const [uz, setUz] = useState("eng")
    const navigate = useNavigate()
    useEffect(() => {
        if (uz === "uz") {
            setUz("uz")
            navigate("/splashUZ")
        }
        else if (uz === "ru") {
            setUz("ru")
            navigate("/splashRU")
        } else {
            setUz("eng")
            navigate("/splashENG")
        }
    }, [uz])
    const [nav, setNav] = useState(false);
    const handleClose = () => {
        setNav(false)
    }
    const handleNav = () => {
        setNav(true)
    }
    return (
        <div className='w-full h-[70px] bg-[#EEF9FF]'>
            <div className='w-full h-full'>
                <div className='flex justify-between'>
                    <div className='w-[100px] h-[70px] ml-8'>
                        <a href="">
                            <img src="https://res.cloudinary.com/dip5rm08k/image/upload/v1674545546/splash-removebg-preview_vyuz5o.png" className='w-full h-full object-cover' alt="splash-logo" />
                        </a>
                    </div>
                    <div className='md:flex hidden items-center'>
                        <ul className='font-dosis font-semibold'>
                            <li className='inline-block mr-7 relative group'>
                                <HashLink smooth to="#hero-banerENG">
                                    Home
                                </HashLink>
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-400 transition-all group-hover:w-full"></span>
                            </li>
                            <li className='inline-block mr-7 relative group'>
                                <HashLink smooth to="#suvENG">
                                    Water content
                                </HashLink>
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-400 transition-all group-hover:w-full"></span>
                            </li>
                            <li className='inline-block mr-7 relative group'>
                                <HashLink smooth to="#xizmatENG">
                                    Service
                                </HashLink>
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-400 transition-all group-hover:w-full"></span>
                            </li>
                            <li className='inline-block mr-7 relative group'>
                                <HashLink smooth to="#maxsulotENG">
                                    Product
                                </HashLink>
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-400 transition-all group-hover:w-full"></span>
                            </li>
                            <li className='inline-block mr-7 relative group'>
                                <HashLink smooth to="#tolovENG">
                                    Payment
                                </HashLink>
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-400 transition-all group-hover:w-full"></span>
                            </li>
                            <li className='inline-block mr-7 relative group'>
                                <HashLink smooth to="#contactENG">
                                    Contact
                                </HashLink>
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-400 transition-all group-hover:w-full"></span>
                            </li>
                            <li className='inline-block mr-7 relative group'>
                                <HashLink smooth to="#locationENG">
                                    Location
                                </HashLink>
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-400 transition-all group-hover:w-full"></span>
                            </li>
                            <select onChange={(e) => setUz(e.target.value)} value={uz} className='inline-block mr-7 cursor-pointer' name="" id="">
                                <option value="uz">UZ</option>
                                <option value="ru">RU</option>
                                <option value="eng">ENG</option>
                            </select>
                        </ul>
                    </div>
                    {/* mobile blue hamburger cover */}
                    <div className='md:hidden'>
                        {
                            nav ? (
                                <div className='top-0 right-0 fixed w-[50%] z-10 h-full bg-[#379EFF] translate-x-0 ease-in-out duration-300'>
                                    <div className='mt-[10px] ml-[10px]'>
                                        <AiOutlineClose className='cursor-pointer' fontSize={30} color="white" onClick={handleClose} />
                                    </div>
                                    <div className='flex justify-center'>
                                        <div className='w-[100px] h-full'>
                                            <ul className='font-dosis font-semibold text-center text-white'>
                                                <li className='mt-4 relative group'>
                                                    <HashLink smooth to="#hero-banerENG">
                                                        Home
                                                    </HashLink>
                                                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
                                                </li>
                                                <li className='mt-4 relative group'>
                                                    <HashLink smooth to="#suvENG" onClick={handleClose}>
                                                        Water content
                                                    </HashLink>
                                                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
                                                </li>
                                                <li className='mt-4 relative group'>
                                                    <HashLink smooth to="#xizmatENG" onClick={handleClose}>
                                                        Service
                                                    </HashLink>
                                                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
                                                </li>
                                                <li className='mt-4 relative group'>
                                                    <HashLink smooth to="#maxsulotENG" onClick={handleClose}>
                                                        Product
                                                    </HashLink>
                                                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
                                                </li>
                                                <li className='mt-4 relative group'>
                                                    <HashLink smooth to="#tolovENG" onClick={handleClose}>
                                                        Payment
                                                    </HashLink>
                                                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
                                                </li>
                                                <li className='mt-4 relative group'>
                                                    <HashLink smooth to="#contactENG" onClick={handleClose}>
                                                        Contact
                                                    </HashLink>
                                                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
                                                </li>
                                                <li className='mt-4 relative group'>
                                                    <HashLink smooth to="#locationENG" onClick={handleClose}>
                                                        Location
                                                    </HashLink>
                                                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
                                                </li>
                                                <select onChange={(e) => setUz(e.target.value)} value={uz} className='mt-4 text-black cursor-pointer' name="" id="">
                                                    <option value="uz">UZ</option>
                                                    <option value="ru">RU</option>
                                                    <option value="eng">ENG</option>
                                                </select>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className='translate-x-full ease-in-out duration-300'></div>
                            )
                        }
                    </div>
                    <div className='md:hidden flex items-center mr-7'>
                        <GiHamburgerMenu className='cursor-pointer' fontSize={30} color="#379EFF" onClick={handleNav} />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default NavbarEng