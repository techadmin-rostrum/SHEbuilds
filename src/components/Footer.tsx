import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <Image
            src="/brand/logo.png"
            alt="SHEbuilds"
            width={166}
            height={68}
            className="site-footer__logo"
          />
          <p className="site-footer__tagline">Empower. Educate. Elevate.</p>
        </div>

        <nav className="site-footer__links" aria-label="Footer">
          <p className="site-footer__label">Explore</p>
          <Link href="/resources">Resources</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/gallery">Gallery</Link>
        </nav>

        <div className="site-footer__social">
          <p className="site-footer__label">Follow along</p>
          <div className="site-footer__social-row">
            <a
              href="#"
              aria-label="Instagram (coming soon)"
              title="Instagram account coming soon"
              className="site-footer__social-link"
            >
              Instagram
            </a>
            <a
              href="#"
              aria-label="LinkedIn (coming soon)"
              title="LinkedIn account coming soon"
              className="site-footer__social-link"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <p className="site-footer__copy">
        © {new Date().getFullYear()} SHEbuilds. Built for women ready to build.
      </p>
    </footer>
  )
}
