import React from 'react'
import { AccordianCard } from '../blocks/AccordianCard'

const FaqQuesAns: { question: string, answer: React.ReactNode }[] = [
    {
        question: "How can I get started with HomeLane?",
        answer: (
            <>
                <p>
                    "To get started with HomeLane, all you need to do is to fill up the form on our Home Page. Give us your name, email and mobile number and tell us where youre from."
                </p>
            </>
        ),
    },
    {
        question: "What is the timeline for completing a project with HomeLane?",
        answer: (<>
            <p>
                HomeLane typically completes a standard home interior project in 45 days.
            </p>
            <p>45 days delivery guarantee on end to end modular interiors. Additional days would be added if there are other home decor services included.</p>
            <p>Complex projects which include loose furniture, wall art, home automation, textured paint and non-standard civil or electrical work will take longer, and the schedule will be fixed based on the scope of work that is called for.</p>
        </>)
    },
    {
        question: "How does the HomeLane interior design process work?",
        answer: (
            <>
                <p>HomeLane offers a hassle-free design process with two consultation options: online or in-person at any of our Experience Centres. Here's how it works!</p>
                <p>
                    Step 1: Consultation
                    <br />
                    Option 1: Online Consultation
                    <br />
                    Youll fill out a form, and get assigned a designer who will virtually interact with you at the agreed upon date and time. They will take down your requirements, understand your floor plan, and get details on your taste preferences and your budget.</p>
                <p>Depending on your requirements, they might show you various design possibilities over the call, or could also call you back for a second virtual meeting. Youll be shown 3D design options along with the corresponding budget, and can move around the cabinets, and change the finishes and materials till you arrive at a HomeLane interior design that you absolutely love.</p>
                <p>
                    Option 2: In-Person Consultation at Experience Centres
                    <br />
                    Youll meet your HomeLane interior designer at the agreed upon time and place. The meeting will go the same way as the virtual meeting, with the added advantage of getting to explore kitchen units, wardrobes, and other elements. You will be able to see, touch and feel the various materials and finishes and can experience how the hardware works. You can choose from a wide range of styles, materials, and finishes to match your taste and budget.

                    Option 2: In-Person Consultation at Experience Centres

                    Youll meet your HomeLane interior designer at the agreed upon time and place. The meeting will go the same way as the virtual meeting, with the added advantage of getting to explore kitchen units, wardrobes, and other elements. You will be able to see, touch and feel the various materials and finishes and can experience how the hardware works. You can choose from a wide range of styles, materials, and finishes to match your taste and budget.
                    <br />
                    Here, too, you will be shown 3D views and detailed cost breakdowns, and can make changes till you arrive at a design and costing that works well for you.
                </p>
                <p>
                    Step 2: Agreement
                    <br />
                    Youll sit down with a HomeLane Sales Manager, review the terms and conditions, get completion timelines and material specifications, and finalise the deal. You will be asked to pay an advance once you are completely satisfied with every single detail. You will sign a final agreement with all the details  design, specifications, timeline, and payment schedule.
                </p>
                <p>
                    Step 3: Execution
                    <br />
                    The HomeLane interior design team will visit your site and take detailed measurements before commencing the actual construction.
                </p>
                <p>The project will commence, and modular cabinets and furniture will be cut, sized and finished at the factory. You will be contacted for stage-wise payments (if agreed upon) at the appropriate time. The team will manage the project with quality checks at every step.</p>
                <p>Once the work at the factory is completed, the interior design service team will complete the installation at your home. Step 4: Move In! Once the HomeLane interior project is complete (typically 45 days after finalising the design),you can make the final payment and move into your dream home!</p>
            </>
        )
    },
    {
        question: "Can I visit a HomeLane showroom to see your products and designs in person?",
        answer: (
            <>
                <p>
                    Yes, absolutely! Our Experience Centres are exactly what you'd expect from a showroom – a place to see and interact with our products and designs in person. We actually call them Experience Centres because they offer more than just a static display. Come visit one to:
                </p>
                <ul className='text-gray-400 space-y-3'>
                    <li>See and feel materials: Our Experience Centres have displays that allow you to get up personal with HomeLane kitchen designs, wardrobes, and other design elements.</li>
                    <li>Explore design possibilities: Meet with a HomeLane interior designer who can showcase a variety of styles and help you brainstorm ideas for your own space.</li>
                </ul>
            </>
        )
    },
    {
        question: "What are the end-to end-services offered by HomeLane?",
        answer: (
            <>
                <p>From the start of your home interior journey till you move in, HomeLane is with you every step of the way! Heres what you can expect:</p>
                <ul className='text-gray-400 space-y-3'>
                    <li>Consultation and Design: We provide both free online consultations and in-person consultations at our Experience Centres. Talented HomeLane interior designers will work with you to understand your vision and preferences, using SpaceCraft software to create real-time 3D designs that help you to visualise exactly what you will get.</li>
                    <li>Budgeting and Material Choices: HomeLane helps you stay on track financially with cost estimates provided throughout the design process. We also display a wide variety of materials and finishes at our Experience Centres to suit your taste and budget. Youll be able to see, touch and feel our model mockup kitchens, bathrooms, bedrooms and more, and can interact with each space to see how everything works.</li>
                    <li>Execution and Quality Checks: Once you've finalised the design and the budget, our team manages the entire project execution. This includes procurement of materials, installation by experienced professionals, and rigorous quality checks at every step to ensure everything meets our standards.</li>
                </ul>
                <p>With HomeLane, youll get the home décor services youve always dreamed about—on time and within your
                    budget!</p>
            </>
        )
    },
    {
        question: "Are your designs customisable?",
        answer: (
            <>
                <p>While we do have hundreds of stylish designs in our catalogue, you need not opt for any of them! HomeLane services and designs are completely customisable to suit your sense of style and your needs. Well get into the nitty gritty of your lifestyle, your tastes and your budget, and will custom design a home interior that is just perfect for you and your family!</p>
            </>
        )
    }

]


const FAQ = () => {

    return (
        <div className='mt-4 px-3 md:px-9 border-bottom py-5'>
            <h1 className='text-center text-2xl font-bold'>Frequently Asked Questions.</h1>
            <AccordianCard accordionData={FaqQuesAns}  />
        </div>
    )
}

export default FAQ