import React from 'react';
import { FaPhoneAlt } from "react-icons/fa"

function PhoneFixer() {
    return (
        <div className="fixed right-0 bottom-0 p-4 md:hidden block z-10">
            <div className="bg-[#37caff] w-[50px] h-[50px] rounded-full">
                <div className='flex justify-center items-center h-full'>
                    <a href="tel:+99871-208-91-19">
                        <FaPhoneAlt fontSize={20} />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default PhoneFixer;