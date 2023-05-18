import React from 'react'
import styled from 'styled-components'
import { userprofile } from '../Utils/Images'
import { AiOutlineRight } from 'react-icons/ai'

export default function Rightsidebar() {
  return (
    <Rightsidebarwrapper>
        <Profilesection>
            <div>
                <p className='My_profile'>My Profile</p>
                <div className='profile_section'>
                    <img src={userprofile}
                    alt=''
                    height={50}
                    />
                    <p>Logan Lerman</p>
                    <AiOutlineRight/>

                   
                </div>
            </div>

        </Profilesection>
        <Messagessection>
            <p className='messages_text'>Messages</p>
            <div>
            <div className='messages_user'>
                <img src={userprofile}
                alt='' 
                height={40}
                />
                <p>Julia Roberts</p>

            </div>
            <div className='messages_user'>
                <img src={userprofile}
                alt='' 
                height={40}
                />
                <p>Julia Roberts</p>

            </div>
            <div className='messages_user'>
                <img src={userprofile}
                alt='' 
                height={40}
                />
                <p>Julia Roberts</p>

            </div>

            </div>
        

        </Messagessection>


    </Rightsidebarwrapper>
  )
}
const Rightsidebarwrapper=styled.div`
padding:10px;
width:300px;

`
const Profilesection=styled.div`
padding: 10px 20px;
border-radius:10px;
border:1px solid #E2E2E2;
color:#242424;
.profile_section{
    display:flex;
    align-items:center;
    gap:15px;

}
.My_profile{
    Font-weight:600;
    letter-spacing: 2px;
    font-size:14px;

    
    

}
p{
    font-size:16px;
    font-weight:500;
    letter-spacing:1px;
    
    
}

`
const Messagessection=styled.div`
padding: 10px 20px;
border-radius:10px;
border:1px solid #E2E2E2;
color:#242424;
margin:10px 0px;

.messages_text{
    letter-spacing:2px;
    font-weight:600;
    font-size:14px;
}
.messages_user{
    display:flex;
    align-items:center;
    gap:15px;

}
p{
    font-size:16px;
    font-weight:500;
    letter-spacing:1px;
    

}

`
