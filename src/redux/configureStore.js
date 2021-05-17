import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { Comments } from './comments';
import { Dishes } from './dishes';
import { Leaders } from './leader';
import { Promotions } from './promotions';
import logger from 'redux-logger';
import {createForms} from 'react-redux-form'
import { InitialFeedback } from './forms';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders,
            ...createForms({
                feedback: InitialFeedback
            })
        }), applyMiddleware(thunk, logger)
    );

    return store;
}