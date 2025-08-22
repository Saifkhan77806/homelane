import { Facebook, Instagram, Linkedin, Mail, Phone, Youtube } from 'lucide-react'
import React, { useState } from 'react'
import { motion } from "motion/react"


// data for footer navlink

const homelaneNavLinks = {
    title: "HomeLane",
    links: [
        "Team",
        "Join Us",
        "The Design Journal",
        "Get Estimate",
        "Privacy Policy",
        "Refer and Earn",
        "Tech@homelane.com",
        "Book Virtual Meeting",
        "Modular Kitchen Cost Calculator",
        "Kids Bedroom",
        "Business Interiors",
        "Disclaimer",
    ]
}

const designJournalLinks = {
    title: "The Design Journal",
    links: [
        "Buying Guides",
        "Home Decor Ideas",
        "Interior Design Ideas",
        "Interiors By HomeLane",
        "Interior Design Tips",
    ]
}

const customersupportLinks = {
    title: "Customer Support",
    links: [
        "Customer Support",
        "Raise issue",
        "My issues",
        "Contact us",
        "Privacy Policy",
        "Terms of Use",
        "Terms & Conditions",
        "FAQs",
    ]
}

enum SocialEnum {
    SERVICE = "SERVICE",
    BLOG = "BLOG",
    READ = "READ"
}

enum DesignEnum {
    INTERIOR = "INTERIOR",
    KITCHENS = "KITCHENS",
    WARDROBE = "WARDROBE"
}

const servicesLinks = [
    "Home Interior Designs",
    "Modular Kitchen Designs",
    "Wardrobe Designs",
    "Living Room Designs",
    "Kids Bedroom Design",
    "Space Saving Furniture",
    "Pooja Room Designs",
    "Home Office Designs",
    "Bathroom Designs",
    "Foyer Designs",
    "Lighting Design"
];

const blogsLinks = [
    "Home Interiors On EMI",
    "L Shaped Kitchen Designs",
    "Master Bedroom Design Ideas",
    "Living Room Themes",
    "Wardrobe Dimensions",
    "False Ceiling Colour Combinations",
    "Acrylic Vs Laminate",
    "Dressing Room Design Ideas",
    "Villa Interior Design Ideas",
    "Bungalow Interior Design Ideas",
    "Pooja Unit Designs",
    "Modular Cabinet Materials",
    "Bathroom Vanity Designs",
    "Dressing Table Designs",
    "Space Saving Furniture Guide",
    "Types Of Modular Kitchen Layouts"
]

const readLinks = [
    "Step-by-Step Interior Planning For Homeowners",
    "Interior Design Cost Guide",
    "Simple Kitchen Designs",
    "Wall Designs For Living Room",
    "Wardrobe Colour Combinations",
    "Bedroom Wall Design Ideas",
    "Kids Bedroom Colour Ideas",
    "Interior Design Ideas For Small Homes",
    "10 Colour Combinations With Black",
    "False Ceiling Designs For Living Room",
    "Open Kitchen Design Ideas",
    "Closed Balcony Design Ideas",
    "Coffee Table Decor For Living Room",
    "Colour Combinations For Kitchen",
    "Luxury Kitchen Design Trends",
    "Colour Combinations For Living Room",
    "Sitemap"
]

const socialData = {
    "SERVICE": servicesLinks,
    "BLOG": blogsLinks,
    "READ": readLinks
}

const interiorLinks = [
    "Interior Designers in Ahmedabad",
    "Interior Designers in Bengaluru",
    "Interior Designers in Bhubaneswar",
    "Interior Designers in Chandigarh",
    "Interior Designers in Chennai",
    "Interior Designers in Coimbatore",
    "Interior Designers in Dimapur",
    "Interior Designers in Ghaziabad",
    "Interior Designers in Gurgaon",
    "Interior Designers in Guwahati",
    "Interior Designers in Hyderabad",
    "Interior Designers in Jaipur",
    "Interior Designers in Jamshedpur",
    "Interior Designers in Karimnagar",
    "Interior Designers in Kochi",
    "Interior Designers in Kolkata",
    "Interior Designers in Lucknow",
    "Interior Designers in Madurai",
    "Interior Designers in Mangalore",
    "Interior Designers in Mumbai",
    "Interior Designers in Mysore",
    "Interior Designers in Nagpur",
    "Interior Designers in Nashik",
    "Interior Designers in New Delhi",
    "Interior Designers in Nizamabad",
    "Interior Designers in Noida",
    "Interior Designers in Patna",
    "Interior Designers in Pune",
    "Interior Designers in Ranchi",
    "Interior Designers in Salem",
    "Interior Designers in Shimoga",
    "Interior Designers in Siliguri",
    "Interior Designers in Surat",
    "Interior Designers in Thane",
    "Interior Designers in Tirupati",
    "Interior Designers in Trichy",
    "Interior Designers in Trivandrum",
    "Interior Designers in Vijayawada",
    "Interior Designers in Visakhapatnam",
    "Interior Designers in Warangal"
]

const KitchensLinks = [
    "Modular Kitchen Designs in Ahmedabad",
    "Modular Kitchen Designs in Bengaluru",
    "Modular Kitchen Designs in Bhubaneswar",
    "Modular Kitchen Designs in Chandigarh",
    "Modular Kitchen Designs in Chennai",
    "Modular Kitchen Designs in Coimbatore",
    "Modular Kitchen Designs in Dimapur",
    "Modular Kitchen Designs in Ghaziabad",
    "Modular Kitchen Designs in Gurgaon",
    "Modular Kitchen Designs in Guwahati",
    "Modular Kitchen Designs in Hyderabad",
    "Modular Kitchen Designs in Jaipur",
    "Modular Kitchen Designs in Jamshedpur",
    "Modular Kitchen Designs in Karimnagar",
    "Modular Kitchen Designs in Kochi",
    "Modular Kitchen Designs in Kolkata",
    "Modular Kitchen Designs in Lucknow",
    "Modular Kitchen Designs in Madurai",
    "Modular Kitchen Designs in Mangalore",
    "Modular Kitchen Designs in Mumbai",
    "Modular Kitchen Designs in Mysore",
    "Modular Kitchen Designs in Nagpur",
    "Modular Kitchen Designs in Nashik",
    "Modular Kitchen Designs in New Delhi",
    "Modular Kitchen Designs in Nizamabad",
    "Modular Kitchen Designs in Noida",
    "Modular Kitchen Designs in Patna",
    "Modular Kitchen Designs in Pune",
    "Modular Kitchen Designs in Ranchi",
    "Modular Kitchen Designs in Salem",
    "Modular Kitchen Designs in Shimoga",
    "Modular Kitchen Designs in Siliguri",
    "Modular Kitchen Designs in Surat",
    "Modular Kitchen Designs in Thane",
    "Modular Kitchen Designs in Tirupati",
    "Modular Kitchen Designs in Trichy",
    "Modular Kitchen Designs in Trivandrum",
    "Modular Kitchen Designs in Vijayawada",
    "Modular Kitchen Designs in Visakhapatnam",
    "Modular Kitchen Designs in Warangal"
]

const wardrobeLinks = [
    "Wardrobe Designs in Ahmedabad",
    "Wardrobe Designs in Bengaluru",
    "Wardrobe Designs in Bhubaneswar",
    "Wardrobe Designs in Chandigarh",
    "Wardrobe Designs in Chennai",
    "Wardrobe Designs in Coimbatore",
    "Wardrobe Designs in Dimapur",
    "Wardrobe Designs in Ghaziabad",
    "Wardrobe Designs in Gurgaon",
    "Wardrobe Designs in Guwahati",
    "Wardrobe Designs in Hyderabad",
    "Wardrobe Designs in Jaipur",
    "Wardrobe Designs in Jamshedpur",
    "Wardrobe Designs in Karimnagar",
    "Wardrobe Designs in Kochi",
    "Wardrobe Designs in Kolkata",
    "Wardrobe Designs in Lucknow",
    "Wardrobe Designs in Madurai",
    "Wardrobe Designs in Mangalore",
    "Wardrobe Designs in Mumbai",
    "Wardrobe Designs in Mysore",
    "Wardrobe Designs in Nagpur",
    "Wardrobe Designs in Nashik",
    "Wardrobe Designs in New Delhi",
    "Wardrobe Designs in Nizamabad",
    "Wardrobe Designs in Noida",
    "Wardrobe Designs in Patna",
    "Wardrobe Designs in Pune",
    "Wardrobe Designs in Ranchi",
    "Wardrobe Designs in Salem",
    "Wardrobe Designs in Shimoga",
    "Wardrobe Designs in Siliguri",
    "Wardrobe Designs in Surat",
    "Wardrobe Designs in Thane",
    "Wardrobe Designs in Tirupati",
    "Wardrobe Designs in Trichy",
    "Wardrobe Designs in Trivandrum",
    "Wardrobe Designs in Vijayawada",
    "Wardrobe Designs in Visakhapatnam",
    "Wardrobe Designs in Warangal"
]

const designData = {
    "INTERIOR": interiorLinks,
    "KITCHENS": KitchensLinks,
    "WARDROBE": wardrobeLinks
}


const Footer = () => {

    const [social, setSocial] = useState<SocialEnum>(SocialEnum.SERVICE)
    const [design, setDesign] = useState<DesignEnum>(DesignEnum.INTERIOR)

    return (
        <div className='pt-4'>

            <div className='flex flex-col md:flex-row md:border-bottom'>
                {/* image container with links */}
                <div className='flex flex-col gap-y-5 border-bottom md:border-none py-6 flex-1'>
                    {/* image */}
                    <div className='block'>
                        <img className='mx-auto' src="https://super.homelane.com/hllogosvg.svg" alt="" />
                    </div>

                    {/* links */}
                    <ul className='flex justify-center gap-x-4 cursor-pointer '>
                        <li className='p-2 rounded-full bg-red-600 text-white'><Instagram /></li>
                        <li className='p-2 rounded-full bg-red-600 text-white'><Youtube /></li>
                        <li className='p-2 rounded-full bg-red-600 text-white'><Linkedin /></li>
                        <li className='p-2 rounded-full bg-red-600 text-white'><Facebook /></li>
                    </ul>
                </div>

                {/* navlink, email link and copy right */}

                {/* footer navlinks */}
                <div className='px-4 flex my-5 border-bottom md:border-none flex-1'>
                    {/* container 1 */}
                    <div className='flex-1'>
                        <h1 className='text-[16px] font-bold my-4'>{homelaneNavLinks.title}</h1>
                        <ul className='space-y-5'>
                            {
                                homelaneNavLinks.links.map((el, index) => {
                                    return <li key={index} className='text-sm cursor-pointer hover:text-red-600 transition hover:underline'>{el}</li>
                                })
                            }
                        </ul>
                    </div>

                    {/* container 2 */}
                    <div className='flex-1 space-y-9'>
                        <div>
                            <h1 className='text-[16px] font-bold my-4'>{customersupportLinks.title}</h1>
                            <ul className='space-y-5'>
                                {
                                    customersupportLinks.links.map((el, index) => {
                                        return <li key={index} className='text-sm cursor-pointer hover:text-red-600 transition hover:underline'>{el}</li>
                                    })
                                }
                            </ul>
                        </div>

                        <div>
                            <h1 className='text-[16px] font-bold my-4'>{designJournalLinks.title}</h1>
                            <ul className='space-y-5'>
                                {
                                    designJournalLinks.links.map((el, index) => {
                                        return <li key={index} className='text-sm cursor-pointer hover:text-red-600 transition hover:underline'>{el}</li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>

                </div>
            </div>


            {/* footer Contacts and copy right */}
            <div className='flex flex-col md:flex-row-reverse md:justify-evenly md:border-t border-gray-300'>
                <div className='flex justify-center gap-x-5 flex-col items-center  border-bottom pb-4 md:pt-2  min-[400px]:flex-row md:flex-col '>
                    <span className='flex gap-x-2'><Mail /> hello@homelane.com</span>
                    <span className='flex gap-x-2'><Phone /> 1800-102-4663</span>
                </div>
                <div className='flex justify-center border-bottom items-center py-2'>
                    <p className='text-center text-gray-500 md:border-none'>Copyright © Homevista Decor and Furnishings Private Limited. All rights reserved.</p>
                </div>
            </div>

            {/* footer for links of interior desgin types and interior design for places */}
            <div className='bg-gray-200'>
                <div className='flex justify-between border-bottom min-[]:justify-start max-sm:text-sm max-w-xl'>
                    <span className='text-center p-2 min-[480px]:p-5 hover:bg-gray-600/5 transition-all  relative cursor-pointer' onClick={() => setSocial(SocialEnum.SERVICE)}>Popular Services
                        {/* border bottom */}
                        {social === SocialEnum.SERVICE && <motion.span layoutId='hover' className='absolute inset-x-0 bottom-0 h-0.5 bg-black'></motion.span>}
                    </span>
                    <span className='text-center p-2 min-[480px]:p-5 hover:bg-gray-600/5 transition-all relative cursor-pointer' onClick={() => setSocial(SocialEnum.BLOG)}>Popular Blogs
                        {/* border bottom */}
                        {social === SocialEnum.BLOG && <motion.span layoutId='hover' className='absolute inset-x-0 bottom-0 h-0.5 bg-black'></motion.span>}
                    </span>
                    <span className='text-center p-2 min-[480px]:p-5 hover:bg-gray-600/5 transition-all relative cursor-pointer' onClick={() => setSocial(SocialEnum.READ)}>You Might Also like to read
                        {/* border bottom */}
                        {social === SocialEnum.READ && <motion.span layoutId='hover' className='absolute inset-x-0 bottom-0 h-0.5 bg-black'></motion.span>}
                    </span>
                </div>
                {/* social links */}
                <div className='flex flex-wrap p-4 '>
                    {
                        socialData[social].map((items, index) => {
                            return <span className='text-gray-500 hover:text-red-600 text-sm cursor-pointer transition-colors leading-9' key={index}>
                                {items} <span className='mx-2'>|</span>
                            </span>
                        })
                    }

                </div>

            </div>
            <div className='bg-gray-200'>
                <div className='flex justify-between border-bottom min-[]:justify-start max-sm:text-sm max-w-xl'>
                    <span className='text-center p-2 min-[480px]:p-5 hover:bg-gray-600/5 transition-all  relative cursor-pointer' onClick={() => setDesign(DesignEnum.INTERIOR)}>Interior Design
                        {/* border bottom */}
                        {design === DesignEnum.INTERIOR && <motion.span layoutId='hover2' className='absolute inset-x-0 bottom-0 h-0.5 bg-black'></motion.span>}
                    </span>
                    <span className='text-center p-2 min-[480px]:p-5 hover:bg-gray-600/5 transition-all relative cursor-pointer' onClick={() => setDesign(DesignEnum.KITCHENS)}>Modular Kitchens
                        {/* border bottom */}
                        {design === DesignEnum.KITCHENS && <motion.span layoutId='hover2' className='absolute inset-x-0 bottom-0 h-0.5 bg-black'></motion.span>}
                    </span>
                    <span className='text-center p-2 min-[480px]:p-5 hover:bg-gray-600/5 transition-all relative cursor-pointer' onClick={() => setDesign(DesignEnum.WARDROBE)}>Wardrobe Design
                        {/* border bottom */}
                        {design === DesignEnum.WARDROBE && <motion.span layoutId='hover2' className='absolute inset-x-0 bottom-0 h-0.5 bg-black'></motion.span>}
                    </span>
                </div>
                {/* social links */}
                <div className='flex flex-wrap p-4 '>
                    {
                        designData[design].map((items, index) => {
                            return <span className='text-gray-500 hover:text-red-600 text-sm cursor-pointer transition-colors leading-9' key={index}>
                                {items} <span className='mx-2'>|</span>
                            </span>
                        })
                    }

                </div>
                <div className='p-4'>
                    <p className='text-gray-400'>
                        At HomeLane, we bring together functionality and aesthetics to provide homeowners with customised and efficient home designs. Our designers specialise in home interior designs and home décor, and help you create a personalized home to suit your lifestyle. From sophisticated living room designs to space-saving and clutter-free interior designs, we are here to help you find the best home decor and home design to match your needs and style. All our products come with up to 10-year warranty along with unwavering support and maintenance services. Explore thousands of inspiring interior designs or get a free estimate – it's all here on HomeLane.com, your one stop for complete home interiors.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Footer