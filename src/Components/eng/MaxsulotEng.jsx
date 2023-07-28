import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Maxsulotlar } from "../../data";

export default class MaxsulotEng extends Component {
    render() {
        var settings = {
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
                <div id="maxsulotENG" className="flex justify-center font-dosis font-semibold bg-[#f8fcff]">
                    <div className="w-[80%]">
                        <div className='flex justify-center my-8'>
                            <div className='w-[150px] h-full'>
                                <h1 className="wavy text-2xl flex justify-center" href="#">Products</h1>
                            </div>
                        </div>
                        <Slider {...settings}>
                            {
                                Maxsulotlar.map((maxsulot) => {
                                    return (
                                        <div key={maxsulot.id} className="w-full h-full flex">
                                            <div className="flex justify-center">
                                                <div className="border-[1px] border-[#379EFF] w-[250px] h-[400px] card bg-white">
                                                    <div className="flex justify-center my-8">
                                                        <div className="w-[97px] h-[150px]">
                                                            <img className="w-full h-full object-cover object-center" src={maxsulot.img} alt="splash-suv" />
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-center my-8">
                                                        <h2>{maxsulot.title3}</h2>
                                                    </div>
                                                    <div className="flex justify-center">
                                                        <div className="flex">
                                                            {maxsulot.star.map((stars) => {
                                                                return (
                                                                    <div key={stars.id}>
                                                                        <div className="w-[20px] h-[20px]">
                                                                            <img className="w-full h-full object-cover object-center" src={stars.star1} alt="" />
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })}
                                                        </div>
                                                    </div>
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