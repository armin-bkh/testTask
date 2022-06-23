import { call, put, takeEvery } from "redux-saga/effects";
import { getPosts } from "../../Services/getPosts";
import {
  fetchPostsFailure,
  fetchPostsSuccess,
} from "../modules/posts/postsActions";
import { FETCH_POSTS_REQUEST } from "../modules/posts/postsTypes";

function* fetchPosts() {
  try {
    const { data } = yield call(() => getPosts());
    yield put(fetchPostsSuccess(data));
  } catch (e) {
    yield put(fetchPostsFailure(e.message));
  }
}

export function* fetchPostSaga() {
  yield takeEvery(FETCH_POSTS_REQUEST, fetchPosts);
}
