import Button from './Button.jsx'

const PricingCard = ({
    title = "Basic Plan",
    subtitle = "Subtitle",
    price = "0",
    save = "0",
    features = [],
}) => {
    return (
        <section className="rounded-[14px] p-8 pr-1/3 border-2 shadow-xl shadow-slate-300 relative grow flex flex-col gap-6">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">{ title }</h3>
            <p>{ subtitle }</p>
            <div className="text-white text-center text-sm font-bold bg-gradient-to-r from-purple-900 to-black rounded-[25px] p-2 w-1/3 max-w-[7rem] absolute right-[-1rem] top-[-1rem]">SAVE ${ save }</div>
            <div className="text-5xl font-bold bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent">${ price }</div>
            <ul className="list-none space-y-4">
                {features.map((feature, index) => (
                    <li
                        key={index}
                        className="
                            text-sm
                            flex items-center
                            before:content-['']
                            before:inline-block
                            before:w-4 before:h-4
                            before:mr-2
                            before:bg-[url('/icons/check-icon.png')]
                            before:bg-cover
                            before:shrink-0
                        "
                    >
                        <span>{ feature }</span>
                    </li>
                ))}
            </ul>
            <Button label="Get Started" link="" />
        </section>
    )
}

export default PricingCard