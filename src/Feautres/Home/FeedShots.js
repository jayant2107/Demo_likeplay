import React, { useEffect, useState } from "react";

// FAKE DATA
import { ShotsData } from "./DataPage";
import UserPostCard from "./UserPostCard";
import { getUploadedPosts } from "Services/collection";
import { toast } from "react-toastify";
import Loader from "Components/Loader";
import moment from "moment";
import { useSelector } from "react-redux";

const FeedShots = () => {
  const [loading, setLoading] = useState(true);
  const [postList, setPostList] = useState([]);
  const loginuser_id=useSelector((e)=>e?.UserId?.id)

  const parseHomeContent=(payload,image,name)=>{
    const parseData=payload?.map((list)=>({
      id:list?.user_id,
      userName:name || "",
      matchValue:list?.user_id===loginuser_id,
      profile_img:process.env.REACT_APP_BASEURL_IMAGE+image,
      date:moment(list?.User?.createdAt).local().format('DD MMMM LT'),
      caption:list?.caption || "",
      shots:list?.PostContents[0]?.media_url,
      media_type:list?.media_type,
      post_id:list?.id,
      totalLikeByHeart:parseInt(list?.PostContents[0]?.totalLikeByHeart),
      totalLikeByStar:parseInt(list?.PostContents[0]?.totalLikeByStar),
      totalLikeByThumb:parseInt(list?.PostContents[0]?.totalLikeByThumb),
      totalCommments:parseInt(list?.PostContents[0]?.totalCommentOnThisPost),
      totalTags:list?.PostContents[0]?.totalTagsOnThisPost,
      userLikeByHeart:list?.PostContents[0]?.CurrentUserLikeByHeart==="0"?false:true,
      userLikeByStar:list?.PostContents[0]?.CurrentUserLikeByStar==="0"?false:true,
      userLikeByThumb:list?.PostContents[0]?.CurrentUserLikeByThumb==="0"?false:true,
    }))
    return parseData;
  }

  const handleUploadedPosts = async () => {
    setLoading(true);
    let res = await getUploadedPosts();
    if (res?.status === 200) {
      let image=res?.data?.user_images_while_signup[0]?.image_url;
      let name=res?.data?.user_name;
      let parseData = await parseHomeContent(res?.data?.Posts,image,name)
      setPostList(parseData || [])
      setLoading(false);
    } else {
      toast.error(res?.message);
      setLoading(false);
    }
  };

  useEffect(()=>{
    handleUploadedPosts()
  },[])

  // useEffect(() => {
  //   getUploadedPosts();
  // },[]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        postList.map((val, index) => {
          return <UserPostCard val={val} key={index} handleUploadedPosts={handleUploadedPosts}/>;
        })
      )}
    </>
  );
};

export default FeedShots;
