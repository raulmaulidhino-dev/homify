import AdvantageCard from "./AdvantageCard.jsx"

const AdvantageCards = () => {
    return (
        <section id="difference_cards" className="px-10 py-8 grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-4">
        <AdvantageCard 
          title="Comprehensive Smart Home Solutions" 
          body="Homify provides a wide array of smart devices that work together seamlessly to create a fully automated home. From smart lights to security systems, everything is designed to work in harmony" 
        />
        <AdvantageCard
          title="User-Friendly Experience"
          body="No need to be tech-savvy! Ourr platform is designed with simplicity in mind. Easily control all your devices through a single app, accessible anytime and anywhere" 
        />
        <AdvantageCard
          title="Tailored for Your Lifestyle"
          body="Our solutions are flexible and customizable to fit your unique preferences. Whether you prioritize energy savings, security, or convenience, Homify can be adapted to meet your exact needs"
        />
        <AdvantageCard
          title="Innovation that Grows with You"
          body="Future-proof your home with Homify&rsquo;s scalable and upgradable systems. As technology evolves, your smart home setup can evolve too&mdash;ensuring you&rsquo;re always ahead of the curve"
        />
      </section>
    )
}

export default AdvantageCards