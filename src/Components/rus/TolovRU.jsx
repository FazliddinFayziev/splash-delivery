import React from 'react'

const TolovRU = () => {
    return (
        <div>
            <section id='tolovRU' className='font-dosis font-semibold bg-[#f8fcff] pt-8'>
                <div className='flex justify-center'>
                    <div className='w-[150px] h-full'>
                        <h1 className="wavy text-2xl flex justify-center" href="#">Виды <span className='text-[#379EFF] ml-1'> оплаты</span></h1>
                    </div>
                </div>
                <div className='grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3 max-2xl:grid-col-4'>
                    {/* card 1 */}
                    <div className='mx-auto my-5 w-[300px] h-[400px] max-sm:w-[250px] max-sm:h-[350px] p-6 border-[1px] border-[#379EFF] card bg-white'>
                        <div className='flex justify-center'>
                            <div className='w-[150px] h-[150px] max-sm:w-[100px] max-sm:h-[100px]'>
                                <img className='w-full h-full object-cover object-center' src="https://res.cloudinary.com/dcrolfqsj/image/upload/v1675860530/cash_e0xl3b.jpg" alt="splash-news" />
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            <h1 className="text-2xl flex justify-center" href="#"><span className='text-[#379EFF] mr-1'>Наличные</span> оплата</h1>
                        </div>
                        <div className='flex justify-center items-center'>
                            <div className='mt-[50px]'>
                                <h1 className="text-2xl flex justify-center" href="#"><span className='text-[#379EFF] mr-1'>UZS</span></h1>
                            </div>
                        </div>
                    </div>
                    {/* card 2 */}
                    <div className='mx-auto my-5 w-[300px] h-[400px] max-sm:w-[250px] max-sm:h-[350px] p-6 border-[1px] border-[#379EFF] card bg-white'>
                        <div className='flex justify-center'>
                            <div className='w-[150px] h-[150px] max-sm:w-[100px] max-sm:h-[100px]'>
                                <img className='w-full h-full object-cover object-center' src="https://res.cloudinary.com/dcrolfqsj/image/upload/v1675860542/card_xcedmq.jpg" alt="splash-news" />
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            <h1 className="text-lg text-center" href="#">оплатить с помощью <span className='text-[#379EFF] ml-1'>карты</span></h1>
                        </div>
                        <div className='flex justify-center'>
                            <div className='w-[150px] h-[150px]'>
                                <div className='flex justify-center'>
                                    <div>
                                        <div className='w-[122px] h-[56px] mt-2'>
                                            <img className='object-cover object-center w-full h-full' src="https://res.cloudinary.com/dcrolfqsj/image/upload/v1675862279/uzcard_olkdct.jpg" alt="splash" />
                                        </div>
                                        <div className='w-[122px] h-[56px] mt-2'>
                                            <img className='object-cover object-center w-full h-full' src="https://res.cloudinary.com/dcrolfqsj/image/upload/v1675862284/humo_st20bt.jpg" alt="splash" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* card 3 */}
                    <div className='mx-auto my-5 w-[300px] h-[400px] max-sm:w-[250px] max-sm:h-[350px] p-6 border-[1px] border-[#379EFF] card bg-white'>
                        <div className='flex justify-center'>
                            <div className='w-[150px] h-[150px] max-sm:w-[100px] max-sm:h-[100px]'>
                                <img className='w-full h-full object-cover object-center' src="https://res.cloudinary.com/dcrolfqsj/image/upload/v1675860549/app_ev0ufw.jpg" alt="splash-news" />
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            <h1 className="text-lg text-center" href="#">Оплата через<span className='text-[#379EFF] ml-1'>приложения</span></h1>
                        </div>
                        <div className='flex justify-center'>
                            <div className='w-[150px] h-[150px]'>
                                <div className='flex justify-center'>
                                    <div className='flex'>
                                        <div className='w-[50px] h-[50px] mt-2'>
                                            <img className='object-cover object-center w-full h-full' src="https://res.cloudinary.com/dcrolfqsj/image/upload/v1675862937/payme_kk3nyl.jpg" alt="splash" />
                                        </div>
                                        <div className='w-[122px] h-[56px] mt-2'>
                                            <img className='object-cover object-center w-full h-full' src="https://res.cloudinary.com/dcrolfqsj/image/upload/v1675862922/click_esap8j.jpg" alt="splash" />
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-center'>
                                    <div className='w-[69px] h-[66px]'>
                                        <img className='object-cover object-center w-full h-full' src="https://res.cloudinary.com/dcrolfqsj/image/upload/v1675863084/apelsin_tiyxl2.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    )
}

export default TolovRU
