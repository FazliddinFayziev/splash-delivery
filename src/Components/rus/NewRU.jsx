import React, { useState, useEffect } from 'react'
import { db } from '../../firebaseConfig';
import { collection, onSnapshot } from 'firebase/firestore';
import News from './News'

const NewRU = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const unsub = onSnapshot(collection(db, "NewsRU"), (snapshot) => {
            let list = [];
            snapshot.docs.forEach((doc) => {
                list.push({ id: doc.id, ...doc.data() })
            });
            setUsers(list);
        }, (error) => {
            console.log(error)
        });

        return () => {
            unsub();
        };

    }, []);

    return (
        <>
            <section className='font-dosis font-semibold bg-[#f8fcff] h-full'>
                <div className='flex justify-center py-4'>
                    <div className='w-[150px] h-full'>
                        <h1 className="wavy text-2xl flex justify-center" href="#"><span className='text-[#379EFF] mr-1'>Splash</span> delivery <span className='text-[#379EFF] ml-1'>News</span></h1>
                    </div>
                </div>
                <div className='h-full grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3 max-2xl:grid-col-4'>
                    {users && users.map((data, i) => {
                        return (
                            <div data-aos="fade-up"
                                data-aos-duration="1000" className='my-4' key={i}>
                                <News {...data} />
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}


export default NewRU
