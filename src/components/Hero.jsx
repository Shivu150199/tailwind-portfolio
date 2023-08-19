import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa"
import heroImg from '../assets/hero.svg'

const Hero = () => {
  return (
    <section className="bg-sky-100 py-24">
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl font-bold tracking-wider"> I am Akshay</h1>
          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
            UI/UX Designer
          </p>
          <p className="mt-3 text-lg text-slate-700 capitalize tracking-wide">
            turning ideas into interactive reality
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="https://github.com/Shivu150199">
              <FaGithubSquare className="h-8 w-8 text-slate-700 hover:text-black duration-300" />
            </a>
            <a href="https://github.com/Shivu150199">
              <FaLinkedin className="h-8 w-8 text-slate-700 hover:text-black duration-300" />
            </a>
            <a href="https://github.com/Shivu150199">
              <FaTwitterSquare className="h-8 w-8 text-slate-700 hover:text-black duration-300" />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={heroImg} alt="hero" />
        </article>
      </div>
    </section>
  )
}

export default Hero
