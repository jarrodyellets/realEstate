import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {
  intro: true,
  mode: "buy",
  ascending: true,
  value: "Austin",
  neighborhood: buy,
  beds: "beds",
  price: "price",
  id: null,
  hoverId: null,
  house: null,
  detail: false,
  zoom: 13,
  center: {
    lat: 30.274726,
    lng: -97.750519
  }
}

const middleware = [thunk];

const store = createStore(rootReducer, initialState, applyMiddleware(...middleware));

export default store;