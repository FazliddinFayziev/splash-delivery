import React from 'react'

const HerroBannerUZ = () => {
    return (
        <>
            <section id='hero-banerUZ' className='bg-hero bg-center bg-cover bg-no-repeat font-dosis font-semibold text-white'>
                <div className='w-full min-h-screen max-sm:h-[80vh] max-md:h-[120vh] max-lg:h-[80vh] max-xl:h-[110vh] max-2xl:h-[100vh]'>
                    {/* ON THE MOBILE PHONE */}
                    {/* TITLE */}
                    <div data-aos="fade-up" className='flex justify-center md:hidden'>
                        <img src="https://res.cloudinary.com/dcrolfqsj/image/upload/v1675054946/sd-removebg-preview_fqhflf.png" className='w-[50%] h-[50%] mt-[12vh]' alt="splash-delivery" />
                    </div>
                    <div className='flex mx-12 md:py-10 justify-evenly items-center'>
                        {/* SPLASH BOCHKA */}
                        <div className='md:w-[40%] md:h-[40%] md:ml-[150px] justify-center'>
                            <div className='flex justify-center md:hidden'>
                                <button className='border-2 border-[#379EFF] bg-[#379EFF] p-2 rounded-full' type='button'>
                                    <a href="https://t.me/splashuzbot">
                                        Buyurtma berish
                                    </a>
                                </button>
                            </div>
                        </div>
                        {/* ON THE DESKTOP */}
                        <div className='md:block w-[60%] md:h-[60%] hidden'>
                            <div className='flex justify-center'>
                                <img src="https://res.cloudinary.com/dcrolfqsj/image/upload/v1675054946/sd-removebg-preview_fqhflf.png" className='w-[50%] h-[50%]' alt="splash-delivery" />
                            </div>
                            <div data-aos="fade-up" className='flex justify-center mt-[70px]'>
                                <button className='border-2 border-[#379EFF] bg-[#379EFF] p-4 rounded-full' type='button'>
                                    <a href="https://t.me/splashuzbot">
                                        Buyurtma berish
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HerroBannerUZ
