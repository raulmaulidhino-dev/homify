import { useState } from "react"

import ArrowDownIcon from "../assets/icons/arrow-down-icon.webp"

const FAQ_Accordion = ({question="Question?", answer="Answer is ..."}) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    }

    return (
        <section data-aos="fade-right" data-aos-easing="ease-in-sine">
            <section className="question border-2 rounded-[14px] p-6 flex justify-between items-center gap-4 shadow-lg shadow-slate-300" onClick={ toggleAccordion }>
                <section className="text-sm md:text-base question-text font-bold">
                    { question }
                </section>
                <div className="shrink-0 w-8">
                    <img 
                        src={ ArrowDownIcon }
                        className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    />
                </div>
            </section>
            <section className={`text-sm mt-[15px] bg-transparent ${isOpen ? 'animate-expand' : 'animate-shrink max-h-0 opacity-0'}`}>
                <p className="p-4">{ answer }</p>
            </section>
        </section>
    )
}

export default FAQ_Accordion