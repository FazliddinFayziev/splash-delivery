import React from 'react';
import { BsFillDropletFill } from "react-icons/bs";

const TarkibUZ = () => {
    return (
        <>

            {/* DESKTOP VERSION */}

            <section id="suvUZ" className="md:block hidden w-full h-full bg-[#f8fcff] font-dosis my-[100px]">
                <div data-aos="fade-up"
                    data-aos-duration="1000" className='flex justify-center my-[100px]'>
                    <div className='w-[150px] h-full'>
                        <h3 className="wavy text-[15px] md:text-xl flex justify-center text-center" href="#">Splash suvining tozalash bosqichlari:</h3>
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
                                        <p className=" text-[15px] font-semibold">Splash suv ishlab chiqarish suv tozalash inshooti bilan boshlanadi:</p>
                                    </div>
                                    <p className='text-[15px]'>
                                        Suv tozalash inshooti.
                                        Ishlab chiqarishning dastlabki bosqichida manbadan suv saqlash tanklariga kiradi va keyin tozalash filtrlari tizimidan o'tadi.
                                    </p>
                                </div>
                            </div>

                            {/* Text 2 */}
                            <div data-aos="fade-up" className="my-4">
                                <div>
                                    <div className='flex'>
                                        <BsFillDropletFill className='p-[2px] text-blue-400' fontSize={30} />
                                        <p className="text-[15px] font-semibold">Tozalashning birinchi bosqichi:</p>
                                    </div>
                                    <p className="text-[15px]">
                                        qum filtri / qo'pol filtr (cho'kindi filtri).
                                        Suv mexanik zarralarni suvda ushlab turadigan kvarts qumi qatlamidan o'tadi. Shunday qilib, ushbu bosqichda suv to'xtatilgan zarrachalarning 90% dan tozalanadi.
                                    </p>
                                </div>
                            </div>

                            {/* Text 3 */}
                            <div data-aos="fade-up" className="my-4">
                                <div>
                                    <div className='flex'>
                                        <BsFillDropletFill className='p-[2px] text-blue-400' fontSize={30} />
                                        <p className="text-[15px] font-semibold">Tozalashning ikkinchi bosqichi:</p>
                                    </div>
                                    <p className="text-[15px]">
                                        cho'kish jarayoni - jarayonning mohiyati shundaki, tortishish kuchlari ta'sirida ifloslantiruvchi moddalarning qattiq zarralari (metall va boshqa moddalar) suv bilan idishning tubiga joylashadi.
                                    </p>
                                </div>
                            </div>

                            {/* Text 4 */}
                            <div data-aos="fade-up" className="my-4">
                                <div>
                                    <div className='flex'>
                                        <BsFillDropletFill className='p-[2px] text-blue-400' fontSize={30} />
                                        <p className="text-[15px] font-semibold">Tozalashning uchinchi bosqichi:</p>
                                    </div>
                                    <p className="text-[15px]">
                                        "qatron filtri".
                                        Filtrning qatronli membranasidan o'tib, suv keraksiz karbonat qattiqligidan xalos bo'lib, inson tanasi uchun zarur bo'lgan barcha foydali mikroelementlar va kaltsiy va magniy tuzlarini saqlaydi.
                                    </p>
                                </div>
                            </div>

                            {/* Text 5 */}
                            <div data-aos="fade-up" className="my-4">
                                <div>
                                    <div className='flex'>
                                        <BsFillDropletFill className='p-[2px] text-blue-400' fontSize={30} />
                                        <p className="text-[15px] font-semibold">To'rtinchi bosqich:</p>
                                    </div>
                                    <p className="text-[15px]">
                                        UV chiroq suvni mikroorganizmlardan tozalaydi, ularning sonini kamaytiradi va ko'payish qobiliyatini bostiradi. Sanitariya ultrafiltri kvarts chiroqqa ta'sir qilgandan keyin o'lik mikroorganizmlarni yo'q qiladi.
                                    </p>
                                </div>
                            </div>

                            {/* Text 6 */}
                            <div data-aos="fade-up" className="my-4">
                                <div>
                                    <div className='flex'>
                                        <BsFillDropletFill className='p-[2px] text-blue-400' fontSize={30} />
                                        <p className="text-[15px] font-semibold">Beshinchi va oltinchi bosqichlar:</p>
                                    </div>
                                    <p className="text-[15px]">
                                        5 dan 2 mikrongacha bo'lgan nozik go'zenekli filtrlar tizimi.
                                        Ularning vazifasi suvni molekulyar darajadagi aralashmalardan tozalashdir.
                                    </p>
                                </div>
                            </div>

                            {/* Text 7 */}
                            <div data-aos="fade-up" className="my-4">
                                <div>
                                    <div className='flex'>
                                        <BsFillDropletFill className='p-[2px] text-blue-400' fontSize={30} />
                                        <p className="text-[15px] font-semibold">Ettinchi bosqich:</p>
                                    </div>
                                    <p className="text-[15px]">
                                        ultrabinafsha chiroq (UV chiroq).
                                        Ultraviyole chiroq suvni suvda mavjud bo'lgan mikroorganizmlardan tozalaydi, ya'ni. ultrabinafsha nurlanish ta'sirida mikroblarning umumiy soni kamayadi va viruslar va bakteriyalarning ko'payish qobiliyati bostiriladi.
                                    </p>
                                </div>
                            </div>

                            {/* Text 8 */}
                            <div data-aos="fade-up" className="my-4">
                                <div>
                                    <div className='flex'>
                                        <BsFillDropletFill className='p-[2px] text-blue-400' fontSize={30} />
                                        <p className="text-[15px] font-semibold">Tozalashning sakkizinchi bosqichi:</p>
                                    </div>
                                    <p className="text-[15px]">
                                        sanitariya ultrafiltr.
                                        U kvarts lampasi bilan nurlanish paytida nobud bo'lgan o'lik mikroorganizmlardan suvni tozalaydi.
                                    </p>
                                </div>
                            </div>

                            {/* Text 9 */}
                            <div data-aos="fade-up" className="my-4">
                                <div>
                                    <div className='flex'>
                                        <BsFillDropletFill className='p-[2px] text-blue-400' fontSize={30} />
                                        <p className="text-[15px] font-semibold">Va nihoyat, oxirgi bosqich - ozonator:</p>
                                    </div>
                                    <p className="text-[15px]">
                                        Ushbu bosqichda suv faol kislorod bilan boyitiladi, buning natijasida u dezinfektsiyalanadi.
                                        Tozalangan suv saqlash tanklariga (tanklarning pastki darajasi) kiradi va quvur tizimi orqali shisha ishlab chiqarish sexiga kiradi.
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
                        <h3 className="wavy text-[15px] md:text-xl flex justify-center text-center" href="#">Splash suvining tozalash bosqichlari:</h3>
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
                                    Splash suv ishlab chiqarish suv tozalash inshooti bilan boshlanadi:
                                </p>
                            </div>
                            <p className='text-[15px]'>Suv tozalash inshooti.
                                Ishlab chiqarishning dastlabki bosqichida manbadan suv saqlash tanklariga kiradi va keyin tozalash filtrlari tizimidan o'tadi.</p>
                        </div>
                    </div>

                    {/* TEXT - 2 */}
                    <div data-aos="fade-up"
                        data-aos-duration="1000" className='flex justify-center p-2 my-4 mx-4'>
                        <div>
                            <div className='flex'>
                                <BsFillDropletFill className='p-[2px] text-blue-400' fontSize={30} />
                                <p className='text-[15px] font-semibold'>
                                    Tozalashning birinchi bosqichi:
                                </p>
                            </div>
                            <p className='text-[15px]'>
                                qum filtri / qo'pol filtr (cho'kindi filtri).
                                Suv mexanik zarralarni suvda ushlab turadigan kvarts qumi qatlamidan o'tadi. Shunday qilib, ushbu bosqichda suv to'xtatilgan zarrachalarning 90% dan tozalanadi.
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
                                    Tozalashning ikkinchi bosqichi:
                                </p>
                            </div>
                            <p className='text-[15px]'>
                                cho'kish jarayoni - jarayonning mohiyati shundaki, tortishish kuchlari ta'sirida ifloslantiruvchi moddalarning qattiq zarralari (metall va boshqa moddalar) suv bilan idishning tubiga joylashadi.
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
                                    Tozalashning uchinchi bosqichi:
                                </p>
                            </div>
                            <p className='text-[15px]'>"qatron filtri".
                                Filtrning qatronli membranasidan o'tib, suv keraksiz karbonat qattiqligidan xalos bo'lib, inson tanasi uchun zarur bo'lgan barcha foydali mikroelementlar va kaltsiy va magniy tuzlarini saqlaydi.</p>
                        </div>
                    </div>

                    {/* TEXT - 5 */}
                    <div data-aos="fade-up"
                        data-aos-duration="1000" className='flex justify-center p-2 my-4 mx-4'>
                        <div>
                            <div className='flex'>
                                <BsFillDropletFill className='p-[2px] text-blue-400' fontSize={30} />
                                <p className='text-[15px] font-semibold'>
                                    To'rtinchi bosqich:
                                </p>
                            </div>
                            <p className='text-[15px]'>
                                "ugleroddan oldingi filtr" (Karbonli filtr).
                                Ko'mir noyob changni yutish ta'siriga ega, buning natijasida suv sifatini yomonlashtiradigan barcha begona hidlar va organik moddalarni saqlaydi.
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
                                    Beshinchi va oltinchi bosqichlar:
                                </p>
                            </div>
                            <p className='text-[15px]'>
                                5 dan 2 mikrongacha bo'lgan nozik go'zenekli filtrlar tizimi.
                                Ularning vazifasi suvni molekulyar darajadagi aralashmalardan tozalashdir.
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
                                    Ettinchi bosqich:
                                </p>
                            </div>
                            <p className='text-[15px]'>
                                ultrabinafsha chiroq (UV chiroq).
                                Ultraviyole chiroq suvni suvda mavjud bo'lgan mikroorganizmlardan tozalaydi, ya'ni. ultrabinafsha nurlanish ta'sirida mikroblarning umumiy soni kamayadi va viruslar va bakteriyalarning ko'payish qobiliyati bostiriladi.
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
                                    Tozalashning sakkizinchi bosqichi:
                                </p>
                            </div>
                            <p className='text-[15px]'>
                                sanitariya ultrafiltr.
                                U kvarts lampasi bilan nurlanish paytida nobud bo'lgan o'lik mikroorganizmlardan suvni tozalaydi.
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
                                    Va nihoyat, oxirgi bosqich - ozonator:
                                </p>
                            </div>
                            <p className='text-[15px]'>
                                Ushbu bosqichda suv faol kislorod bilan boyitiladi, buning natijasida u dezinfektsiyalanadi.
                                Tozalangan suv saqlash tanklariga (tanklarning pastki darajasi) kiradi va quvur tizimi orqali shisha ishlab chiqarish sexiga kiradi.
                            </p>
                        </div>
                    </div>
                </div>

            </section >
        </>
    )
}

export default TarkibUZ