import moment from 'moment'
import React from 'react'
import UserPostCard from './UserPostCard'

export default function UserPosts({data,profileimg,name}) {
    const profile_img=process.env.REACT_APP_BASEURL_IMAGE+profileimg[0]?.image_url

    const val=data?.map((list)=>({
        caption:list?.caption || "",
        date:moment (list?.createdAt).local().format('DD MMMM LT'),
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
        profile_img:profile_img,
        userName:name


    }))

  
  
   
 
  return (
    <>
    {
        val?.length>0?(val?.map((val,index)=>{
            return <UserPostCard val={val} key={index}/>
        })):(" Data Not Found")
    }


    </>
  )
}
