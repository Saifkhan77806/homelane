import Design3d from "../../assets/3dDesign.jpg"
import invoiceTemplate from "../../assets/invoiceTemplate.jpg"
import kitchenInterior from "../../assets/kitchen-interior.jpg"
import talkingperson from "../../assets/talkingperson.svg"
import { Slide3 } from "../blocks/Slide3";

interface Props {
    imgSrc: string;
    alt?: string;
    text: string;
}

const cardData: Props[] = [
    {
        imgSrc: talkingperson,
        text: "Step 1. Meet Your Designer"
    },
    {
        imgSrc: kitchenInterior,
        text: "Step 2. Walkthrough of HomeLane Studio"
    },
    {
        imgSrc: Design3d,
        text: "Step 3. Free Personalised 3D Designs on SpaceCraft Pro"
    },
    {
        imgSrc: invoiceTemplate,
        text: "Step 4. Get an Instant Quote"
    }
]

export const StepCard = ({src, text, keep}: {src: string, text: string, keep: number}) => {
    return (
            <div className="w-1/5 h-80" key={keep}>
                    <img className="w-full h-full object-cover rounded-2xl shadow-md" src={src} alt="" />
                    <p className="text-center my-2">{text}</p>
                </div>
    )
}


const DesignSession = () => {
    return (
        <div className="h-fit py-10 my-4">
            <h1 className="text-center text-3xl font-bold">What is design Session ?</h1>
            <div className="flex gap-5 w-full h-fit flex-wrap justify-center py-5 max-md:hidden">
                
                {
                    cardData.map((item, index) => {
                        return (
                            <StepCard src={item.imgSrc} text={item.text} keep={index} />
                        )
                    })
                }
            </div>
            <div className="hidden max-md:block relative">
                <Slide3 carosuelData={cardData} />
            </div>

            

        </div>
    )
}

export default DesignSession