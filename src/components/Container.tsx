import clsx from "clsx";
import { PropsWithChildren } from "react"

export interface ContainerProps {
    screen?: boolean;
    center?: boolean
}

const Container = ({ children, screen, center }: PropsWithChildren<ContainerProps>) => {
    return (
        <div className={clsx(
            screen && "min-h-screen h-full flex flex-col",
            center && "items-center justify-center",
        )}>{children}</div>
    )
}
export default Container