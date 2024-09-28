const DifferenceCard = ({
    title = "Title", 
    body = "Body" 
}) => {
    return (
        <article className="p-4 border-2 border-slate-200">
            <h3 className="text-3xl font-bold mb-[0.5em]">{ title }</h3>
            <p className="text-sm">{ body }</p>
        </article>
    )
}

export default DifferenceCard