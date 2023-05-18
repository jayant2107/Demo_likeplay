import React, { useState } from 'react'
import styled from 'styled-components'
import FeedAboutMe from './FeedAboutMe'
import FeedShots from './FeedShots';

const FeedMyProfile = () => {
    const [active,setActive] = useState('aboutme');

  return (
    <FeedMyProfileCss>
        <div className='navDiv'>
            <div className='border-wrap '>

            <span className={`${active === 'shorts' ? 'active' : 'navButton'}`} onClick={()=>setActive('shorts')}>Shorts</span>
            </div>
            <span className={`${active === 'aboutme' ? 'active' : 'navButton'}`} onClick={()=>setActive('aboutme')}>About me</span>
        </div>
        
        {
            active === 'shorts' ? <FeedShots/> : <FeedAboutMe/> 
        }
    </FeedMyProfileCss>
  )
}

export default FeedMyProfile

export const FeedMyProfileCss = styled.div`
height: auto;
padding: 1rem;
font-family: 'Poppins', sans-serif;

.navDiv{
    height : 3rem;
    display : flex;
    justify-content : center;
    align-items : center;
}
.navButton{
    margin : 0 0.5rem;
    background-color : white;
    border : 1px solid white;
    color : #7B7F91;
    cursor : pointer;
    font-size : 14px;
}
.active{
    padding : 0.2rem 0.4rem;
    color : #242424;
    font-size : 14px;
    margin : 0 0.5rem;
    background-color : white;
    color : #7B7F91;
    cursor : pointer;
    border-bottom : 2px solid #f04142;
}
`