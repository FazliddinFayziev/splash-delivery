import React from 'react';
import { MdOutlineSanitizer, MdFindReplace } from "react-icons/md";
import { BsDropletHalf } from "react-icons/bs";

const MoreEng = () => {
    return (
        <section>
            <div className='flex justify-center font-dosis font-semibold'>
                <div data-aos="fade-up"
                    data-aos-duration="1000" className='w-[150px] h-full my-12'>
                    <h1 className="wavy text-2xl flex justify-center" href="#">Our <span className='text-[#379EFF] ml-1'>services</span></h1>
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
                                <h4 className="single_service-heading font-semibold text-blue-400">Sanitization (cooler cleaning)</h4>
                                <p className="text-sm">If you rented or bought a cooler from us - free of charge (once every 6 months) </p>
                            </div>
                        </div>
                        {/* Logo Design */}
                        <div data-aos="fade-up"
                            data-aos-duration="1000" className="single_service bg-white p-4 shadow-md">
                            <div className="icon border-[3px] border-blue-400 rounded-full p-2 inline-flex">
                                <BsDropletHalf fontSize={30} />
                            </div>
                            <div className="single_service-body">
                                <h4 className="single_service-heading font-semibold text-blue-400">Filling the cooler</h4>
                                <p className="text-sm">Filling the cooler with freon</p>
                            </div>
                        </div>
                        {/* UI & UX Design */}
                        <div data-aos="fade-up"
                            data-aos-duration="1000" className="single_service bg-white p-4 shadow-md">
                            <div className="icon border-[3px] border-blue-400 rounded-full p-2 inline-flex">
                                <MdFindReplace fontSize={30} />
                            </div>
                            <div className="single_service-body">
                                <h4 className="single_service-heading font-semibold text-blue-400">Replacement and repair</h4>
                                <p className="text-sm">Funnel Replacement, Faucet Replacement and Cooler Repair Services</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default MoreEng