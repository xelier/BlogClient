import {createLogger} from "redux-logger";
import {applyMiddleware, compose, createStore} from "redux";
import reducer from '../reducer';

const middleware = [];

const initialState = {
    CURRENT_MENU: '1'
};

if (process.env.NODE_ENV === `development`) {
    const logger = createLogger({
        diff:true,
        collapsed:true
    });
    middleware.push(logger);
}
export default () => compose(applyMiddleware(...middleware))(createStore)(reducer, initialState);
