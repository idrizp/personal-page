import Link from "next/link";
import { PropsWithChildren } from "react";

export interface ProjectProps {
    title: string;
    description: string;
    links: {
        link: string;
        href: string;
    }[]
}
const Project = ({ title, description, links }: ProjectProps) => {
    return (
        <div className="border-2 p-6 max-w-md rounded-md hover:border-emerald-500 transition-all duration-75">
            <h1 className="text-xl text-emerald-500">{title}</h1>
            <p>{description}</p>
            <div className="mt-5">
                {links.map(li => <a key={li.link} className="underline text-emerald-500" href={li.href} target="_blank" referrerPolicy="no-referrer">
                    {li.link}
                </a>)}
            </div>
        </div>
    )
}
export default Project