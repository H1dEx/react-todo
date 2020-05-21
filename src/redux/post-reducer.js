import {ADD_POST, DELETE_POST} from "./action-types";

const initState = {
    posts: [
        {content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do', liked: false, important: true, id: 1},
        {content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do', liked: true, important: false, id: 2},
        {content:'babbab asd fa ', liked: true, important: true, id: 3},
        {content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do', liked: false, important: false, id: 4},
        {content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do', liked: false, important: true, id: 5},
    ],
    term: '',
    filter: '',
};

const postReducer = (state=initState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state, posts: [...state.posts, {content: action.value, liked: false, important: false}]
            };
        case DELETE_POST:
            return {
                ...state, posts: state.posts.filter(item => item.id !== action.id)
            }
        default:
            return state;
    }
}

export default postReducer;