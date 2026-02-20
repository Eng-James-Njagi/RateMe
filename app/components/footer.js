import '../css/footer.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <Image src="/justice.jpg" alt="RateMe logo" width={60} height={60}
            style={{ objectFit: "cover", borderRadius: "4px" }}
          />
          <span className="footer__brand-name">RateMe</span>
        </div>
        <button className="footer__contact">
          <Link href="/contact">Contact Us</Link>
        </button>
        <div className="footer__cta">
          <Link href="/pages/schoolDet">
            HAVE A INSTITUTION YOU DID NOT FIND . POST THE INSTITUTION
          </Link>
        </div>
      </div>
      <div className="footer__bottom">
        <span className="footer__line"></span>
        <p className="footer__copy">© 2026 RankMe. All rights reserved.</p>
        <span className="footer__line"></span>
      </div>
    </footer>
  )
}