import React, { useEffect } from 'react';
import { AiOutlineCloseSquare } from "react-icons/ai";

const NewsModal = ({ isOpen, onClose, news }) => {

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('body-scroll-lock');
        } else {
            document.body.classList.remove('body-scroll-lock');
        }

        return () => {
            document.body.classList.remove('body-scroll-lock');
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-[#000000b0] bg-opacity-40 z-50">
            <div className="bg-white p-6 max-w-md mx-4">
                <div onClick={onClose} className="flex justify-end">
                    <AiOutlineCloseSquare className='cursor-pointer' color='red' fontSize={35} />
                </div>
                <img className="w-full h-[250px] object-cover object-center mb-4" src={news.img} alt="splash-news" />
                <p className="text-gray-500 mb-2">{news.date}</p>
                <p>{news.info}</p>
            </div>
        </div>
    );
};

export default NewsModal;
