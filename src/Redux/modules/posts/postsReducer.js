import {
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
} from "./postsTypes";

const initialState = {
  loading: false,
  error: "",
  posts: null,
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST: {
      return {
        loading: true,
        error: "",
        posts: null,
      };
    }
    case FETCH_POSTS_SUCCESS: {
      return {
        loading: false,
        error: "",
        posts: action.payload,
      };
    }
    case FETCH_POSTS_FAILURE: {
      return {
        loading: false,
        error: action.payload,
        posts: null,
      };
    }
    default:
      return state;
  }
};
