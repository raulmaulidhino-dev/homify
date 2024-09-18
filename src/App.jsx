import './App.css'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import DifferenceCard from './components/DifferenceCard.jsx'

import Section1_Image from './assets/section-1.png'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <section id="section_1" className="w-full py-12 px-10 flex flex-wrap justify justify-around items-center content-around gap-4">
        <img src={ Section1_Image } alt="Modern IoT System Illustration" className="max-w-lg inline-block" />
        <div className="inline-block">
          <h2 className="mb-[0.5em] text-5xl font-bold">Discover the<br/> Homify <span className="bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent">Differences</span></h2>
          <p className="text-sm">
            Homify transforms your home into a smart, connected space with cutting-edge technology, making management, security, and efficiency effortless from your smartphone
          </p>
        </div>
      </section>
      <section id="difference_cards" className="px-7 flex flex-wrap justify-center content-center items-center gap-2">
        <DifferenceCard title="Lorem Ipsum" body="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit tempora nesciunt cumque architecto esse illum voluptate praesentium, unde quas qui omnis fugiat incidunt assumenda ipsa sit et magni voluptates totam." />
        <DifferenceCard title="Lorem Ipsum" body="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit tempora nesciunt cumque architecto esse illum voluptate praesentium, unde quas qui omnis fugiat incidunt assumenda ipsa sit et magni voluptates totam." />
        <DifferenceCard title="Lorem Ipsum" body="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit tempora nesciunt cumque architecto esse illum voluptate praesentium, unde quas qui omnis fugiat incidunt assumenda ipsa sit et magni voluptates totam." />
        <DifferenceCard title="Lorem Ipsum" body="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit tempora nesciunt cumque architecto esse illum voluptate praesentium, unde quas qui omnis fugiat incidunt assumenda ipsa sit et magni voluptates totam." />
      </section>
    </>
  )
}

export default App