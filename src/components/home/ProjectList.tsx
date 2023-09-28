import Project from "./Project";

const projects = [
    {
        title: "summarizer",
        links: [
            {
                href: "https://github.com/idrizp/summarizer.git",
                link: "GitHub"
            }
        ],
        description: "A project that summarizes videos using AI into easy-to-read documents."
    },
    {
        title: "bot-or-not",
        links: [
            {
                href: "https://github.com/idrizp/bot-or-not.git",
                link: "GitHub"
            }
        ],
        description: "A project that has you go up against an AI to decide whether or not they are human."
    },
    {
        title: "kosvid",
        links: [
            {
                href: "https://github.com/idrizp/kosvid-api.git",
                link: "GitHub"
            }
        ],
        description: "An older project that serves an API for Kosovo's COVID cases."
    },
    {
        title: "hexagreen",
        links: [
            {
                href: "https://www.linkedin.com/posts/bisha-studios_indiegame-indiegamedev-boardgame-activity-7072844147484692480-qxgf?utm_source=share&utm_medium=member_desktop",
                link: "LinkedIn Post"
            }
        ],
        description: "A fun hexagon-based strategy game I built using C# with Unity."
    },
    {
        title: "greenboard",
        links: [
            {
                href: "https://github.com/idrizp/jacobshack-repo",
                link: "GitHub"
            }
        ],
        description: "A recycling leaderboard app made for the JacobsHack Hackathon that you can use to compete with your friends."
    }
];

export default function ProjectList() {
    return <>
        {projects.map(project => <Project key={project.description} {...project} />)}
    </>
}