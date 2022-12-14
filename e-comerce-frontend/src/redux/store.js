import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

// Reducers
import { cartReducer } from './reducers/cartReducers'
import {
  getProductsReducer,
  getProductDetailsReducer,
  getProductsByMarkReducer,
} from './reducers/productReducers'
import { getServicesReducer, getServiceDetailsReducer } from './reducers/serviceReducers'
import { userReducer } from './reducers/userReducer'

const reducer = combineReducers({
  cart: cartReducer,
  getServices: getServicesReducer,
  getServicesDetails: getServiceDetailsReducer,
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
  getProductsByMark: getProductsByMarkReducer,
  user: userReducer,
})

const middleware = [thunk]

const cartItemsInLocalStorage = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : []

const INITIAL_STATE = {
  cart: {
    cartItems: cartItemsInLocalStorage,
  },
}

const store = createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware)),
)

export default store
