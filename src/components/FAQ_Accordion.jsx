import { useState } from "react"

import ArrowDownIcon from "../assets/icons/arrow-down-icon.png"

const FAQ_Accordion = ({question="Question?", answer="Answer is ..."}) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    }

    return (
        <section>
            <section className="question border-2 rounded-[14px] p-6 flex justify-between items-center gap-4 shadow-lg shadow-slate-300">
                <section className="mr-auto question-text font-bold">
                    { question }
                </section>
                <div onClick={ toggleAccordion } className="shrink-0 w-8 ml-auto my-auto">
                    <img 
                        src={ ArrowDownIcon }
                        className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    />
                </div>
            </section>
            <section className={`p-4 bg-white border-t border-gray-300 ${isOpen ? 'block' : 'hidden'}`}>
                { answer }
            </section>
        </section>
    )
}

export default FAQ_Accordion