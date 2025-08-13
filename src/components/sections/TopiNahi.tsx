import React from 'react'
import { Slide4 } from '../blocks/Slide4'
import { carosuelData } from '../../data/offering'

const TopiNahi = () => {
    return (
        <div className='py-3'>
            <h1 className='my-2 font-bold text-center text-2xl'>Topi nahi Pehenaya. Bas Ghar Sajaya.</h1>
            <div className='flex flex-col gap-3'>
                <div className="h-1/4 px-4">
                    <Slide4 topic="Suniye Hamare customer ki juban may" carosuelData={carosuelData} />
                </div>
            </div>
        </div>
    )
}

export default TopiNahi