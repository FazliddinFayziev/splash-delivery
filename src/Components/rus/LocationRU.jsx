import React from "react";

const LocationSectionRU = () => {
    return (
        <section id="locationRU" className="py-10 font-dosis font-semibold bg-[#f8fcff]">
            <div className='flex justify-center my-8'>
                <div data-aos="fade-up"
                    data-aos-duration="1000" className='w-[150px] h-full'>
                    <h1 className="wavy text-2xl flex justify-center" href="#">Расположение</h1>
                </div>
            </div>
            <div data-aos="fade-up"
                data-aos-duration="1000" className="flex items-center justify-center">
                <iframe
                    className="w-[60%] h-[300px] border-2 border-gray-400"
                    src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d5988.537632173082!2d69.365992!3d41.368244!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDIyJzA1LjciTiA2OcKwMjEnNTcuNiJF!5e0!3m2!1sru!2smy!4v1676093322970!5m2!1sru!2smy"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                ></iframe>
            </div>
            <p data-aos="fade-up"
                data-aos-duration="1000" className="text-center mt-6 text-gray-600">
                Splash, Abdurauf Fitrat ko'chasi, Qibray, Узбекистан
            </p>
        </section>
    );
};

export default LocationSectionRU;
