import Image from 'next/image'
import Link from 'next/link'

const links = [
  { href: '/', label: 'Home' },
  { href: '/resources', label: 'Resources' },
  { href: '/blog', label: 'Blog' },
  { href: '/gallery', label: 'Gallery' },
]

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <Link href="/" className="site-footer__brand-link">
            <Image
              src="/brand/logo.png"
              alt="SHEbuilds"
              width={166}
              height={68}
              className="site-footer__logo"
            />
          </Link>
          <p className="site-footer__tagline">Empower. Educate. Elevate.</p>
          <p className="site-footer__blurb">
            A digital business starter kit for women ready to build from home or their neighbourhood.
          </p>
        </div>

        <nav className="site-footer__nav" aria-label="Footer">
          <p className="site-footer__label">Explore</p>
          <ul className="site-footer__links">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="site-footer__bottom">
        <p className="site-footer__copy">
          © {new Date().getFullYear()} SHEbuilds. Built for women ready to build.
        </p>
      </div>
    </footer>
  )
}
