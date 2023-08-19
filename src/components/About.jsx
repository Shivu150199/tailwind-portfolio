
import aboutSvg from '../assets/about.svg'
import SectionTitle from './SectionTitle'
const About = () => {
  return (
    <section className='bg-white py-20' id='about'>
        <div className='align-element grid md:grid-cols-2 items-center gap-16'>
            <img src={aboutSvg} alt="about" className='w-full h-64' />
            <article>
            <SectionTitle text='Design and Coffee'/>
            <p className='text-slate-600 mt-8 leading-loose'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem tempora sit sed repudiandae quam incidunt nostrum porro beatae voluptate nam!</p>
            </article>
        </div>
    </section>
  )
}

export default About
