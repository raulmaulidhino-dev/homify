import LightBulb from "../assets/light-bulb.webp";
import CCTV from "../assets/cctv.webp";

const Voucher = () => {
    return (
        <section className="font-poppins flex justify-center items-center mt-24 h-[20rem]">
            <div className="bg-gradient-to-r from-black to-purple-950 via-black bg-black bg-opacity-90 md:py-10 md:px-16 py-2 px- md:rounded-2xl relative w-dvw h-full md:w-fit md:h-fit flex flex-col justify-center items-center">
                <div className="text-center w-[80%] mx-auto md:w-auto">
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-bold" data-aos="zoom-in">Enjoy $5 Off Your Purchase! Use Code</h3>
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-bold" data-aos="fade-up"><strong>&ldquo;HOMIFYGOOD123&rdquo;</strong></h3>
                </div>
                <img className="w-24 absolute top-[-2rem] left-[2rem] md:left-[-2rem] z-30" src={ CCTV } alt="CCTV" data-aos="zoom-in" />
                <img className="w-20 absolute bottom-[-2rem] right-[2rem] md:right-[-2rem] z-30" src={ LightBulb } alt="Light Bulb" data-aos="zoom-in" />
            </div>
      </section>
    );
};

export default Voucher
