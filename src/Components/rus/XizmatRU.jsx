import React, { useState } from 'react'
import { Option1r, Option2r, Option3r, Option4r, Option5r, Option6r, Option7r, Option8r } from '../../data';


const XizmatRU = () => {
    const jadvallar = [
        { value: "г.Ташкент", label: "г.Ташкент" },
        { value: "юкори Чирчик", label: "юкори Чирчик" },
        { value: "урта чирчик", label: "урта чирчик" },
        { value: "Ташкентская область, Ташкентский район", label: "Ташкентская область, Ташкентский район" },
        { value: "г. Чирчик", label: "г. Чирчик" },
        { value: "Зангиатинский район", label: "Зангиатинский район" },
        { value: "Кибрайский район (1)", label: "Кибрайский район (1)" },
        { value: "Кибрайский район (2)", label: "Кибрайский район (2)" }
    ];
    const [selectedOption, setSelectedOption] = useState(jadvallar[0].value);
    return (
        <>
            <section id='xizmatRU' className='font-dosis font-semibold bg-[#f8fcff]'>
                <div className='flex justify-center'>
                    <div className='w-[150px] h-full my-12'>
                        <h1 className="wavy text-2xl flex justify-center" href="#">Наша <span className='text-[#379EFF] ml-1'>Услуга</span></h1>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className='w-full h-full flex justify-center items-center'>
                        <div className='grid md:grid-cols-3 mx-0 grid-cols-1 border-[1px] border-[#97cdff] card p-2 bg-white'>
                            {/* first */}
                            <div className='w-[250px] h-full'>
                                <div className='flex justify-center'>
                                    <div className=''>
                                        <div className='w-[200px] h-[200px] p-5'>
                                            <img className='w-full h-full object-cover object-center rounded-full' src="https://res.cloudinary.com/dcrolfqsj/image/upload/v1675691030/damas_j5puoh.png" alt="damas" />
                                        </div>
                                        {/* delivery */}
                                        <div className='flex'>
                                            <div className='w-[60px] h-[50px]'>
                                                <img className='w-full h-full object-cover object-center' src="https://res.cloudinary.com/dcrolfqsj/image/upload/v1675691637/car-removebg-preview_nhmjda.png" alt="delivery" />
                                            </div>
                                            <div className='flex items-center'>
                                                <div className='ml-[10px] w-[5px] h-[20px] border-l-2 border-indigo-500'></div>
                                            </div>
                                            <div className='flex items-center'>
                                                <p className='w-full text-sm'><span className='text-[#379EFF]'>Бесплатная</span> доставка по городу ташкент</p>
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
                                                <p className='w-full text-sm'><span className='text-[#379EFF]'>6 дней </span> в неделю (Воскресенье выходной)</p>
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
                                                <p className='w-full text-sm'><span className='text-[#379EFF]'>9:00 - 22:00</span></p>
                                            </div>
                                        </div>
                                    </div>
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
                                        <h1 className="wavy text-sm flex justify-center" href="#"><span className='text-[#379EFF] ml-1'>График</span>доставки</h1>
                                    </div>
                                </div>
                                <div className='flex justify-center'>
                                    <div className=''>
                                        <select className='w-full border-[1px] border-black' value={selectedOption} onChange={e => setSelectedOption(e.target.value)}>
                                            {jadvallar.map(option => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>
                                        <div className='flex justify-center my-4'>
                                            <div className='flex justify-center border-[1px] border-[#379EFF] w-[70%] h-full card'>
                                                <div className='p-2'>
                                                    {selectedOption === "г.Ташкент" && <Option1r />}
                                                    {selectedOption === "юкори Чирчик" && <Option2r />}
                                                    {selectedOption === "урта чирчик" && <Option3r />}
                                                    {selectedOption === "Ташкентская область, Ташкентский район" && <Option4r />}
                                                    {selectedOption === "г. Чирчик" && <Option5r />}
                                                    {selectedOption === "Зангиатинский район" && <Option6r />}
                                                    {selectedOption === "Кибрайский район (1)" && <Option7r />}
                                                    {selectedOption === "Кибрайский район (2)" && <Option8r />}
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
                            <div className='w-[250px] h-full'>
                                <div className='flex justify-center'>
                                    <div className='w-[200px] h-[200px] p-5'>
                                        <img className='w-full h-full object-cover object-center rounded-full' src="https://res.cloudinary.com/dcrolfqsj/image/upload/v1675794222/remont_ondboz.jpg" alt="damas" />
                                    </div>
                                </div>
                                {/* delivery */}
                                <div className='flex'>
                                    <div className='w-[60px] h-[50px]'>
                                        <img className='w-full h-full object-cover object-center' src="https://res.cloudinary.com/dcrolfqsj/image/upload/v1675794368/remo-removebg-preview_nuwe8q.png" alt="cooler" />
                                    </div>
                                    <div className='flex items-center'>
                                        <div className='ml-[10px] w-[5px] h-[20px] border-l-2 border-indigo-500'></div>
                                    </div>
                                    <div className='flex items-center'>
                                        <p className='w-full text-sm'><span className='text-[#379EFF]'>Ремонт </span> кулера</p>
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

export default XizmatRU
