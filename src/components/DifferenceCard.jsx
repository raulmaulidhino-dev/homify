const DifferenceCard = ({ title, body }) => {
    return (
        <article className="p-4 border-2 border-slate-200">
            <h3 className="text-3xl font-bold">{ title }</h3>
            <p className="text-sm">{ body }</p>
        </article>
    )
}

export default DifferenceCard