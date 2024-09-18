const DifferenceCard = ({ title, body }) => {
    return (
        <article className="p-4 basis-80 shadow-slate-50 shadow-xl">
            <h3 className="text-3xl font-bold">{ title }</h3>
            <p className="text-sm">{ body }</p>
        </article>
    )
}

export default DifferenceCard