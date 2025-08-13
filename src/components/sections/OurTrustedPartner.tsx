import React from 'react'
import { TrustedPartnerInfinteCarosuel } from '../blocks/TrustedPartnerInfinteCarosuel'
import  Philips from "../../assets/Philips-logo.webp"
import Excel from "../../assets/excel-log.webp"
import Crompton from "../../assets/Crompton-logo.webp"
import Bosch from "../../assets/Bosch-logo.webp"
import Egger from "../../assets/Egger-logo.webp"
import Franke from "../../assets/Franke-logo.webp"
import Futura from "../../assets/Futura-logo.webp"
import Jaguar from "../../assets/Jaguar-logo.webp"
import Fevicol from "../../assets/fevicol-logo.webp"
import Faber from "../../assets/faber-logo.webp"
import Kaff from "../../assets/Kaff-logo.webp"
import Luker from "../../assets/Luker-logo.webp"
import Ruhe from "../../assets/Ruhe-logo.webp"
import Stylam from "../../assets/Stylam-logo.webp"


const trustedPartnerImg: {imgSrc: string}[] = [
    {imgSrc: Philips},
    {imgSrc: Crompton},
    {imgSrc: Excel},
    {imgSrc: Bosch},
    {imgSrc: Egger},
    {imgSrc: Franke},
    {imgSrc: Futura},
    {imgSrc: Jaguar},
    {imgSrc: Fevicol},
    {imgSrc: Ruhe},
    {imgSrc: Stylam},
    {imgSrc: Faber},
    {imgSrc: Kaff},
    {imgSrc: Luker},
]

const OurTrustedPartner = () => {
  return (
    <div className=' border-bottom'>
        <h1 className='text-center text-2xl font-bold my-3'>Our Trusted partner</h1>
        <TrustedPartnerInfinteCarosuel items={trustedPartnerImg} speed='normal' />
    </div>
  )
}

export default OurTrustedPartner