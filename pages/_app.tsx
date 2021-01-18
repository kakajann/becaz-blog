import type { AppProps } from 'next/app'
import 'public/stylesheet/styles.sass'

const App = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
)

export default App
