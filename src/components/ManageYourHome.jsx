import Button from "./Button.jsx"

import ManageYourHomeImage from "../assets/manage-your-home-img.png"


const ManageYourHome = () => {
    return (
        <section id="manage_your_home" className="w-full px-10 py-[6rem] flex flex-wrap justify-center items-center content-center gap-4">
            <img src={ ManageYourHomeImage } alt="Internet Home Illustration" className="max-w-lg inline-block" />
            <section>
                <h2 className="text-5xl font-bold md:max-w-[27rem] mb-[0.5em]"><span className="bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent">Smart</span> Control, One Tap Away</h2>
                <p className="text-sm max-w-sm mb-[1em]">Manage your entire smart home from one intuitive app whether it"s adjusting the lights, setting the temperature, or checking security cameras, Homify puts complete control of your home in the palm of your hand.</p>
                <Button link="" label="Manage Your Home" color="text-white" bgColor="bg-black"></Button>
            </section>
        </section>
    )
}

export default ManageYourHome