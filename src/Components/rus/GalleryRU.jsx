import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Gallery } from "../../data";

export default class GalleryRU extends Component {
    render() {
        let settings = {
            dots: true,
            infinite: false,
            arrows: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <>
                <div className="flex justify-center font-dosis font-semibold bg-[#f8fcff]">
                    <div className="w-[80%]">
                        <div className='flex justify-center my-8'>
                            <div className='w-[150px] h-full'>
                                <h1 className="wavy text-2xl flex justify-center" href="#">Галерея</h1>
                            </div>
                        </div>
                        <Slider {...settings}>
                            {
                                Gallery.map((galler) => {
                                    return (
                                        <div data-aos="fade-up"
                                            data-aos-duration="1000" key={galler.id} className="w-full h-full">
                                            <div className="flex justify-center">
                                                <div className="border-[1px] border-[#379EFF] w-[200px] h-[200px] md:w-[300px] md:h-[300px] card">
                                                    <img className="w-full h-full object-cover object-center" src={galler.img} alt="splash-suv" />
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Slider>
                    </div>
                </div>
            </>
        );
    }
}