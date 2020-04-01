import {combineReducers} from 'redux';
import {postsReducer} from './posts.reducer';
import {appReducer} from './appReducer';

export const rootReducer = combineReducers({
    posts: postsReducer,
    app: appReducer
});
