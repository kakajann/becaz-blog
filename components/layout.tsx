import Head from 'next/head'
import Header from 'components/templates/header'

interface P {
  children: React.ReactNode
  meta?: Meta
}

const Layout = ({ children, meta }: P) => (
  <div id="main">
    <Head>
      <title>{meta?.title}</title>
      <meta name="description" content={meta?.description} />
    </Head>
    <Header />
    { children }
  </div>
)

Layout.defaultProps = {
  meta: {
    title: 'Becaz',
    description: 'Becaz blog',
  },
}

export default Layout
