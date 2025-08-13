import GoogleImg from '../../assets/google.png'
import LuxuryHome from "../../assets/luxury-entry.jpg"
import AwardImg from "../../assets/award-img.jpg"
import Reality from "../../assets/reality-news.webp"
import Inc24 from "../../assets/inc42-news.webp"
import TOI from "../../assets/toi-news.webp"
import LiveMint from "../../assets/livemint-news.webp"

const RealityImg = [
    {img: Reality},
    {img: Inc24},
    {img: TOI},
    {img: LiveMint}
]
const Rating = () => {
    return (
        <div className="flex items-center">
            <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
        </div>

    )
}

const ExperineceThatYouWillLove = () => {
    return (
        <div className='border-bottom'>
            <h1 className='text-center font-bold text-2xl mb-5'>Experience That You Will Love.</h1>
            <div className='px-5 flex flex-col md:flex-row-reverse gap-x-5 gap-y-3'>
                {/* container 1 */}
                <div className='space-y-2 md:w-1/2 flex flex-col'>
                    {/* rating container */}
                    <div className='flex items-center gap-x-2'>
                        {/* google img */}
                        <div>
                            <img width={35} height={35} src={GoogleImg} alt="" />
                        </div>
                        <div>
                            <p>4.5/5 <span>(35000+ Reviews)</span></p>
                            <Rating />
                        </div>
                    </div>
                    <p>Mumbai | Pune | Punjab | Delhi | Bangalore | Uttar pradesh | Mumbai | Pune | Punjab | Delhi | Bangalore | Uttar pradesh | Mumbai | Pune | Punjab | Delhi | Bangalore | Uttar pradesh</p>
                    <div className='flex items-center'>
                        <div className='w-[60%] rounded-2xl'>
                            <img src={AwardImg} className='w-full h-full rounded-2xl' alt="" />
                        </div>
                        <div className=''>
                            <p className='text-center font-semibold italic'>Awarded Economic Times
                                <br />
                                Best Brands 2020</p>
                        </div>
                    </div>
                </div>

                {/* container 2 */}
                <div className='space-y-2 columns-2 md:w-1/2'>
                    {
                        Array.from({ length: 4 }).map(() => {
                            return (
                                <div className='relative'>
                                    <img src={LuxuryHome} className='rounded-2xl' alt="" />
                                    <div className='absolute text-white bg-gray-300 w-full text-center bottom-0 rounded-b-2xl '>Mumbai</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className='my-6 font-bold'>
                <h1 className='text-center text-2xl'>We are making news.</h1>
                <div className='grid  my-5 grid-cols-1 gap-y-8 place-content-center md:grid-cols-2 lg:grid-cols-4
                 items-center justify-items-center'>
                    {
                        RealityImg.map((el, index) => {
                            return (
                                <div key={index} className='cursor-pointer hover:shadow-md rounded-2xl p-2 w-fit'>
                                    <img src={el.img} className='rounded-2xl' alt="" />
                                </div>
                            )

                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ExperineceThatYouWillLove