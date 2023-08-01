import React from 'react';
import { BsFillDropletFill } from "react-icons/bs";

const TarkibRU = () => {
    return (
        <>

            {/* DESKTOP VERSION */}

            <section id="suvUZ" className="md:block hidden w-full h-full bg-[#f8fcff] font-dosis my-[100px]">
                <div data-aos="fade-up"
                    data-aos-duration="1000" className='flex justify-center my-[100px]'>
                    <div className='w-[150px] h-full'>
                        <h3 className="wavy text-[15px] md:text-xl flex justify-center text-center" href="#">Уровни очистки питьевой воды Splash:</h3>
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
                                        <p className=" text-[15px] font-semibold">Производство воды “Splash” начинается с цеха водоподготовки:</p>
                                    </div>
                                    <p className='text-[15px]'>
                                        Цех водоподготовки.
                                        На начальном этапе производства вода из источника поступает в накопительные емкости, а затем проходит через систему фильтров очистки.
                                    </p>
                                </div>
                            </div>

                            {/* Text 2 */}
                            <div data-aos="fade-up" className="my-4">
                                <div>
                                    <div className='flex'>
                                        <BsFillDropletFill className='p-[2px] text-blue-400' fontSize={30} />
                                        <p className="text-[15px] font-semibold">Первый этап очистки:</p>
                                    </div>
                                    <p className="text-[15px]">
                                        песочный фильтр/фильтр грубой очистки (Sediment Filter).
                                        Вода проходит через слой кварцевого песка, который удерживает в себе механические частички, находящиеся в воде. Таким образом на этом этапе происходит очищение воды от 90% взвешенных частиц.
                                    </p>
                                </div>
                            </div>

                            {/* Text 3 */}
                            <div data-aos="fade-up" className="my-4">
                                <div>
                                    <div className='flex'>
                                        <BsFillDropletFill className='p-[2px] text-blue-400' fontSize={30} />
                                        <p className="text-[15px] font-semibold">Второй этап очистки:</p>
                                    </div>
                                    <p className="text-[15px]">
                                        процесс отстаивание - суть процесса состоит в том, что под воздействием сил гравитации твердые частицы загрязнений (металлов и других веществ), оседают на дне сосуда с водой.
                                    </p>
                                </div>
                            </div>

                            {/* Text 4 */}
                            <div data-aos="fade-up" className="my-4">
                                <div>
                                    <div className='flex'>
                                        <BsFillDropletFill className='p-[2px] text-blue-400' fontSize={30} />
                                        <p className="text-[15px] font-semibold">Третий этап очистки:</p>
                                    </div>
                                    <p className="text-[15px]">
                                        «смоляной фильтр».
                                        Проходя через смоляную мембрану фильтра, вода избавляется от ненужной корбонатной жесткости, сохраняя в себе все полезные микроэлементы и необходимые для организма человека соли кальция и магния.
                                    </p>
                                </div>
                            </div>

                            {/* Text 5 */}
                            <div data-aos="fade-up" className="my-4">
                                <div>
                                    <div className='flex'>
                                        <BsFillDropletFill className='p-[2px] text-blue-400' fontSize={30} />
                                        <p className="text-[15px] font-semibold">Четвертый этап:</p>
                                    </div>
                                    <p className="text-[15px]">
                                        «угольный префильтр» (Carbon Pre-Filter).
                                        Уголь обладает уникальным абсорбирующим эффектом, благодаря которому он удерживает в себе все посторонние запахи и органические вещества, ухудшающие качество воды.
                                    </p>
                                </div>
                            </div>

                            {/* Text 6 */}
                            <div data-aos="fade-up" className="my-4">
                                <div>
                                    <div className='flex'>
                                        <BsFillDropletFill className='p-[2px] text-blue-400' fontSize={30} />
                                        <p className="text-[15px] font-semibold">Пятый и шестые этапы:</p>
                                    </div>
                                    <p className="text-[15px]">
                                        система мелкопористых фильтров от 5 до 2 мкм.
                                        Их функция – очищение воды от примесей на молекулярном уровне.
                                    </p>
                                </div>
                            </div>

                            {/* Text 7 */}
                            <div data-aos="fade-up" className="my-4">
                                <div>
                                    <div className='flex'>
                                        <BsFillDropletFill className='p-[2px] text-blue-400' fontSize={30} />
                                        <p className="text-[15px] font-semibold">Седьмой этап:</p>
                                    </div>
                                    <p className="text-[15px]">
                                        ультрафиолетовая лампа (UV lamp).
                                        Ультрафиолетовая лампа очищает воду от микроорганизмов, которые существуют в воде, т.е. под воздействием ультрафиолетового излучения уменьшается общее микробное число и подавляется способность вирусов и бактерий к репродукции.
                                    </p>
                                </div>
                            </div>

                            {/* Text 8 */}
                            <div data-aos="fade-up" className="my-4">
                                <div>
                                    <div className='flex'>
                                        <BsFillDropletFill className='p-[2px] text-blue-400' fontSize={30} />
                                        <p className="text-[15px] font-semibold">Восьмой этап очистки:</p>
                                    </div>
                                    <p className="text-[15px]">
                                        санитарный ультрафильтр.
                                        Он избавляет воду от мертвых микроорганизмов, которые погибли во время облучения кварцевой лампой.
                                    </p>
                                </div>
                            </div>

                            {/* Text 9 */}
                            <div data-aos="fade-up" className="my-4">
                                <div>
                                    <div className='flex'>
                                        <BsFillDropletFill className='p-[2px] text-blue-400' fontSize={30} />
                                        <p className="text-[15px] font-semibold">И наконец последний этап озонатор:</p>
                                    </div>
                                    <p className="text-[15px]">
                                        На этом этапе вода обогащается активным кислородом, благодаря которому она дезинфицируется.
                                        Очищенная вода поступает в накопительные цистерны (нижний уровень цистерн) и по системе труб поступает на розлив в производственный цех.
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
                        <h3 className="wavy text-[15px] md:text-xl flex justify-center text-center" href="#">Уровни очистки питьевой воды Splash:</h3>
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
                                    Производство воды “Splash” начинается с цеха водоподготовки:
                                </p>
                            </div>
                            <p className='text-[15px]'>
                                Цех водоподготовки. На начальном этапе производства вода из источника поступает в накопительные емкости, а затем проходит через систему фильтров очистки.
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
                                    Первый этап очистки:
                                </p>
                            </div>
                            <p className='text-[15px]'>
                                песочный фильтр/фильтр грубой очистки (Sediment Filter).
                                Вода проходит через слой кварцевого песка, который удерживает в себе механические частички, находящиеся в воде. Таким образом на этом этапе происходит очищение воды от 90% взвешенных частиц.
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
                                    Второй этап очистки:
                                </p>
                            </div>
                            <p className='text-[15px]'>
                                процесс отстаивание - суть процесса состоит в том, что под воздействием сил гравитации твердые частицы загрязнений (металлов и других веществ), оседают на дне сосуда с водой.
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
                                    Третий этап очистки:
                                </p>
                            </div>
                            <p className='text-[15px]'>«смоляной фильтр».
                                Проходя через смоляную мембрану фильтра, вода избавляется от ненужной корбонатной жесткости, сохраняя в себе все полезные микроэлементы и необходимые для организма человека соли кальция и магния.</p>
                        </div>
                    </div>

                    {/* TEXT - 5 */}
                    <div data-aos="fade-up"
                        data-aos-duration="1000" className='flex justify-center p-2 my-4 mx-4'>
                        <div>
                            <div className='flex'>
                                <BsFillDropletFill className='p-[2px] text-blue-400' fontSize={30} />
                                <p className='text-[15px] font-semibold'>
                                    Четвертый этап:
                                </p>
                            </div>
                            <p className='text-[15px]'>
                                «угольный префильтр» (Carbon Pre-Filter).
                                Уголь обладает уникальным абсорбирующим эффектом, благодаря которому он удерживает в себе все посторонние запахи и органические вещества, ухудшающие качество воды.
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
                                    Пятый и шестые этапы:
                                </p>
                            </div>
                            <p className='text-[15px]'>
                                система мелкопористых фильтров от 5 до 2 мкм.
                                Их функция – очищение воды от примесей на молекулярном уровне.
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
                                    Седьмой этап:
                                </p>
                            </div>
                            <p className='text-[15px]'>
                                ультрафиолетовая лампа (UV lamp).
                                Ультрафиолетовая лампа очищает воду от микроорганизмов, которые существуют в воде, т.е. под воздействием ультрафиолетового излучения уменьшается общее микробное число и подавляется способность вирусов и бактерий к репродукции.
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
                                    Восьмой этап очистки:
                                </p>
                            </div>
                            <p className='text-[15px]'>
                                санитарный ультрафильтр.
                                Он избавляет воду от мертвых микроорганизмов, которые погибли во время облучения кварцевой лампой.
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
                                    И наконец последний этап озонатор:
                                </p>
                            </div>
                            <p className='text-[15px]'>
                                На этом этапе вода обогащается активным кислородом, благодаря которому она дезинфицируется.
                                Очищенная вода поступает в накопительные цистерны (нижний уровень цистерн) и по системе труб поступает на розлив в производственный цех.
                            </p>
                        </div>
                    </div>
                </div>

            </section >
        </>
    )
}

export default TarkibRU