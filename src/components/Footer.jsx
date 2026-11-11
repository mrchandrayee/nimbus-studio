import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ink">
                <span className="h-2 w-2 rounded-full bg-lime" />
              </span>
              <span className="font-display text-lg font-medium">Nimbus</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-plum">
              A four-person studio designing and building interfaces for teams who'd rather ship
              something considered than something fast.
            </p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-plum">Sitemap</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <NavLink to="/" className="text-ink hover:text-coral">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/work" className="text-ink hover:text-coral">
                  Work
                </NavLink>
              </li>
              <li>
                <NavLink to="/studio" className="text-ink hover:text-coral">
                  Studio
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-ink hover:text-coral">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-plum">Elsewhere</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href="#" className="text-ink hover:text-coral">
                  hello@nimbus.studio
                </a>
              </li>
              <li>
                <a href="#" className="text-ink hover:text-coral">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-ink hover:text-coral">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-xs text-plum md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Nimbus Studio. All rights reserved.</p>
          <p>Based in Mumbai, working with teams everywhere.</p>
        </div>
      </div>
    </footer>
  )
}
