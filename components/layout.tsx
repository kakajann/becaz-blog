import Header from 'components/templates/header'

interface P {
  children: React.ReactNode
}

const Layout = ({ children }: P) => (
  <div id="main">
    <Header />
    { children }
  </div>
)

export default Layout
