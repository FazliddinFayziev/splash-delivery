import React from 'react';
import { MdOutlineSanitizer, MdFindReplace } from "react-icons/md";
import { BsDropletHalf } from "react-icons/bs";

const MoreUZ = () => {
    return (
        <section id='xizmatUZ'>
            <div className='flex justify-center font-dosis font-semibold'>
                <div data-aos="fade-up"
                    data-aos-duration="1000" className='w-[150px] h-full my-12'>
                    <h1 className="wavy text-2xl flex justify-center" href="#">Bizning <span className='text-[#379EFF] ml-1'>Xizmatlar</span></h1>
                </div>
            </div>
            <section id="service" className="pb-8 md:py-20 font-dosis flex justify-center">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Web Design */}
                        <div data-aos="fade-up"
                            data-aos-duration="1000" className="single_service bg-[#e3f3fe] p-4 shadow-md">
                            <div className="icon border-[3px] border-blue-400 rounded-full p-2 inline-flex">
                                <MdOutlineSanitizer fontSize={35} />
                            </div>
                            <div className="single_service-body">
                                <h4 className="single_service-heading font-semibold text-blue-400">Sanitizatsiya (sovutgichni tozalash)</h4>
                                <p className="text-sm">Agar siz bizdan sovutgichni ijaraga olgan yoki sotib olgan bo'lsangiz - tozalash bepul (har 6 oyda bir marta) </p>
                            </div>
                        </div>
                        {/* Logo Design */}
                        <div data-aos="fade-up"
                            data-aos-duration="1000" className="single_service bg-white p-4 shadow-md">
                            <div className="icon border-[3px] border-blue-400 rounded-full p-2 inline-flex">
                                <BsDropletHalf fontSize={30} />
                            </div>
                            <div className="single_service-body">
                                <h4 className="single_service-heading font-semibold text-blue-400">Sovutgichni to'ldirish (zapravka)</h4>
                                <p className="text-sm">Sovutgichni freon bilan to'ldirish</p>
                            </div>
                        </div>
                        {/* UI & UX Design */}
                        <div data-aos="fade-up"
                            data-aos-duration="1000" className="single_service bg-white p-4 shadow-md">
                            <div className="icon border-[3px] border-blue-400 rounded-full p-2 inline-flex">
                                <MdFindReplace fontSize={30} />
                            </div>
                            <div className="single_service-body">
                                <h4 className="single_service-heading font-semibold text-blue-400">Almashtirish va ta'mirlash (yangilash)</h4>
                                <p className="text-sm">Kranni almashtirish, Huni (voronka) almashtirish va cooler ta'mirlash xizmatlari</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default MoreUZ