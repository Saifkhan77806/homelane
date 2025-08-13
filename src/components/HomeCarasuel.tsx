"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "./ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import HeroSec from "./sections/HeroSec";
import HeroSec2 from "./sections/HeroSec2";
import Autoplay from "embla-carousel-autoplay";

export function HomeCarasuel() {
    const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

    const img: readonly [string, string, string] = [
        "https://super.homelane.com/homepage/slider-banner/slider_banner_homepage/home-interior-designs-homelane-personalized-solutions.avif",
        "https://super.homelane.com/homepage/slider-banner/slider_banner_homepage/best-home-interior-design-solutions-homelane.avif",
        "https://super.homelane.com/homepage/slider-banner/slider_banner_homepage/interior-design-service-quality-finishes-no-hidden-costs.avif"
    ];


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
        <div className="relative h-full max-h-screen w-full mx-0">
            <Carousel
                setApi={setCarouselApi}
                opts={{ loop: true }}
                plugins={[
                    Autoplay({
                        delay: 2000,
                    })
                ]}
                className="w-full max-w-full max-h-[500px] z-10"
            >
                <CarouselContent>
                    {Array.from({ length: 3 }).map((_, index) => (
                        <CarouselItem key={index}>
                            <Card className="bg-gray-400 p-0 rounded-none border-none">
                                <CardContent className="flex w-full  p-0 items-center justify-center h-screen  max-h-[500px] ">
                                    {
                                        index === 0 && (
                                            <HeroSec src={img[index]} />
                                        )
                                    }
                                    {
                                        index === 1 && (
                                            <HeroSec2 src={img[index]} text={<p className="text-center text-5xl max-sm:text-4xl place-self-start mb-2 ">
                                                <span className="font-semibold italic">
                                                    No hidden costs!
                                                </span>
                                                <br />
                                                Get an all-inclusive quote, instantly.
                                            </p>} btnTxt="Get a FREE estimate" />
                                        )
                                    }
                                    {
                                        index === 2 && (
                                            <HeroSec2 src={img[index]} text={<p className="text-center text-5xl max-sm:text-4xl place-self-start mb-2 font-semibold ">
                                                Get a <span className="font-thin italic">personalised</span>
                                                <br />
                                                store walkthrough.
                                            </p>} btnTxt="Store Locator" />
                                        )
                                    }
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

            {/* Navigation Arrows */}

            {/* Navigation Dots */}
            <div className="absolute bottom-14 left-0 right-0 flex items-center justify-center z-20">
                <Button
                    onClick={() => scrollToIndex(currentIndex - 1)}
                    className="cursor-pointer rounded-full w-10 h-10 p-0 bg-[#d9d9d926] text-white shadow-none hover:bg-[#d9d9d96e] hover:font-bold max-md:hidden"
                >
                    <ChevronLeft className="size-8" strokeWidth={1} />
                </Button>
                <div className="flex items-center">

                    {Array.from({ length: totalItems }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => scrollToIndex(index)}
                            className={`w-3 h-3 mx-0.5 rounded-full ${currentIndex === index ? "relative shadow-[inset_0_0_0_0.2rem_var(--text-body)] bg-red-500  w-[1.5rem] h-3" : "border-2 border-gray-300"
                                }`}
                        />
                    ))}
                </div>
                <Button
                    onClick={() => scrollToIndex(currentIndex + 1)}
                    className="cursor-pointer rounded-full w-10 h-10 p-0 bg-[#d9d9d926] text-white shadow-none hover:bg-[#d9d9d96e] hover:font-bold max-md:hidden"
                >
                    <ChevronRight className="size-8" strokeWidth={1} />
                </Button>
            </div>
        </div>
    );
}