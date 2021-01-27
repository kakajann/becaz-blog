import type { AppProps } from 'next/app'
import 'public/stylesheet/styles.sass'

import { Provider } from 'react-redux'
import store from 'lib/redux'

const App = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
)

export default App
