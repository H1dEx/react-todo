import {ADD_POST, DELETE_POST,} from "./action-types";

const addPost = (value) => ({type: ADD_POST, value});
const deletePost = (id) => ({type: DELETE_POST, id});
export {addPost, deletePost};