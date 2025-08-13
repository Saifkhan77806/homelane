import { Button } from '../ui/button'

const ReferSection = ({title, subtitle, imgSrc}: {title: string, subtitle: string, imgSrc: string}) => {
  return (
    <div className='flex justify-evenly max-md:flex-col w-full h-fit py-6 border border-t-gray-300 border-b-gray-300 border-l-0 border-r-0 my-12 items-center pl-12 pr-6 gap-x-4'>
        <div className="flex flex-col gap-y-2">
            <h1 className="text-4xl font-light">{title}</h1>
            <p className="text-xl">{subtitle}</p>
            <div>
            <Button className="my-3 max-md:w-full bg-red-600">Read More...</Button>
            </div>
        </div>
        <div className="h-full">
            <img className="w-60 h-60 object-cover rounded-xl" src={imgSrc} alt="" />
        </div>
        
    </div>
  )
}

export default ReferSection