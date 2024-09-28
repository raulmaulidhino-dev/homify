import "./App.css"
import Button from "./components/Button.jsx"
import Header from "./components/Header.jsx"
import Hero from "./components/Hero.jsx"
import DifferenceCard from "./components/DifferenceCard.jsx"
import NumbersCard from "./components/NumbersCard.jsx"
import Pricing from "./components/Pricing.jsx"
import FAQ from "./components/FAQ.jsx"
import TrustBox from "./components/TrustBox.jsx"
import Testimony from "./components/Testimony.jsx"
import Footer from "./components/Footer.jsx";
import Services from "./components/Services.jsx";
import Voucher from "./components/Voucher.jsx";


import Section1_Image from "./assets/section-1.png"
import Manage_Your_Home_Image from "./assets/manage_your_home.png"

function App() {
  return (
    <>
      <Header />
      <Hero />
      <section id="section_1" className="w-full px-10 py-[6rem] flex flex-wrap justify justify-around items-center content-around gap-4">
        <img src={ Section1_Image } alt="Modern IoT System Illustration" className="max-w-lg inline-block" />
        <div className="inline-block">
          <h2 className="text-5xl font-bold mb-[0.5em]">Discover the<br/> Homify <span className="bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent">Differences</span></h2>
          <p className="text-sm">
            Homify transforms your home into a smart, connected space with cutting-edge technology, making management, security, and efficiency effortless from your smartphone
          </p>
        </div>
      </section>
      <section id="difference_cards" className="px-10 py-8 grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-4">
        <DifferenceCard 
          title="Comprehensive Smart Home Solutions" 
          body="Homify provides a wide array of smart devices that work together seamlessly to create a fully automated home. From smart lights to security systems, everything is designed to work in harmony" 
        />
        <DifferenceCard
          title="User-Friendly Experience"
          body="No need to be tech-savvy! Ourr platform is designed with simplicity in mind. Easily control all your devices through a single app, accessible anytime and anywhere" 
        />
        <DifferenceCard
          title="Tailored for Your Lifestyle"
          body="Our solutions are flexible and customizable to fit your unique preferences. Whether you prioritize energy savings, security, or convenience, Homify can be adapted to meet your exact needs"
        />
        <DifferenceCard
          title="Innovation that Grows with You"
          body="Future-proof your home with Homify&rsquo;s scalable and upgradable systems. As technology evolves, your smart home setup can evolve too&mdash;ensuring you&rsquo;re always ahead of the curve"
        />
      </section>
      <section id="the_numbers" className="px-10 py-[6rem]">
        <h2 className="text-5xl text-center font-bold md:max-w-[23rem] mx-auto mb-[0.5em]">
          The Numbers say it all.
        </h2>
        <p className="text-sm text-center max-w-sm mx-auto">Homify efficiently transforms your home with smart solutions for any lifestyle and budget.</p>
        <section id="numbers_card" className="w-[90%] md:w-[80%] mx-auto my-8 grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-8">
          <NumbersCard number="5.6 hrs" description="saved on average by automating daily tasks with Homify&rsquo;s smart systems." />
          <NumbersCard number="75%" description="reduction in energy usage with Homify&rsquo;s smart thermostats and lighting solutions compared to traditional systems" />
          <NumbersCard number="0.3%" description="of the average household budget invested in Homify to make your home smarter, safer and more efficient." />
          <NumbersCard number="$50K" description="saved in energy costs by one Homify customer over 3 years using our automation and energy management solutions." />
        </section>
      </section>
      <section id="manage_your_home" className="w-full px-10 py-[6rem] flex flex-wrap justify-center items-center content-center gap-4">
        <img src={ Manage_Your_Home_Image } alt="Internet Home Illustration" className="max-w-lg inline-block" />
        <section className="">
          <h2 className="text-5xl font-bold md:max-w-[27rem] mb-[0.5em]"><span className="bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent">Smart</span> Control, One Tap Away</h2>
          <p className="text-sm max-w-sm mb-[1em]">Manage your entire smart home from one intuitive app whether it"s adjusting the lights, setting the temperature, or checking security cameras, Homify puts complete control of your home in the palm of your hand.</p>
          <Button link="" label="Manage Your Home" color="text-white" bgColor="bg-black"></Button>
        </section>
      </section>
      <section id="plans" className="px-10 py-[6rem]">
        <h2 className="text-6xl text-center font-bold"><span className="bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent">Plans</span></h2>
        <Pricing />
      </section>
      <FAQ />
      <section id="trust_box" className="w-full px-10 py-[6rem]">
        <TrustBox />
      </section>
      <Testimony />
      <Services /> 
      <Voucher />
      <Footer />
    </>
  )
}

export default App