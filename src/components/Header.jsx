import Logo from "../assets/homify-logo.png"
import Nav from "./Nav.jsx"
import Button from "./Button.jsx"

const Header = () => {

    const navItems = [
        {label:"Home", link:""},
        {label:"Products", link:""},
        {label:"Solutions", link:""},
        {label:"Blog", link:""},
    ];

    return (
        <header className="m-8 py-2 px-7 rounded-[10px] shadow-xl flex justify-between items-center">
            <div className="logo max-w-48">
                <img src={ Logo } alt="Homify Logo" className="transform scale-85"/>
            </div>
            <Nav navItems={ navItems } />
            <Button label="LOGIN" link="#login" color="text-black" bgColor="bg-gray-2" />
        </header>
    );
};

export default Header