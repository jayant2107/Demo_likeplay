import { postApi, getApi, deleteApi, putApi } from "./api-methods";

const LOGIN = "user/login";
const HOME_PAGE_POSTS = "post/getPostsOnHomePageWithCount";
const TAGE_DETAILS = "post/getTagsDetails";

export const getHomePagePost = () => {
  return getApi(`${HOME_PAGE_POSTS}`);
};

export const LoginApi = (payload) => {
  return postApi(LOGIN, payload);
};

export const getTagDetail = (post_id) => {
  return getApi(`${TAGE_DETAILS}?post_id=${post_id}`);
};

// export const approvePreRegUser = (payload) => {
//   return putApi(PARTICULAR_MATCHES_LIST, payload);
// };

// export const deleteReport = (id) => {
//   return deleteApi(`${DELETE_REPORT}?report_id=${id}`);
// };
// GET : /post/getTagsDetails?post_id
