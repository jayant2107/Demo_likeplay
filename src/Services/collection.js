import { postApi, getApi, deleteApi, putApi } from "./api-methods";

const LOGIN = "user/login";

const HOME_PAGE_POSTS = "post/getPostsOnHomePageWithCount";

const TAGE_DETAILS = "post/getTagsDetails";

const REPORT_POST = "post/reportUserPost";

const HIDE_POST = "post/hidePost";

const DELETE_POST = "post/deleteShot";

const BLOCK_USER = "post/blockUser";

const COMMENT_POST = "post/createCommentOnPost";

const POST_LIKE_COMMENT = "post/createLikeOnPost";

const Matcheduser = "user/getMatchedUsers";

const POST_COMMENTS_LIST = "post/getCommentsDetails";

const COMMENT_HEARTLIKES = "post/commentHeartLikes";

const UPLOADED_POST_LISTS = "user/profileView";

const sendrequest = "/user/sendRequest";

const admiring = "user/admiringUsers";

const admirers = "/user/admirersUsers";

const notifications = "/user/notificationsListing";

const notificationsclear = "/user/clearNotifications";

const Register = "/user/register";

const testimonial = "/user/testimonials";

const updateProfile = "/user/updateProfile";

const userprofileview= '/user/profileView'

const uploadMediaFile = "/user/uploadMediaFile";

const deleteMediaFile = "/user/deleteMediaFile";

const introduceonfloor='/user/showUserOnFloor';

const likedposts='/user/getlikeShots'

const userVerification ='/user/userVerification';

const chooseAnyOne = '/user/chooseAnyOne';

const updateusersQuestions = "/user/updateusersQuestions"

const updatePartnersPhysicalQuestions = "/user/updatePartnersPhysicalQuestions"

const createPosts='/post/createPost'

const taglist ='/post/getAllUserForTag'

const likedetails='/post/getsLikesDetail'

const deleteshot="/post/deleteShot"

const deletetag='/post/deleteTagWhileUpdation'

const editpost='/post/editPost'

const passwordchange='/user/changeUserPassword'

const blockuser='/post/blockUser'

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

export const getMatchedUsers = (userstatus) => {
  return getApi(`${Matcheduser}?attributeStatus=${userstatus}`);
};

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

export const getUploadedPosts = () => {
  return getApi(UPLOADED_POST_LISTS);
};

export const sendRequest = (payload) => {
  return postApi(sendrequest, payload);
};

export const admiringUsers = (payload) => {
  return getApi(admiring, payload);
};

export const admirersUsers = (payload) => {
  return getApi(admirers, payload);
};
export const getnotificationList = (payload) => {
  return getApi(notifications, payload);
};
export const clearNotifications = (payload) => {
  return deleteApi(notificationsclear);
};

export const registerApi = (payload) => {
  return postApi(Register, payload);
};

export const getProfileView=(payload)=>{
  return getApi(`${userprofileview}?user_id=${payload}`)
}

export const usertestimonials = (payload) => {
  return postApi(testimonial, payload);
};

export const RegisterFirstStep = (payload) => {
  return putApi(updateProfile, payload);
};

export const UpdateMediaApi = (payload) => {
  return postApi(uploadMediaFile, payload);
};

export const DeleteMediaApi = (payload) => {
  console.log(payload);
  return deleteApi(deleteMediaFile, payload );
};

export const ShowuserOnFloor=(payload)=>{
  return putApi(introduceonfloor,payload)

}

export const Likedposts=(payload)=>{
  return getApi(likedposts,payload)
}

export const userVerificationApi=(payload)=>{
  return putApi(userVerification,payload);
}

export const chooseAnyOneApi =(payload) =>{
  return postApi(chooseAnyOne,payload);
}

export const updateusersQuestionsApi=(payload)=>{
  return putApi(updateusersQuestions,payload);
}

export const updatePartnersPhysicalQuestionsApi=(payload)=>{
  return putApi(updatePartnersPhysicalQuestions,payload);
}
export const createNewPosts=(payload)=>{
  return postApi(createPosts,payload)
  
}

export const getTaglist=(payload)=>{
  return getApi(taglist,payload)
}

export const getLikedetails=(postid,type)=>{
  return getApi(`${likedetails}?post_id=${postid}&type=${type}`)
}

export const getDeleteshot=(payload)=>{
  return deleteApi(`${deleteshot}?post_id=${payload}`)
}

export const deleteTagwhileupdation=(payload)=>{
  return deleteApi(`${deletetag}?id=${payload}`)
}

export const EditUserPost=(payload)=>{
  return putApi(editpost,payload)
}

export const changeUserPassword=(payload)=>{
  return putApi(passwordchange,payload)
}

export const blockuserlisting=(payload)=>{
  return postApi(blockuser,payload)
}