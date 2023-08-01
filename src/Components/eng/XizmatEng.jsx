import React, { useState } from 'react'
import { Option1eng, Option2eng, Option3eng, Option4eng, Option5eng, Option6eng, Option7eng, Option8eng } from '../../data';


const XizmatEng = () => {
    const jadvallar = [
        { value: "Tashkent city", label: "Tashkent city" },
        { value: "Yuqori Chirchiq", label: "Yuqori Chirchiq" },
        { value: "Oʼrta Chirchiq", label: "Oʼrta Chirchiq" },
        { value: "Tashkent region, Tashkent district", label: "Tashkent region, Tashkent district" },
        { value: "Chirchik city", label: "Chirchik city" },
        { value: "Zangiota District", label: "Zangiota District" },
        { value: "Qibray District (1)", label: "Qibray District (1)" },
        { value: "Qibray District (2)", label: "Qibray District (2)" }
    ];
    const [selectedOption, setSelectedOption] = useState(jadvallar[0].value);
    return (
        <>
            <section className='font-dosis font-semibold bg-[#f8fcff]'>
                <div className='flex justify-center'>
                    <div data-aos="fade-up"
                        data-aos-duration="1000" className='w-[150px] h-full my-12'>
                        <h1 className="wavy text-2xl flex justify-center" href="#">Delivery <span className='text-[#379EFF] ml-1'>Schedule</span></h1>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div data-aos="fade-up"
                        data-aos-duration="1000" className='w-full h-full flex justify-center items-center'>
                        <div className='grid md:grid-cols-3 mx-0 grid-cols-1 border-[1px] border-[#97cdff] card p-2 bg-white'>
                            {/* first */}
                            <div className='w-[250px] h-full flex justify-center items-center'>
                                <div className='w-[200px] h-[200px] p-5 ml-3'>
                                    <img className='w-full h-full object-cover object-center rounded-full' src="https://res.cloudinary.com/dcrolfqsj/image/upload/v1675691030/damas_j5puoh.png" alt="damas" />
                                </div>
                            </div>
                            {/* second */}
                            <div className='w-[250px] h-full'>
                                <div className='flex justify-center'>
                                    <div className='w-[100px] h-[80px] p-5'>
                                        <img className='w-full h-full object-cover object-center' src="https://res.cloudinary.com/dip5rm08k/image/upload/v1674545546/splash-removebg-preview_vyuz5o.png" alt="damas" />
                                    </div>
                                </div>
                                <div className='flex justify-center'>
                                    <div className='w-[100px] h-full'>
                                        <h1 className="wavy text-sm flex justify-center text-center" href="#">Delivery Schedule</h1>
                                    </div>
                                </div>
                                <div className='flex justify-center'>
                                    <div className=''>
                                        <select className='border-[1px] border-black' value={selectedOption} onChange={e => setSelectedOption(e.target.value)}>
                                            {jadvallar.map(option => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>
                                        <div className='flex justify-center my-4'>
                                            <div className='flex justify-center border-[1px] border-[#379EFF] w-[90%] h-full card'>
                                                <div className='p-2'>
                                                    {selectedOption === "Tashkent city" && <Option1eng />}
                                                    {selectedOption === "Yuqori Chirchiq" && <Option2eng />}
                                                    {selectedOption === "Oʼrta Chirchiq" && <Option3eng />}
                                                    {selectedOption === "Tashkent region, Tashkent district" && <Option4eng />}
                                                    {selectedOption === "Chirchik city" && <Option5eng />}
                                                    {selectedOption === "Zangiota District" && <Option6eng />}
                                                    {selectedOption === "Qibray District (1)" && <Option7eng />}
                                                    {selectedOption === "Qibray District (2)" && <Option8eng />}
                                                    <div className='flex justify-center my-2'>
                                                        <div className='w-[60px] h-[50px]'>
                                                            <img className='w-full h-full object-cover object-center' src="https://res.cloudinary.com/dcrolfqsj/image/upload/v1675691637/car-removebg-preview_nhmjda.png" alt="delivery" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-center'>

                                </div>
                            </div>
                            {/* third */}
                            <div className='w-[250px] h-full flex justify-center items-center p-4'>
                                <div>
                                    {/* delivery */}
                                    <div className='flex'>
                                        <div className='w-[60px] h-[50px]'>
                                            <img className='w-full h-full object-cover object-center' src="https://res.cloudinary.com/dcrolfqsj/image/upload/v1675691637/car-removebg-preview_nhmjda.png" alt="delivery" />
                                        </div>
                                        <div className='flex items-center'>
                                            <div className='ml-[10px] w-[5px] h-[20px] border-l-2 border-indigo-500'></div>
                                        </div>
                                        <div className='flex items-center'>
                                            <p className='w-full text-sm'><span className='text-[#379EFF]'>Free</span> delivery</p>
                                        </div>
                                    </div>
                                    {/* date */}
                                    <div className='flex'>
                                        <div className='w-[60px] h-[50px]'>
                                            <img className='w-full h-full object-cover object-center' src="https://res.cloudinary.com/dcrolfqsj/image/upload/v1675761118/date-removebg-preview_bcpldo.png" alt="delivery" />
                                        </div>
                                        <div className='flex items-center'>
                                            <div className='ml-[10px] w-[5px] h-[20px] border-l-2 border-indigo-500'></div>
                                        </div>
                                        <div className='flex items-center'>
                                            <p className='w-full text-sm'>6 days<span className='text-[#379EFF]'> a week </span></p>
                                        </div>
                                    </div>
                                    {/* time */}
                                    <div className='flex'>
                                        <div className='w-[60px] h-[50px]'>
                                            <img className='w-full h-full object-cover object-center' src="https://res.cloudinary.com/dcrolfqsj/image/upload/v1675761297/time-removebg-preview_pqtclv.png" alt="delivery" />
                                        </div>
                                        <div className='flex items-center'>
                                            <div className='ml-[10px] w-[5px] h-[20px] border-l-2 border-indigo-500'></div>
                                        </div>
                                        <div className='flex items-center'>
                                            <p className='w-full text-sm'><span className='text-[#379EFF]'>9:00 - 23:00</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default XizmatEng
