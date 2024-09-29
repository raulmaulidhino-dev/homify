import Button from "./Button.jsx"

const customHomeSetupFeatures = [
    "Schedule automatization",
    "Professional installation",
    "Tailored system design",
];

const CustomHomeSetupCard = () => {
    return (
        <section className="rounded-[14px] p-8 pr-1/3 border-2 shadow-xl shadow-slate-300 relative grow flex flex-col gap-6">
            <section className="flex flex-wrap content-center gap-6">
                <section>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">Custom Home Setup</h3>
                    <p className="text-sm">
                        Tailor your smart home experience with personalized advce, professional insatllation, and custom automation settings. Whether you want energy efficiency, enhanced security, or seamless automation, we'll help you design the perfect system for your home
                    </p>
                </section>
                <section className="grow flex justify-center items-center">
                    <div>Start from <span className="bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent text-6xl font-bold">$99</span></div>
                </section>
                <ul className="list-none grow flex flex-wrap md:justify-center gap-4">
                    {customHomeSetupFeatures.map((feature, index) => (
                        <li
                            key={index}
                            className="
                                text-sm
                                flex items-center gap-2
                                before:content-['']
                                before:inline-block
                                before:w-4 before:h-4
                                before:bg-[url('/icons/check-icon.png')]
                                before:bg-cover
                                before:shrink-0
                            "
                        >
                            <span>{ feature }</span>
                        </li>
                    ))}
                </ul>
                <section className="w-full mx-auto md:max-w-md flex flex-col">
                    <Button label="Get Started" link="" />
                </section>
            </section>
        </section>
    )
}

export default CustomHomeSetupCard