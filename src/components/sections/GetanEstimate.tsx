import MyBtn from '../blocks/MyBtn'
import thinkcalculation from './../../assets/thinkcalculation.jpg'


const GetanEstimate = () => {
  return (
    <div className="h-fit w-full pt-14 pb-8 border-2 border-t-0 border-l-0 border-r-0  border-b-gray-400 px-3">
            <h1 className="text-2xl font-bold text-center">Get an Estimate for your <span className="text-red-600">Home.</span></h1>
            <p className="text-center font-medium">Calculate the cost of doing up your home interiors now.</p>
            <div className="flex flex-col md:flex-row w-full gap-5 py-5">

                <div className="shadow-2xl max-md:shadow-md border relative border-gray-100 grid grid-cols-2 w-full h-96 p-8 gap-3">
                    <div className='size-28 '>
                        <img className='w-full h-full object-cover' src={thinkcalculation} alt="" />
                    </div>
                    <div className='w-28 h-28 mx-auto'>
                        <img className='w-full h-full object-cover ' src={thinkcalculation} alt="" />
                    </div>
                    <div className=''>
                        <h1 className='font-bold'>Full Home Interiors</h1>
                        <p>Get the estimate price for your full home interiors.</p>
                    </div>
                    <div className=''></div>
                    <div className=''>
                        <MyBtn text='Get Free Estimate' size='sm' />
                    </div>

                </div>
                <div className="shadow-2xl max-md:shadow-md border relative border-gray-100 grid grid-cols-2 w-full h-96 p-8 gap-3">
                    <div className='size-28 '>
                        <img className='w-full h-full object-cover' src={thinkcalculation} alt="" />
                    </div>
                    <div className='w-28 h-28 mx-auto'>
                        <img className='w-full h-full object-cover ' src={thinkcalculation} alt="" />
                    </div>
                    <div className=''>
                        <h1 className='font-bold'>Full Home Interiors</h1>
                        <p>Get the estimate price for your full home interiors.</p>
                    </div>
                    <div className=''></div>
                    <div className=''>
                        <MyBtn text='Get Free Estimate' size='sm' />
                    </div>

                </div>
            </div>
    </div>
  )
}

export default GetanEstimate