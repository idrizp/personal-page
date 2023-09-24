import Container from "@/components/Container"
import Navigation from "@/components/Navigation"
import Project from "@/components/Project"
import Link from "next/link"

const Home = () => {
  return (
    <Container screen center>
      <div className="flex-1 flex items-center justify-center flex-col gap-y-5 mx-6 lg:mx-0 ">
        <div className="text-center min-h-screen h-full flex items-center justify-center flex-col">
          <p className="font-black text-4xl lg:text-6xl tracking-tighter">Idriz Pelaj</p>
          <p className="tracking-tighter text-emerald-500">Developer, engineering student.</p>
          <ul className="mt-6 flex flex-row gap-x-6 lowercase">
            <li>
              <Link className="underline hover:text-emerald-500" href="#projects">Projects</Link>
            </li>
            <li>
              <Link className="underline hover:text-emerald-500" href="#projects">work experience</Link>
            </li>
            <li>
              <Link className="underline hover:text-emerald-500" href="#projects">contact</Link>
            </li>
          </ul>
        </div>
        <div id="projects" className="flex flex-col gap-y-6 min-h-screen items-center justify-center">
          <div className="text-center">
            <p className="lg:text-6xl font-black tracking-tighter">Projects</p>
            <small className="text-emerald-500">Projects I have worked on over the years</small>
          </div>
          <ul className="flex flex-col gap-y-6 lg:gap-y-0 lg:flex-row flex-wrap lg:gap-x-6 items-center justify-center">
            <Project
              title="summarizer" links={[
                {
                  href: "/summarizer",
                  link: "GitHub"
                }
              ]}
              description="A project that summarizes videos using AI into easy-to-read documents."
            />
            <Project
              title="bot-or-not" links={[
                {
                  href: "/summarizer",
                  link: "GitHub"
                }
              ]}
              description="A project that has you go up against an AI to decide whether or not they are human."
            />
          </ul>
        </div>
      </div>
    </Container>
  )
}
export default Home