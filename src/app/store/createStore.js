import qualitiesReducer from "./qualities";
import professionsReducer from "./professions";
import commentsReducer from "./comments";
import usersReducer from "./users";

const { combineReducers, configureStore } = require("@reduxjs/toolkit");

const rootReducer = combineReducers({
    qualities: qualitiesReducer,
    professions: professionsReducer,
    comments: commentsReducer,
    users: usersReducer
});
export function createStore() {
    return configureStore({
        reducer: rootReducer
    });
}
