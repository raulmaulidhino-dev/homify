import Button from "./Button.jsx"

import ManageYourHomeImage from "../assets/manage-your-home-img.webp"


const ManageYourHome = () => {
    return (
        <section id="manage_your_home" className="bg-gradient-to-r from-fuchsia-50 to-purple-50 w-full px-10 py-[6rem] flex flex-wrap justify-center items-center content-center gap-4">
            <img src={ ManageYourHomeImage } alt="Internet Home Illustration" className="md:max-w-md lg:max-w-lg inline-block" data-aos="fade-right" />
            <section>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold sm:max-w-[27rem] mb-[0.5em]" data-aos="fade-down"><span className="bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent">Smart</span> Control, One Tap Away</h2>
                <p className="text-sm sm:text-md md:text-lg lg:text-xl max-w-sm mb-[1em]" data-aos="fade-down">Manage your entire smart home from one intuitive app whether it&rsquo;s adjusting the lights, setting the temperature, or checking security cameras, Homify puts complete control of your home in the palm of your hand</p>
                <Button link="#plans" label="Manage Your Home" color="text-white" bgColor="bg-black"></Button>
            </section>
        </section>
    )
}

export default ManageYourHome