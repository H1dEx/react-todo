import {createStore} from 'redux';
import postReducer from "./post-reducer";

const store = createStore(postReducer);

export default store;