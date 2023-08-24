
import ProjectCard from './ProjectCard'
import { projects } from '../assets/data'
import SectionTitle from './SectionTitle'
const Projects = () => {
  return (
    <section className="py-20 align-element" id="projects">
      <div className="flex justify-between content-center">
        <SectionTitle text="web Creation" />
        <a className='capitalize text-sky-400 hover:text-rose-400' href="https://sprightly-pie-1602fb.netlify.app/">all projects</a>
      </div>
      <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project) => {
          return <ProjectCard key={project.id} {...project} />
        })}
      </div>
    </section>
  )
}

export default Projects
