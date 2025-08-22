import ReferSection from "../blocks/ReferSection"
import { HomeCarasuel } from "../HomeCarasuel"
import DesignSession from "./DesignSession"
import DesignToMove from "./DesignToMove"
import GetanEstimate from "./GetanEstimate"
import LuxuryEntry from "./LuxuryEntry"
import Offering from "./Offering"
import TopiNahi from "./TopiNahi"
import { WhyChooseUs } from "./WhyChooseUs"
import Referus from "../../assets/refer_us.jpg"
import EndToEndSection from "./EndToEndSection"
import ExperineceThatYouWillLove from "./ExperineceThatYouWillLove"
import OurTrustedPartner from "./OurTrustedPartner"
import FAQ from "./FAQ"
import LabelSection from "./LabelSection"
import Footer from "./Footer"


const Home = () => {
  return (
    <div className="w-full grid grid-cols-1">
        <div className="">
        <HomeCarasuel />
        </div>
        <div className="px-7">
        <WhyChooseUs />
        </div>
        <div className="flex flex-col gap-3">
        <Offering />
        </div>
          <GetanEstimate />
          <DesignSession />
          <DesignToMove />
          <LuxuryEntry />
          <TopiNahi />
          <ReferSection title="Loved us? Now refer us!" subtitle="Refer and earn ₹ 10,000 every time your friends try HomeLane." imgSrc={Referus} />
          <EndToEndSection />
          <ReferSection title="Loved us? Now refer us!" subtitle="Refer and earn ₹ 10,000 every time your friends try HomeLane." imgSrc={Referus} />
          <ExperineceThatYouWillLove />
          <OurTrustedPartner />
          <FAQ />
          <LabelSection />
          <Footer />


    </div>
  )
}

export default Home