import AdvantageCard from "./AdvantageCard.jsx"

import { FaSeedling } from "react-icons/fa"
import { FiSettings } from "react-icons/fi"
import { FaMobileAlt } from "react-icons/fa"
import { FaHome } from "react-icons/fa"

const AdvantageCards = () => {
    const advantageCardsData = [
        {
            Icon: FaSeedling,
            title: "Comprehensive Smart Home",
            body: "Homify provides a wide array of smart devices that work together seamlessly to create a fully automated home. From smart lights to security systems, everything is designed to work in harmony"
        },
        {
            Icon: FiSettings,
            title: "User-Friendly Experience",
            body: "No need to be tech-savvy! Our platform is designed with simplicity in mind. Easily control all your devices through a single app, accessible anytime and anywhere"
        },
        {
            Icon: FaMobileAlt,
            title: "Tailored for Your Lifestyle",
            body: "Our solutions are flexible and customizable to fit your unique preferences. Whether you prioritize energy savings, security, or convenience, Homify can be adapted to meet your exact needs"
        },
        {
            Icon: FaHome,
            title: "Innovation that Grows with You",
            body: "Future-proof your home with Homify\'s scalable and upgradable systems. As technology evolves, your smart home setup can evolve too&mdash;ensuring you&rsquo;re always ahead of the curve"
        }
    ];

    return (
        <section id="advantage_cards" className="px-10 py-8 my-20 bg-gradient-to-r from-fuchsia-50 to-purple-50 grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-4 justify-self-center">
            {advantageCardsData.map((card, index) => (
                <AdvantageCard key={index} Icon={card.Icon} title={card.title} body={card.body} />
            ))}
        </section>
    )
}

export default AdvantageCards