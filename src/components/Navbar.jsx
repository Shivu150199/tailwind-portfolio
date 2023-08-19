import { links } from '../assets/data'

const Navbar = () => {
  return (
    <nav className="bg-sky-100">
      <div className="align-element py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8">
        <h2 className="text-3xl font-bold">
          UI/UX <span className="text-sky-600">Designer</span>
        </h2>
        <div className="flex gap-x-4">
          {links.map((link) => {
            const { id, href, text } = link
            return (
              <a key={id} href={href} className="capitalize text-lg tracking-wide hover:text-emerald-600 duration-300">
                {text}
              </a>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
// 