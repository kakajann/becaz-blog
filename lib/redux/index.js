import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rootReducer from 'lib/redux/reducers'

const persistConfig = {
  key: 'root',
  storage,
}

const persisted = persistReducer(persistConfig, rootReducer)

export const store = createStore(persisted)
export const persistor = persistStore(store)
