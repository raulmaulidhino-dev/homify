import Pricing from "./Pricing.jsx"

const Plans = () => {
    return (
        <section id="plans" className="px-10 py-[6rem]">
            <h2 className="text-6xl text-center font-bold"><span className="bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent">Plans</span></h2>
            <Pricing />
        </section>
    )
}

export default Plans