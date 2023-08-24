
import aboutSvg from '../assets/about.svg'
import SectionTitle from './SectionTitle'
const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} alt="about" className="w-full h-64" />
        <article>
          <SectionTitle text="Code and Coffee" />
          <p className="text-slate-600 mt-8 leading-loose">
            As a Front-end-developer with entry-level experience specializing in
            HTML,CSS and JavaScript and React framework so seeking for an
            opportunity that offers professional challenges utilizing
            interpersonal skills, excellent time management and problem-solving
            skills
            <br />
            Contact:8896952594
            <br />
            Email: <a href="mailto:shivamsync69@gmail.com">shivamsync69@gmail.com</a>
          </p>
        </article>
      </div>
    </section>
  )
}

export default About
