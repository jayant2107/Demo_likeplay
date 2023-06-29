import Loader from "Components/Loader";
import { Likedposts } from "Services/collection";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import UserPostCard from "./UserPostCard";
import { Nodata } from "Components/Nodata";

export default function LikedPosts() {
  const [val, setval] = useState([]);
  const [loading, setloading] = useState(false);

  const parseHomeContent = (payload, image, name) => {
    const parseData = payload?.map((list) => ({
      id: list?.User?.id,
      userName: list?.Post?.User?.user_name || "",
      profile_img:
        process.env.REACT_APP_BASEURL_IMAGE +
        list?.Post?.User?.photos_for_verification,
      date: moment(list?.User?.createdAt).local().format("DD MMMM LT"),
      caption: list?.caption || "",
      shots: list?.Post?.PostContents[0]?.media_url,
      media_type: list?.Post?.PostContents[0]?.media_type,
      post_id: list?.post_id,
      totalLikeByHeart: parseInt(list?.Post?.PostContents[0]?.totalLikeByHeart),
      totalLikeByStar: parseInt(list?.Post?.PostContents[0]?.totalLikeByStar),
      totalLikeByThumb: parseInt(list?.Post?.PostContents[0]?.totalLikeByThumb),
      totalCommments: parseInt(
        list?.Post?.PostContents[0]?.totalCommentOnThisPost
      ),
      totalTags: list?.Post?.PostContents[0]?.totalTagsOnThisPost,
      userLikeByHeart:
        list?.Post?.PostContents[0]?.CurrentUserLikeByHeart === "0"
          ? false
          : true,
      userLikeByStar:
        list?.Post?.PostContents[0]?.CurrentUserLikeByStar === "0"
          ? false
          : true,
      userLikeByThumb:
        list?.Post?.PostContents[0]?.CurrentUserLikeByThumb === "0"
          ? false
          : true,
    }));
    return parseData;
  };

  const listing = async () => {
    setloading(true);
    const req = await Likedposts();
    if (req?.status === 200) {
      const data = await parseHomeContent(req?.data?.likeDetails);
      setval(data);
      setloading(false);
    } else {
      setloading(false);
      toast.error(req?.message || "Something went Wrong");
    }
  };
  useEffect(() => {
    listing();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (val?.length>0?(  val?.map((item, index) => {
        return (
          <>
            <UserPostCard val={item} index={index} />
          </>
        );
      })):(<Nodata>No Data found</Nodata>)
      
      )}
    </>
  );
}
