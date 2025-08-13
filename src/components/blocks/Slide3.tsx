import { useEffect, useState } from 'react'
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '../ui/carousel';
// import Autoplay from 'embla-carousel-autoplay';
import { Card, CardFooter } from '../ui/card';
import Autoplay from 'embla-carousel-autoplay';

interface Props {
    text: string;
    imgSrc: string;
}




export const Slide3 = ({ carosuelData }: { carosuelData: Props[] }) => {
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
        <div className="w-full h-80 my-4 px-5">
            <Carousel
                setApi={setCarouselApi}
                opts={{ loop: true, slidesToScroll: 1 }}
                plugins={[
                    Autoplay({
                        delay:3000
                    })
                ]}
                className="w-full max-w-full h-full max-h-[500px] z-10"
            >
                <CarouselContent className='h-full'>
                    {carosuelData.map((el, index) => (
                        <CarouselItem key={index} className="min-md:basis-1/3 shadow-md">
                            <div>
                                <Card className='p-0 border-none rounded-2xl h-full overflow-hidden'>
                                    <div className="h-80" key={index}>
                                        <img className="w-full h-full object-cover rounded-2xl shadow-md" src={el.imgSrc} alt="" />
                                    </div>
                                    <CardFooter>
                                        <p className="text-center">{el.text}</p>
                                    </CardFooter>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

            {/* Navigation Dots */}

            <div className="absolute -bottom-20 right-1/2 left-1/2 flex items-center justify-center z-20">

                <div className="flex items-center">

                    {Array.from({ length: totalItems }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => scrollToIndex(index)}
                            className={`w-3 h-3 mx-0.5 rounded-full ${currentIndex === index ? "relative shadow-[inset_0_0_0_0.2rem_var(--text-body)] bg-red-500  w-[1.5rem] h-3" : "bg-gray-500"
                                }`}
                        />
                    ))}
                </div>

            </div>
        </div>
    );
}













