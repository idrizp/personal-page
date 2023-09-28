import Container from "@/components/Container"
import Navigation from "@/components/Navigation"
import Project from "@/components/home/Project"
import ProjectList from "@/components/home/ProjectList"
import WorkExperience from "@/components/home/WorkExperience"
import Link from "next/link"

const Home = () => {
  return (
    <Container screen center>
      <div className="flex-1 flex items-center justify-center flex-col gap-y-5 mx-6 lg:mx-0">
        <div className="text-center min-h-screen h-full flex items-center justify-center flex-col">
          <p className="font-black text-4xl lg:text-6xl tracking-tighter">Idriz Pelaj</p>
          <p className="tracking-tighter text-emerald-500">Developer, engineering student.</p>
          <ul className="mt-6 flex flex-row gap-x-6 lowercase">
            <li>
              <Link className="underline hover:text-emerald-500" href="#projects">Projects</Link>
            </li>
            <li>
              <Link className="underline hover:text-emerald-500" href="#work-experience">work experience</Link>
            </li>
            <li>
              <Link className="underline hover:text-emerald-500" href="#contact">contact</Link>
            </li>
          </ul>
        </div>
        <div id="projects" className="flex flex-col gap-y-6 min-h-screen items-center justify-center">
          <div className="text-center">
            <p className="lg:text-6xl font-black tracking-tighter">Projects</p>
            <small className="text-emerald-500">Projects I have worked on over the years</small>
          </div>
          <ul className="p-6 flex flex-col gap-y-6 lg:flex-row lg:max-w-5xl lg:gap-y-5 flex-wrap lg:gap-x-6 items-center justify-center">
            <ProjectList />
          </ul>
          <div id="work-experience">
            {/* <WorkExperience /> */}
          </div>
        </div>
      </div>
    </Container>
  )
}
export default Home