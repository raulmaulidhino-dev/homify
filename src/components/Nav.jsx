import { useState, useEffect } from "react"

const Nav = ({
    navItems = [],
}) => {
    const [isMobile, setIsMobile] = useState(false);
    
    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
    };

    useEffect(() => {
        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <nav className="mx-auto md:space-around basis-full md:basis-1/2">
            <ul className="flex justify-around items-center">
                {navItems.map((item, index) => (
                    <li key={index}>
                        <a href={ item.link }>
                            { isMobile ? item.icon : item.label }
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Nav