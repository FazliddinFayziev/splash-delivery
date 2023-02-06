import React from 'react'

const News = ({ id, img, date, title }) => {
    return (
        <>
            <div className='w-[300px] h-[500px] inline' key={id}>
                <div className='w-[300px] h-[300px] flex justify-center'>
                    <img className='w-full h-full object-cover object-center' src={img} alt="splash-news" />
                </div>
                <div className='flex justify-center'>
                    <p>
                        {date}
                    </p>
                </div>
                <div className='flex justify-center'>
                    <p>
                        {title}
                    </p>
                </div>
            </div>

        </>
    )
}

export default News
