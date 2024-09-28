import lampu from '../assets/light-bulb.png';
import cctv from '../assets/cctv.png';

const Cher = () => {
    return (
        <div className="font-poppins flex justify-center items-center mt-24 relative">
            <img className="md:w-24 w-12 absolute top-[-1.5rem] md:left-[11rem] left-[-0.2rem] z-30" src={cctv} alt="cctv" />
            <img className="md:w-20 w-10 absolute bottom-[-1.5rem] md:right-[12rem] right-[-0.2rem] z-30" src={lampu} alt="lampu" />
            
            <div className="bg-gradient-to-r from-black to-purple-950 via-black bg-black bg-opacity-90 md:py-10 md:px-32 py-3 px-7 rounded-2xl inline-block">
                <div className="text-center">
                    <h1 className="md:text-4xl text-1xl text-white font-extrabold">Enjoy $5 Off Your Purchase! Use Code</h1>
                    <h2 className="md:text-4xl text-1xl text-white font-extrabold">“HOMIFYGOOD123”</h2>
                </div>
            </div>
        </div>
    );
};

export default Cher;
