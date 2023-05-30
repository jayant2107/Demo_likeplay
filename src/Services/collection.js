import { postApi, getApi, deleteApi, putApi } from "./api-methods";

const LOGIN = "user/login";

const HOME_PAGE_POSTS = "post/getPostsOnHomePageWithCount";

const TAGE_DETAILS = "post/getTagsDetails";

const REPORT_POST = "post/reportUserPost";

const HIDE_POST="post/hidePost";

const DELETE_POST="post/deleteShot";

const BLOCK_USER="post/blockUser";

const COMMENT_POST="post/createCommentOnPost";

const POST_LIKE_COMMENT="post/createLikeOnPost";

const Matcheduser='user/getMatchedUsers';

const POST_COMMENTS_LIST = "post/getCommentsDetails";

const COMMENT_HEARTLIKES = "post/commentHeartLikes";

const UPLOADED_POST_LISTS="user/profileView"

const sendrequest="/user/sendRequest"

const admiring='user/admiringUsers'

const admirers='/user/admirersUsers'

const notifications="/user/notificationsListing"

const notificationsclear='/user/clearNotifications'


export const getHomePagePost = () => {
  return getApi(`${HOME_PAGE_POSTS}`);
};

export const LoginApi = (payload) => {
  return postApi(LOGIN, payload);
};

export const getTagDetail = (post_id) => {
  return getApi(`${TAGE_DETAILS}?post_id=${post_id}`);
};

export const reportPostApi = (payload) => {
  return postApi(REPORT_POST, payload);
};

export const getMatchedUsers=(userstatus)=>{
  return getApi(`${Matcheduser}?attributeStatus=${userstatus}`)
}

export const hidePostApi = (payload) => {
  return postApi(HIDE_POST, payload);
};

export const deletePost = (id) => {
  return deleteApi(`${DELETE_POST}?post_id=${id}`);
};

export const blockUser = (payload) => {
  return postApi(BLOCK_USER, payload);
};

export const commentPost = (payload) => {
  return postApi(COMMENT_POST, payload);
};

export const updatePostLikeComment = (payload) => {
  return postApi(POST_LIKE_COMMENT, payload);
};

export const getCommentsList = (id) => {
  return getApi(`${POST_COMMENTS_LIST}?post_id=${id}`);
};

export const updateCommentLikeResponse = (payload) => {
  return postApi(COMMENT_HEARTLIKES, payload);
};

export const getUploadedPosts=()=>{
  return getApi(UPLOADED_POST_LISTS)
}

export const sendRequest=(payload)=>{
  return postApi(sendrequest,payload);
}

export const admiringUsers=(payload)=>{
  return getApi(admiring,payload)
}

export const admirersUsers=(payload)=>{
  return getApi(admirers,payload)
}
export const getnotificationList=(payload)=>{
  return getApi(notifications,payload)
}
export const clearNotifications=(payload)=>{
  return deleteApi(notificationsclear)
}