import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { Comments } from './comments';
import { Dishes } from './dishes';
import { Leaders } from './leader';
import { Promotions } from './promotions';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
        }), applyMiddleware(thunk, logger)
    );

    return store;
}