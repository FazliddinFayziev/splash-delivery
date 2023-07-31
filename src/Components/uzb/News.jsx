import React from 'react'

const News = ({ id, img, date, info }) => {
    return (
        <>
            <div className='mx-auto bg-white w-[300px] h-full max-sm:w-[250px] max-sm:h-full p-6 border-[1px] border-[#379EFF] card' key={id}>
                <div className='flex justify-center'>
                    <div className='w-[290px] h-[250px] max-sm:w-[240px] max-sm:h-[200px]'>
                        <img className='w-full h-full object-cover object-center' src={img} alt="splash-news" />
                    </div>
                </div>
                <div className='flex justify-center'>
                    <p className='text-gray-500'>
                        {date}
                    </p>
                </div>
                <div className='flex justify-center'>
                    <p>
                        {info}
                    </p>
                </div>
            </div>

        </>
    )
}

export default News
