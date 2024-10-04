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
        <nav className="grow md:grow-0">
            <ul className="flex items-center justify-around gap-8">
                {navItems.map((item, index) => (
                    <li key={index} className="font-semibold">
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