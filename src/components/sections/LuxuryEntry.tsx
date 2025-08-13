import luxuryEntry from "../../assets/luxury-entry.jpg"
import { Button } from "../ui/button"

const LuxuryEntry = () => {
    return (
        <div className="w-full h-screen relative">
            <img src={luxuryEntry} className="w-full h-full object-cover" alt="" />
            <div className=" max-md:absolute right-0 top-1/2 -translate-y-1/2 w-full h-56  bg-gray-200 hidden max-md:flex flex-col items-center justify-center gap-y-2 ">
                <h1 className="text-center font-thin tracking-wide">Introducing</h1>
                <h2 className="text-xl text-center font-bold">Luxury Entry</h2>
                <p className="text-sm text-center">Experience the epitome of luxury and sophistication with our
                    bespoke entry systems.</p>
                <Button size={"lg"} className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-
                2 px-4 rounded">Learn More</Button>
            </div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-56  bg-gray-200 flex flex-col items-center justify-center gap-y-2 max-md:hidden">
                <h1 className="text-center font-thin tracking-wide">Introducing</h1>
                <h2 className="text-xl text-center font-bold">Luxury Entry</h2>
                <p className="text-sm text-center">Experience the epitome of luxury and sophistication with our
                    bespoke entry systems.</p>
                <Button size={"lg"} className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-
                2 px-4 rounded">Learn More</Button>
            </div>
        </div>
    )
}

export default LuxuryEntry