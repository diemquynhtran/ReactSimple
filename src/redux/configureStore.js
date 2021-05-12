import {createStore, combineReducers} from 'redux';
import { Comments } from './comment';
import { Dishes } from './dishes';
import { Leaders } from './leader';
import { Promotions } from './promotions';



export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
        })
    );

    return store;
}