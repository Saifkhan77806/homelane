import { ASlideNum } from "../blocks/ASlideNum"
import { Button } from "../ui/button"

const DesignToMove = () => {
  return (
    <div className='h-fit my-10 border border-t-gray-400 pt-5'>
        <h1 className="text-center text-2xl font-bold">From Desing to Move-in</h1>
        <div>
            <ASlideNum />
        </div>
        
        <div className="flex justify-center my-4">
        <Button className="bg-red-600 hover:bg-red-800 cursor-pointer">
            BOOK FREE DESIGN SESSION
        </Button>
        </div>
    </div>
  )
}

export default DesignToMove