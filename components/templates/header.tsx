import Link from 'next/link'
import Icon from 'components/templates/icon'

const Header = () => (
  <header>
    <div className="container">
      <div className="flex">
        <Link href="/">
          <a href="/" className="logo">
            <img src="/images/logo.svg" alt="Becaz Logo" />
          </a>
        </Link>
        <a href="https://becaz.com" className="back">
          <Icon title="return" size={16} />
          Back to Becaz.com
        </a>
      </div>
    </div>
  </header>
)

export default Header
