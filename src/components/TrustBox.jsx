import TrustBoxBackground from '../assets/trust-box-background.png'

const TrustBox = () => {
    return (
        <section 
            className={`bg-cover bg-center rounded-[28px] mx-auto w-full aspect-video max-w-5xl relative before:absolute before:bg-black before:inset-0 before:rounded-[28px] before:opacity-[0.725]`}
            style={{ backgroundImage: `url(${TrustBoxBackground})`}}
        >
            <h2 className="font-bold text-center text-2xl lg:text-5xl text-white w-full absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">Over <span>7,000+</span> homes trust Homify for their smart home solutions</h2>
        </section>
    )
}

export default TrustBox