import React from 'react';
import { GrNext } from "react-icons/gr";
import { HashLink } from 'react-router-hash-link';

const TopRU = () => {
    return (
        <div className="fixed right-0 bottom-20 p-4 z-10">
            <div className="bg-[#37caff] w-[50px] h-[50px] rounded-full">
                <HashLink smooth to="#hero-banerRU">
                    <div className='flex justify-center items-center h-full rounded-full'>
                        <GrNext className='rotate-[-90deg]' fontSize={20} />
                    </div>
                </HashLink>
            </div>
        </div>
    )
}

export default TopRU