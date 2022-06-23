import { http } from "./httpServices";

export function editPost(postId) {
  return http.post(`/posts/${postId}`, post);
}
