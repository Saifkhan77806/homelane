import { useEffect, useState } from 'react'
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '../ui/carousel';
// import Autoplay from 'embla-carousel-autoplay';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type {carosuelDatas} from '../../../types/offering'
import { useScreenSize } from '../../helperFunction/useScreenSize';

interface Props {
    topic: string;
    carosuelData: carosuelDatas[]
}




export const Slide4 = ({ topic, carosuelData }: Props) => {
    const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const ScreenSize = useScreenSize();



    

    useEffect(() => {
        if (!carouselApi) return;

        const updateCarouselState = () => {
            setCurrentIndex(carouselApi.selectedScrollSnap());
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
        <div className="w-full h-full relative">
            <p className='font-bold text-gray-600 ml-5 my-5'>{topic}</p>
            <Carousel
                setApi={setCarouselApi}
                opts={{ loop: true, slidesToScroll: ScreenSize == 'sm' ? 1 : ScreenSize == 'md' ? 2 : 4 }}
                className="w-full max-w-full h-full max-h-[500px] z-10"
            >
                <CarouselContent>
                    {carosuelData.map((el, index) => (
                        <CarouselItem key={index} className=" md:basis-1/2 lg:basis-1/4 ">
                            <div>
                                <Card className='p-0 border-none rounded-2xl overflow-hidden'>
                                    <CardContent className="p-0 relative shadow-2xl">
                                        <img src={el.img} className='w-full h-full object-cover rounded-2xl' alt="" />
                                        <div className='absolute left-0 bottom-0'>
                                            <p className='font-bold'>{el.title}</p>
                                            <p className='font-medium'>{el.subtitle}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

            {/* Navigation Dots */}
            
                <Button
                    onClick={() => scrollToIndex(currentIndex - 1)}
                    className="cursor-pointer rounded-full w-10 h-10 p-0 bg-[#2018186c] text-white shadow-none hover:bg-[#1f13138a] hover:font-bold absolute -left-4 top-1/2 z-10"
                >
                    <ChevronLeft className="size-8" strokeWidth={1} />
                </Button>
                <Button
                    onClick={() => scrollToIndex(currentIndex + 1)}
                    className="cursor-pointer rounded-full w-10 h-10 p-0 bg-[#2018186c] text-white shadow-none hover:bg-[#2018186c] hover:font-bold absolute -right-4 top-1/2 z-10"
                >
                    <ChevronRight className="size-8" strokeWidth={1} />
                </Button>
        </div>
    );
}













