export interface JobProps {
    title: string,
    tenureFrom: string,
    tenureTo: string,
    company: string,
    description: string[],
    technologies: string[],
};

const Job = ({ title, tenureFrom, tenureTo, company, description, technologies }: JobProps) => {
    return (
        <div className="flex flex-col gap-y-5">
            <div>
                <p className="text-emerald-500 font-bold tracking-tighter lg:text-4xl">{company}</p>
                <p className="font-black underline">{title}</p>
            </div>
            <ul className="list-disc list-inside flex flex-col">
                {description.map(desc => <li key={desc}>{desc}</li>)}
            </ul>
            <div className="flex flex-row gap-x-2 items-center">
                <p className="text-emerald-500">Tenure:</p>
                <p>{tenureFrom}</p>
                <p>-</p>
                <p>{tenureTo}</p>
            </div>
            <div className="flex flex-row flex-wrap max-w-lg gap-x-2 gap-y-2 items-center">
                {technologies.map(technology => <p className="text-white bg-emerald-600 rounded px-3 py-1" key={technology}>
                    {technology}
                </p>)}
            </div>
        </div>
    )
}
export default Job