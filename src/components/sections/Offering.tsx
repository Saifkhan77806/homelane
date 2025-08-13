import { Slide4 } from "../blocks/Slide4"
import {carosuelData} from '../../data/offering'

const Offering = () => {
  return (
    <>

        <div className="h-1/4 px-4">
        <Slide4 topic="End-to-end offerings" carosuelData={carosuelData} />
        </div>
        <div className="h-1/4 px-4">
        <Slide4 topic="End-to-end offerings" carosuelData={carosuelData} />
        </div>
        <div className="h-1/4 px-4">
        <Slide4 topic="End-to-end offerings" carosuelData={carosuelData} />
        </div>
        <div className="h-1/4 px-4">
        <Slide4 topic="End-to-end offerings" carosuelData={carosuelData} />
        </div>

    </>
  )
}

export default Offering