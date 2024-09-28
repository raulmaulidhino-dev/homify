import Hero2Image from "../assets/hero2-img.png"

const Hero2 = () => {
    return (
        <section id="Hero2" className="w-full px-10 py-[6rem] flex flex-wrap justify justify-around items-center content-around gap-4">
            <img src={ Hero2Image } alt="Modern IoT System Illustration" className="max-w-lg inline-block" />
            <div className="inline-block">
            <h2 className="text-5xl font-bold mb-[0.5em]">Discover the<br/> Homify <span className="bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent">Differences</span></h2>
            <p className="text-sm">
                Homify transforms your home into a smart, connected space with cutting-edge 
                technology, making management, security, and efficiency effortless from your 
                smartphone
            </p>
            </div>
        </section>
    )
}

export default Hero2