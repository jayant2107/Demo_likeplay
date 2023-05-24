import { postApi, getApi, deleteApi, putApi } from "./api-methods";

const LOGIN = "user/login";

const Home_PAGE_POSTS="post/getPostsOnHomePageWithCount"

const PARTICULAR_MATCHES_LIST = "/admin/MatchList";

const DELETE_REPORT = "/admin/deleteReport";

export const getHomePagePost = () => {
  return getApi(`${Home_PAGE_POSTS}`);
};

export const LoginApi = (payload) => {
  return postApi(LOGIN, payload);
};

export const approvePreRegUser = (payload) => {
  return putApi(PARTICULAR_MATCHES_LIST, payload);
};

export const deleteReport = (id) => {
  return deleteApi(`${DELETE_REPORT}?report_id=${id}`);
};
