import creatifiedDesigner from "../../assets/certified-desginer.png"
import { Button } from "../ui/button"

interface CardType {
    title: string,
    subTitle: string,
    imgSrc: string,
    index?: number
}


const cardData: CardType[] = [
    {
        title: "Flat 10 year warranty",
        subTitle: "Choose interiors designed with superior quality material, leaving no room for defects.",
        imgSrc: creatifiedDesigner
    },
    {
        title: "45-days delivery*",
        subTitle: "Get beautiful interiors for your new home in just 45 days. That’s our delivery guarantee.",
        imgSrc: creatifiedDesigner
    },
    {
        title: "600+ design experts",
        subTitle: "Explore design ideas and co-create your dream home with our experienced designers",
        imgSrc: creatifiedDesigner
    },
    {
        title: "Post-installation service",
        subTitle: "Complete your design journey and get unwavering support from our dedicated care team.",
        imgSrc: creatifiedDesigner
    }
]


const Card = ({title, subTitle, imgSrc, index}: CardType) => {
    return (
        <div key={index} className="px-3.5 flex flex-col items-center my-4 gap-y-2">
            <div>
                <img src={imgSrc} width={72} height={72} alt="" />
            </div>
            <div className="text-center">
                <h1 className="text-xl text-neutral-900">{title}</h1>
                <p className="text-sm text-neutral-700">{subTitle}</p>
            </div>
        </div>
    )
}

const LabelSection = () => {
    return (
        <div className="w-full bg-gray-300 p-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-4">

                {
                    cardData.map((el, index)=>{
                        return (
                            <Card imgSrc={el.imgSrc} subTitle={el.subTitle} title={el.title} index={index} />
                        )
                    })
                }
            </div>
            <Button className="block mx-auto bg-red-600 hover:bg-red-700 my-3 transition cursor-pointer">BOOK FREE DESGIN SESSION</Button>
        </div>
    )
}

export default LabelSection