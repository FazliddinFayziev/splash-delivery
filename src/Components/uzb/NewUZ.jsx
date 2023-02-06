import React from 'react'
import { Datas } from "../../data"
import News from './News'

const NewUZ = () => {
    return (
        <>
            <section>
                <div className='flex justify-center mt-5'>
                    <div className='w-[40%] h-[40%]'>
                        <img className='w-full h-full object-cover object-center' src="https://res.cloudinary.com/dcrolfqsj/image/upload/v1675666008/news-removebg-preview_bzmfa9.png" alt="" />
                    </div>
                </div>
                <div className='grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3 max-2xl:grid-col-4'>
                    <div className='mx-auto my-5 border-2 border-black w-[250px] h-[350px]'></div>
                    <div className='mx-auto my-5 border-2 border-black w-[250px] h-[350px]'></div>
                    <div className='mx-auto my-5 border-2 border-black w-[250px] h-[350px]'></div>
                </div>

                {/* {Datas?.map((data, i) => {
                        return (
                            <div key={i}>
                                <News {...data} />
                            </div>
                        )
                    })} */}
            </section>
        </>
    )
}


export default NewUZ
