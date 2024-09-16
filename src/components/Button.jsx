const Button = ({ link, label }) => {
    return(
        <a href={ link } className="px-10 py-2 rounded-[10px] text-center font-bold bg-gray-2 inline-block">
            { label }
        </a>
    );
};

export default Button