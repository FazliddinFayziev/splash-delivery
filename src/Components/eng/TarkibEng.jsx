import React from 'react';
import { BsFillDropletFill } from "react-icons/bs";

const TarkibEng = () => {
    return (
        <>

            {/* DESKTOP VERSION */}

            <section id="suvUZ" className="md:block hidden w-full h-full bg-[#f8fcff] font-dosis my-[100px]">
                <div data-aos="fade-up"
                    data-aos-duration="1000" className='flex justify-center my-[100px]'>
                    <div className='w-[150px] h-full'>
                        <h3 className="wavy text-[15px] md:text-xl flex justify-center text-center" href="#">Splash water cleaning steps:</h3>
                    </div>
                </div >
                {/* <div className="container mt-4"> */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Left Side: Main Image */}
                    <div className='h-[100%] mx-auto flex justify-center items-center'>
                        <div className="h-[70%] w-[100%]">
                            <img className='w-full h-full object-cover' src="https://res.cloudinary.com/dcrolfqsj/image/upload/v1690678818/water_wlasiw.jpg" alt="splash" />
                        </div>
                    </div>

                    {/* Right Side: Text with Drop Images */}
                    <div className="flex flex-col justify-center items-center mx-auto w-full">
                        <div className='pr-10'>
                            {/* Text 1 */}
                            <div data-aos="fade-up" className="my-4">
                                <div>
                                    <div className='flex'>
                                        <BsFillDropletFill className='p-[2px] text-blue-400' fontSize={30} />
                                        <p className=" text-[15px] font-semibold">Splash water production starts from the water treatment plant:</p>
                                    </div>
                                    <p className='text-[15px]'>
                                        Water treatment plant.
                                        At the initial stage of production, water from the source enters the storage tanks, and then passes through a system of purification filters.
                                    </p>
                                </div>
                            </div>

                            {/* Text 2 */}
                            <div data-aos="fade-up" className="my-4">
                                <div>
                                    <div className='flex'>
                                        <BsFillDropletFill className='p-[2px] text-blue-400' fontSize={30} />
                                        <p className="text-[15px] font-semibold">First cleaning step:</p>
                                    </div>
                                    <p className="text-[15px]">
                                        sand filter / coarse filter (Sediment Filter).
                                        Water passes through a layer of quartz sand, which holds the mechanical particles in the water. Thus, at this stage, water is purified from 90% of suspended particles.
                                    </p>
                                </div>
                            </div>

                            {/* Text 3 */}
                            <div data-aos="fade-up" className="my-4">
                                <div>
                                    <div className='flex'>
                                        <BsFillDropletFill className='p-[2px] text-blue-400' fontSize={30} />
                                        <p className="text-[15px] font-semibold">Second cleaning step:</p>
                                    </div>
                                    <p className="text-[15px]">
                                        settling process - the essence of the process is that under the influence of gravitational forces, solid particles of contaminants (metals and other substances) settle at the bottom of a vessel with water.
                                    </p>
                                </div>
                            </div>

                            {/* Text 4 */}
                            <div data-aos="fade-up" className="my-4">
                                <div>
                                    <div className='flex'>
                                        <BsFillDropletFill className='p-[2px] text-blue-400' fontSize={30} />
                                        <p className="text-[15px] font-semibold">Third stage of cleaning:</p>
                                    </div>
                                    <p className="text-[15px]">
                                        "resin filter".
                                        Passing through the resin membrane of the filter, water gets rid of unnecessary carbonate hardness, retaining all useful microelements and calcium and magnesium salts necessary for the human body.
                                    </p>
                                </div>
                            </div>

                            {/* Text 5 */}
                            <div data-aos="fade-up" className="my-4">
                                <div>
                                    <div className='flex'>
                                        <BsFillDropletFill className='p-[2px] text-blue-400' fontSize={30} />
                                        <p className="text-[15px] font-semibold">Fourth stage:</p>
                                    </div>
                                    <p className="text-[15px]">
                                        "carbon pre-filter" (Carbon Pre-Filter).
                                        Charcoal has a unique absorbent effect, thanks to which it retains all foreign odors and organic substances that degrade water quality.
                                    </p>
                                </div>
                            </div>

                            {/* Text 6 */}
                            <div data-aos="fade-up" className="my-4">
                                <div>
                                    <div className='flex'>
                                        <BsFillDropletFill className='p-[2px] text-blue-400' fontSize={30} />
                                        <p className="text-[15px] font-semibold">Fifth and sixth stages:</p>
                                    </div>
                                    <p className="text-[15px]">
                                        system of finely porous filters from 5 to 2 microns.
                                        Their function is to purify water from impurities at the molecular level.
                                    </p>
                                </div>
                            </div>

                            {/* Text 7 */}
                            <div data-aos="fade-up" className="my-4">
                                <div>
                                    <div className='flex'>
                                        <BsFillDropletFill className='p-[2px] text-blue-400' fontSize={30} />
                                        <p className="text-[15px] font-semibold">Seventh stage:</p>
                                    </div>
                                    <p className="text-[15px]">
                                        ultraviolet lamp (UV lamp).
                                        An ultraviolet lamp purifies water from microorganisms that exist in water, i.e. under the influence of ultraviolet radiation, the total microbial number decreases and the ability of viruses and bacteria to reproduce is suppressed.
                                    </p>
                                </div>
                            </div>

                            {/* Text 8 */}
                            <div data-aos="fade-up" className="my-4">
                                <div>
                                    <div className='flex'>
                                        <BsFillDropletFill className='p-[2px] text-blue-400' fontSize={30} />
                                        <p className="text-[15px] font-semibold">Eighth cleaning step:</p>
                                    </div>
                                    <p className="text-[15px]">
                                        sanitary ultrafilter.
                                        It rids the water of dead microorganisms that died during irradiation with a quartz lamp.
                                    </p>
                                </div>
                            </div>

                            {/* Text 9 */}
                            <div data-aos="fade-up" className="my-4">
                                <div>
                                    <div className='flex'>
                                        <BsFillDropletFill className='p-[2px] text-blue-400' fontSize={30} />
                                        <p className="text-[15px] font-semibold">And finally the last stage of the ozonator:</p>
                                    </div>
                                    <p className="text-[15px]">
                                        At this stage, the water is enriched with active oxygen, due to which it is disinfected.
                                        The purified water enters the storage tanks (the lower level of the tanks) and through the pipe system enters the production shop for bottling.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>


            {/* MOBILE VERSION */}

            <section id='tarkibUZ' className='w-full h-full md:hidden block bg-[#f8fcff] font-dosis my-[100px]'>
                <div data-aos="fade-up"
                    data-aos-duration="1000" className='flex justify-center'>
                    <div className='w-[150px] h-full'>
                        <h3 className="wavy text-[15px] md:text-xl flex justify-center text-center" href="#">Splash water cleaning steps:</h3>
                    </div>
                </div >
                <div data-aos="fade-up"
                    data-aos-duration="1000" className='flex justify-center mt-8'>
                    <div className='w-[50%] h-[50%]'>
                        <img className='w-full h-full object-cover' src="https://res.cloudinary.com/dcrolfqsj/image/upload/v1690678818/water_wlasiw.jpg" alt="splash" />
                    </div>
                </div>

                <div>
                    {/* TEXT - 1 */}
                    <div data-aos="fade-up"
                        data-aos-duration="1000" className='flex justify-center p-2 my-4 mx-4'>
                        <div>
                            <div className='flex'>
                                <BsFillDropletFill className='p-[2px] text-blue-400' fontSize={30} />
                                <p className='text-[15px] font-semibold'>
                                    Splash water production starts from the water treatment plant:
                                </p>
                            </div>
                            <p className='text-[15px]'>
                                Water treatment plant.
                                At the initial stage of production, water from the source enters the storage tanks, and then passes through a system of purification filters.
                            </p>
                        </div>
                    </div>

                    {/* TEXT - 2 */}
                    <div data-aos="fade-up"
                        data-aos-duration="1000" className='flex justify-center p-2 my-4 mx-4'>
                        <div>
                            <div className='flex'>
                                <BsFillDropletFill className='p-[2px] text-blue-400' fontSize={30} />
                                <p className='text-[15px] font-semibold'>
                                    First cleaning step:
                                </p>
                            </div>
                            <p className='text-[15px]'>
                                sand filter / coarse filter (Sediment Filter).
                                Water passes through a layer of quartz sand, which holds the mechanical particles in the water. Thus, at this stage, water is purified from 90% of suspended particles.
                            </p>
                        </div>
                    </div>

                    {/* TEXT - 3 */}
                    <div data-aos="fade-up"
                        data-aos-duration="1000" className='flex justify-center p-2 my-4 mx-4'>
                        <div>
                            <div className='flex'>
                                <BsFillDropletFill className='p-[2px] text-blue-400' fontSize={30} />
                                <p className='text-[15px] font-semibold'>
                                    Second cleaning step:
                                </p>
                            </div>
                            <p className='text-[15px]'>
                                settling process - the essence of the process is that under the influence of gravitational forces, solid particles of contaminants (metals and other substances) settle at the bottom of a vessel with water.
                            </p>
                        </div>
                    </div>

                    {/* TEXT - 4 */}
                    <div data-aos="fade-up"
                        data-aos-duration="1000" className='flex justify-center p-2 my-4 mx-4'>
                        <div>
                            <div className='flex'>
                                <BsFillDropletFill className='p-[2px] text-blue-400' fontSize={30} />
                                <p className='text-[15px] font-semibold'>
                                    Third stage of cleaning:
                                </p>
                            </div>
                            <p className='text-[15px]'>"resin filter".
                                Passing through the resin membrane of the filter, water gets rid of unnecessary carbonate hardness, retaining all useful microelements and calcium and magnesium salts necessary for the human body.</p>
                        </div>
                    </div>

                    {/* TEXT - 5 */}
                    <div data-aos="fade-up"
                        data-aos-duration="1000" className='flex justify-center p-2 my-4 mx-4'>
                        <div>
                            <div className='flex'>
                                <BsFillDropletFill className='p-[2px] text-blue-400' fontSize={30} />
                                <p className='text-[15px] font-semibold'>
                                    Fourth stage:
                                </p>
                            </div>
                            <p className='text-[15px]'>
                                "carbon pre-filter" (Carbon Pre-Filter).
                                Charcoal has a unique absorbent effect, thanks to which it retains all foreign odors and organic substances that degrade water quality.
                            </p>
                        </div>
                    </div>

                    {/* TEXT - 6 */}
                    <div data-aos="fade-up"
                        data-aos-duration="1000" className='flex justify-center p-2 my-4 mx-4'>
                        <div>
                            <div className='flex'>
                                <BsFillDropletFill className='p-[2px] text-blue-400' fontSize={30} />
                                <p className='text-[15px] font-semibold'>
                                    Fifth and sixth stages:
                                </p>
                            </div>
                            <p className='text-[15px]'>
                                system of finely porous filters from 5 to 2 microns.
                                Their function is to purify water from impurities at the molecular level.
                            </p>
                        </div>
                    </div>

                    {/* TEXT - 7 */}
                    <div data-aos="fade-up"
                        data-aos-duration="1000" className='flex justify-center p-2 my-4 mx-4'>
                        <div>
                            <div className='flex'>
                                <BsFillDropletFill className='p-[2px] text-blue-400' fontSize={30} />
                                <p className='text-[15px] font-semibold'>
                                    Seventh stage:
                                </p>
                            </div>
                            <p className='text-[15px]'>
                                ultraviolet lamp (UV lamp).
                                An ultraviolet lamp purifies water from microorganisms that exist in water, i.e. under the influence of ultraviolet radiation, the total microbial number decreases and the ability of viruses and bacteria to reproduce is suppressed.
                            </p>
                        </div>
                    </div>

                    {/* TEXT - 8 */}
                    <div data-aos="fade-up"
                        data-aos-duration="1000" className='flex justify-center p-2 my-4 mx-4'>
                        <div>
                            <div className='flex'>
                                <BsFillDropletFill className='p-[2px] text-blue-400' fontSize={30} />
                                <p className='text-[15px] font-semibold'>
                                    Eighth cleaning step:
                                </p>
                            </div>
                            <p className='text-[15px]'>
                                sanitary ultrafilter.
                                It rids the water of dead microorganisms that died during irradiation with a quartz lamp.
                            </p>
                        </div>
                    </div>

                    {/* TEXT - 9 */}
                    <div data-aos="fade-up"
                        data-aos-duration="1000" className='flex justify-center p-2 my-4 mx-4'>
                        <div>
                            <div className='flex'>
                                <BsFillDropletFill className='p-[2px] text-blue-400' fontSize={30} />
                                <p className='text-[15px] font-semibold'>
                                    And finally the last stage of the ozonator:
                                </p>
                            </div>
                            <p className='text-[15px]'>
                                At this stage, the water is enriched with active oxygen, due to which it is disinfected.
                                The purified water enters the storage tanks (the lower level of the tanks) and through the pipe system enters the production shop for bottling.
                            </p>
                        </div>
                    </div>
                </div>

            </section >
        </>
    )
}

export default TarkibEng