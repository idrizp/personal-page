import Job, { JobProps } from "./Job"

const jobs: JobProps[] = [
    {
        title: "Software Developer",
        company: "Freelancing",
        description: [
            "Created websites for clients using React, HTML/CSS and JavaScript.",
            "Wrote custom web servers in Java using Spring Boot to handle API requests.",
            "Hooked into various financial APIs to fetch data and display it on client websites."
        ],
        technologies: [
            "Java",
            "SQL",
            "Git",
            "Linux",
            "Node.js",
            "React",
            "TypeScript",
            "Gradle",
            "Maven",
            "Kotlin",
            "Spring Boot",
            "HTML",
            "CSS3",
            "Bootstrap"
        ],
        tenureFrom: "2018",
        tenureTo: "2020",
    },
    {
        title: "Software Developer",
        company: "Lemon Gaming LTD",
        description: [
            "Wrote efficient Java code for game servers that handle thousands of concurrent connections at once.",
            "Optimized SQL queries to reduce server load and improve query speed.",
            "Wrote a custom web server in Java to serve static files and handle API requests.",
        ],
        technologies: [
            "Java",
            "SQL",
            "Git",
            "Linux",
            "Node.js",
            "React",
            "TypeScript",
            "Gradle",
            "Maven",
            "Kotlin"
        ],
        tenureFrom: "2020",
        tenureTo: "2022",
    },
    {
        title: "Software Developer",
        company: "Telara Studios",
        description: [
            "Wrote networking code that isolated users to their own virtual environment within a game.",
            "Wrote UI libraries to ease the development of UI components within the game.",
        ],
        tenureFrom: "2022",
        tenureTo: "2023",
        technologies: [
            "Java",
            "SQL",
            "Git",
            "Linux",
            "Gradle",
            "Maven",
        ]
    },
    {
        title: "CEO",
        company: "BISHA Studios",
        description: [
            "Wrote libraries in C# to facilitate easier game development using the Unity engine.",
            "Wrote a custom map engine for easier hexagonal map editing using tilemaps with the Unity engine.",
        ],
        technologies: [
            "C#",
            "Unity",
            "Git",
            "Python",
        ],
        tenureFrom: "2022",
        tenureTo: "2023",
    },
]

const WorkExperience = () => {
    return (
        <div className="flex-1 p-6 flex gap-y-10 lg:gap-y-0 flex-col lg:flex-row lg:justify-between w-full items-center">
            <div className="lg:max-w-md">
                <p className="text-3xl lg:text-6xl text-emerald-500 font-black tracking-tighter">Work Experience:</p>
                <p className="lg:mt-2 text-sm tracking-tight">Here's some things I've worked on over the years.</p>
            </div>
            <div className="flex flex-col lg:border-2 lg:rounded lg:p-9 lg:shadow-lg lg:shadow-white/10 lg:max-h-96 lg:overflow-y-scroll gap-y-20">
                {jobs.map(job => <Job key={job.company} {...job} />)}
            </div>
        </div>
    )
}
export default WorkExperience