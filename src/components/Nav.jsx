const Nav = ({ navItems }) => {
    return (
        <nav className="basis-1/2">
            <ul className="flex justify-around items-center">
                {navItems.map((item, index) => (
                    <li key={index}>
                        <a href={ item.link }>{ item.label }</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Nav