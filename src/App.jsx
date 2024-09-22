import './App.css'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import DifferenceCard from './components/DifferenceCard.jsx'
import NumbersCard from './components/NumbersCard.jsx'

import Section1_Image from './assets/section-1.png'

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
        <DifferenceCard title="Comprehensive Smart Home Solutions" body="" />
        <DifferenceCard title="User-Friendly Experience" body=" " />
        <DifferenceCard title="Tailored for Your Lifestyle" body=" " />
        <DifferenceCard title="Innovation that Grows with You" body=" " />
      </section>
      <section id="the_numbers" className="px-10 py-[6rem]">
        <h2 className="text-5xl text-center font-bold md:max-w-[23rem] mx-auto mb-[0.5em]">
          The Numbers say it all.
        </h2>
        <p className="text-sm text-center max-w-sm mx-auto">Homify efficiently transforms your home with smart solutions for any lifestyle and budget.</p>
        <section id="numbers_card" className="w-[90%] md:w-[80%] mx-auto my-8 grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-8">
          <NumbersCard number="5.6 hrs" description="saved on average by automating daily tasks with Homify's smart systems." />
          <NumbersCard number="75%" description="reduction in energy usage with Homify's smart thermostats and lighting solutions compared to traditional systems" />
          <NumbersCard number="0.3%" description="of the average household budget invested in Homify to make your home smarter, safer and more efficient." />
          <NumbersCard number="$50K" description="saved in energy costs by one Homify customer over 3 years using our automation and energy management solutions." />
        </section>
      </section>
      <section id="manage_your_home" className="m">
        <img />
        <p></p>
      </section>
    </>
  )
}

export default App