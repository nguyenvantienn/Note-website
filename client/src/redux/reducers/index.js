import { combineReducers } from "redux";
import postsReducers from './posts'
import modalReducers from "./modal";

export default combineReducers({
    posts : postsReducers,
    modal : modalReducers,
})