import {
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
} from "./postsTypes";

export function fetchPostsRequest() {
  return { type: FETCH_POSTS_REQUEST };
}

export function fetchPostsSuccess(posts) {
  return { type: FETCH_POSTS_SUCCESS, payload: posts };
}

export function fetchPostsFailure(error) {
  return { type: FETCH_POSTS_FAILURE, payload: error };
}
