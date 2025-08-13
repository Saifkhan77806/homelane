"use client";

import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import Design3d from "../../assets/3dDesign.jpg"

export function ASlideNum() {
    const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        if (!carouselApi) return;

        const updateCarouselState = () => {
            setCurrentIndex(carouselApi.selectedScrollSnap());
            setTotalItems(carouselApi.scrollSnapList().length);
        };

        updateCarouselState();

        carouselApi.on("select", updateCarouselState);

        return () => {
            carouselApi.off("select", updateCarouselState); // Clean up on unmount
        };
    }, [carouselApi]);

    const scrollToIndex = (index: number) => {
        carouselApi?.scrollTo(index);
    };

    return (
        <div className="relative  w-full mx-0">
            <div className="mt-5 px-20">

                <div className="flex items-center relative justify-between">

                    <div className="content-none h-[1px] absolute top-1/2 w-[97%] -z-10 border border-gray-400"></div>

                    {Array.from({ length: totalItems }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => scrollToIndex(index)}
                            className={`h-7 w-7 text-sm flex text-white font-bold cursor-pointer justify-center items-center rounded-full ${currentIndex === index ? "bg-red-600" : "bg-gray-400"}`}>{index + 1}</button>
                    ))}
                </div>

            </div>
            <Carousel
                setApi={setCarouselApi}
                opts={{ loop: true }}
                plugins={[
                    Autoplay({
                        delay: 2000,
                    })
                ]}
                className="w-full max-w-full h-full z-10 mt-5"
            >
                <CarouselContent>
                    {Array.from({ length: 6 }).map((_, index) => (
                        <CarouselItem key={index}>
                            <Card className=" p-0 rounded-none border-none">
                                <CardContent className="flex max-md:flex-col w-full max-md:w-[80%] pl-2 h-screen  max-h-[500px] max-md:h-full max-md:mx-auto">
                                    <div className="my-4 flex flex-col gap-3 justify-center">
                                        <h1 className="block text-3xl text-gray-900 max-md:text-center">Design Consultation</h1>
                                        <p className="text-xl text-gray-700 max-md:text-center">Share your ideas and floor plan to receive personalised 3D designs and an instant quote.</p>
                                    </div>

                                    <div className="h-full w-full">
                                        <img className="w-full h-full object-cover rounded-2xl" src={Design3d} alt="" />
                                    </div>

                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

            {/* Navigation Arrows */}

            {/* Navigation Dots */}

        </div>
    );
}