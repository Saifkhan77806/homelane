import { Book3dDesign } from "../form/Book3dDesign"
import { Button } from "../ui/button"


const HeroSec = ({ src }: { src: string }) => {
    return (
        <div className="w-full h-full relative">
            <div className="absolute top-0 left-0 w-full h-full flex max-md:flex-col py-12 px-2.5 text-white">
                <div className="col-span-3 w-1/2 max-md:w-full max-md:text-center">
                    <p className="text-5xl">Interior you'll love. <br />

                        <span className="font-thin">
                            Without the stress!
                        </span>
                    </p>
                </div>

                <div className="col-span-1 relative w-1/2 max-md:w-full max-md:absolute max-md:bottom-4 max-md:px-5 max-md:self-center">
                    <Book3dDesign />
                    <Button className="hidden max-md:w-full max-md:block bg-red-600 mx-auto">
                        Book Your 3d Desgin  
                    </Button>
                </div>
            </div>
            <img src={src} className="w-full h-full object-cover" alt="" />
        </div>
    )
}

export default HeroSec