import Link from 'next/link'

const Header = () => (
  <header>
    <div className="container">
      <div className="flex">
        <a href="https://becaz.com" className="logo">
          <img src="/images/logo.svg" alt="Becaz Logo" />
        </a>
        <div className="menu">
          <Link href="/">
            <a href="https://becaz.com">
              Blog becaz
            </a>
          </Link>
          <a href="https://becaz.com/">
            Browse Becaz Courses
          </a>
        </div>
      </div>
    </div>
  </header>
)

export default Header
