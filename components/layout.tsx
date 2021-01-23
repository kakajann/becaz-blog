import Head from 'next/head'
import Header from 'components/templates/header'
import Footer from './templates/footer'

interface P {
  children: React.ReactNode
  meta?: Meta
}

const Layout = ({ children, meta }: P) => (
  <div id="main">
    <Head>
      <title>{meta?.title}</title>
      <meta name="description" content={meta?.description} />
      <meta name="keywords" content={meta?.keywords} />
      <link rel="icon" type="image/png" href="images/favicon.png" />
    </Head>
    <Header />
    { children }
    <Footer />
  </div>
)

Layout.defaultProps = {
  meta: {
    title: 'Becaz',
    description: 'Becaz blog',
    keywords: 'Becaz, blog',
  },
}

export default Layout
