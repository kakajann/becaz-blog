import Link from 'next/link'
import Icon from 'components/templates/icon'

const Header = () => {
  const [isMenuVisible, setMenuVisible] = React.useState<boolean>(false)

  return (
    <header>
      <div className="container">
        <div className="flex">
          <a href="https://becaz.com" className="logo">
            <img src="/images/logo.svg" alt="Becaz Logo" />
          </a>
          <button type="button" className="mobile-burger" onClick={() => setMenuVisible((s) => !s)}>
            <Icon title="menu" size={22} />
          </button>
          <div className={`menu ${isMenuVisible && 'visible'}`}>
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
}

export default Header
