import React, { useState } from 'react';

const FAQAccordion = ({question="Question?", answer="Answer is ..."}) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    }

    return (
        <section>
            <section className="question border-2 rounded-[14px] p-6 flex justify-between items-center shadow-lg shadow-slate-300">
                <section className="question-text font-bold">
                    { question }
                </section>
                <div onClick={ toggleAccordion }>
                    <img 
                        src="/icons/arrow-icon.png"
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

export default FAQAccordion