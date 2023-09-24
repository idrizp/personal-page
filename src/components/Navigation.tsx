"use client";

import Link from "next/link";
import { PropsWithChildren, useEffect, useState } from "react";

export interface NavLinkProps {
    href: string;
}

const NavLink = ({ href, children }: PropsWithChildren<NavLinkProps>) => {
    const [route, setRoute] = useState("");
    useEffect(() => {
        setRoute(window.location.pathname);
    }, []);
    return <Link className="hover:text-emerald-500 underline" href={href}>
        {children}
    </Link>
}

const Navigation = () => {
    return (
        <nav className="fixed flex flex-row w-full justify-end gap-x-4 items-center p-6 capitalize">
            <NavLink href="/">home</NavLink>
            <NavLink href="/tools">tools</NavLink>
        </nav>
    )
}
export default Navigation