const Job = ({ title, tenureFrom, tenureTo, company, description, technologies }: {
    title: string,
    tenureFrom: string,
    tenureTo: string,
    company: string,
    description: string[],
    technologies: string[],
}) => {
    return (
        <div className="text-center">
            <p>{title}</p>
            <p>{tenureFrom}</p>
            <p>{tenureTo}</p>
        </div>
    )
}
export default Job