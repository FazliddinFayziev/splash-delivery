import React, { useState } from 'react'
import { Option1, Option2, Option3, Option4, Option5, Option6, Option7, Option8 } from '../../data';


const XizmatUZ = () => {
    const jadvallar = [
        { value: "Toshkent shaxar", label: "Toshkent shaxar" },
        { value: "Yuqori Chirchiq", label: "Yuqori Chirchiq" },
        { value: "Oʼrta Chirchiq", label: "Oʼrta Chirchiq" },
        { value: "Toshkent viloyati, Toshkent tumani", label: "Toshkent viloyati, Toshkent tumani" },
        { value: "Chirchiq shaxri", label: "Chirchiq shaxri" },
        { value: "Zangiota tumani", label: "Zangiota tumani" },
        { value: "Qibray tumani (1)", label: "Qibray tumani (1)" },
        { value: "Qibray tumani (2)", label: "Qibray tumani (2)" }
    ];
    const [selectedOption, setSelectedOption] = useState(jadvallar[0].value);
    return (
        <>
            <section className='font-dosis font-semibold bg-[#f8fcff]'>
                <div className='flex justify-center'>
                    <div data-aos="fade-up"
                        data-aos-duration="1000" className='w-[150px] h-full my-12'>
                        <h1 className="wavy text-2xl flex justify-center text-center" href="#">Yetkazib berish Jadvali</h1>
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
                                        <h1 className="wavy text-sm flex justify-center text-center" href="#">Yetkazib berish Jadvali</h1>
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
                                                    {selectedOption === "Toshkent shaxar" && <Option1 />}
                                                    {selectedOption === "Yuqori Chirchiq" && <Option2 />}
                                                    {selectedOption === "Oʼrta Chirchiq" && <Option3 />}
                                                    {selectedOption === "Toshkent viloyati, Toshkent tumani" && <Option4 />}
                                                    {selectedOption === "Chirchiq shaxri" && <Option5 />}
                                                    {selectedOption === "Zangiota tumani" && <Option6 />}
                                                    {selectedOption === "Qibray tumani (1)" && <Option7 />}
                                                    {selectedOption === "Qibray tumani (2)" && <Option8 />}
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
                                            <p className='w-full text-sm'><span className='text-[#379EFF]'>Tekin</span> yetkazib berish</p>
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
                                            <p className='w-full text-sm'>Haftasiga<span className='text-[#379EFF]'> 6 kun </span></p>
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

export default XizmatUZ
