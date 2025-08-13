import React from 'react'
import kitchenIcon from "../../assets/kitchen-icon.png"

    const Card = ({title, imgSrc, keys}: {title: string, imgSrc: string, keys: number}) =>{
        return (
            <div className='inline-block relative px-4 cursor-pointer' key={keys}>
                <img src={imgSrc} alt="" />
                <p className='text-center'>{title}</p>
            </div>
        )
    }


const EndToEndSection = () => {
  return (
    <div className='flex items-center flex-col gap-3'>
        <h1 className='text-2xl font-bold'>End-to-end interior solutions</h1>
        <div className='grid grid-cols-4 max-sm:grid-cols-3 w-2/3 max-md:w-full gap-8'>
  
  {
    Array.from({length: 12}).map((_, index)=>(

            <Card title='storage and wardrobe' imgSrc={kitchenIcon} keys={index}  />

    ))
  }

        </div>
    </div>
  )
}

export default EndToEndSection