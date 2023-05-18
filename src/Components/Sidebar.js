import React, { useState } from 'react'
import styled from 'styled-components'

import {sidebarimage} from '../Utils/Images';
import '../Style/global.css'

import { Popover } from 'antd';
import { Admirers, Admiring, FAQ, Home, Matches, Menu, Messages, Notification, Setting, Subscription, Testimonial } from '../Utils/Logo';





export default function Sidebar() {
    const [colorsetting,setcolorsetting]=useState(false)
    const [Admiringcolor,setAdmiringcolor]=useState(false)
    const [Admirerscolor,setAdmirerscolor]=useState(false)
    const [messagescolor,setmessagescolor]=useState(false)
    const [Notificationcolor,setNotificationcolor]=useState(false)
    const [Matchescolor,setMatchescolor]=useState(false)
    const [Settingcolor,setSettingcolor]=useState(false)
    const [Subscriptioncolor,setsubscriptioncolor]=useState(false)
    const [FAQcolor,setFAQcolor]=useState(false)
    const [Testimonialcolor,setTestimonialcolor]=useState(false)
    const content=(<Morecontent>
    <p>Verification</p>
    <p>Refer to friends</p>
    <p style={{color:'red'}}>Logout</p>
    </Morecontent>)
    const primarycolor='#A8580F'
    const secondarycolor='#7B7F91'
    return (
        <>
            <Sidebarwrapper>
                <Mainlogo>
                    <img src={sidebarimage}
                        alt=''
                        style={
                            {color: 'red'}
                        }/>


                </Mainlogo>
                <Slinkcontainer onMouseEnter={()=> setcolorsetting(true)} onMouseLeave={()=>setcolorsetting(false)} >
                    <Slogo>
                    <Home color={colorsetting?primarycolor:secondarycolor}/>
                        
                    </Slogo>
                    <Slabel>
                        <p>Home</p>
                    </Slabel>
                </Slinkcontainer>
                <Slinkcontainer  onMouseEnter={()=> setAdmiringcolor(true)} onMouseLeave={()=>setAdmiringcolor(false)}>
                    <Slogo>
                    <Admiring color={Admiringcolor?primarycolor:secondarycolor}/>
                        
                    </Slogo>
                    <Slabel>
                        <p>Admiring</p>
                    </Slabel>
                </Slinkcontainer>
                <Slinkcontainer  onMouseEnter={()=> setAdmirerscolor(true)} onMouseLeave={()=>setAdmirerscolor(false)}>
                    <Slogo>
                    <Admirers color={Admirerscolor?primarycolor:secondarycolor}/>
                       
                    </Slogo>
                    <Slabel>
                        <p>Admirers</p>
                    </Slabel>
                </Slinkcontainer>
                <Slinkcontainer  onMouseEnter={()=> setmessagescolor(true)} onMouseLeave={()=>setmessagescolor(false)}>
                    <Slogo>
                    <Messages color={messagescolor?primarycolor:secondarycolor}/>
                        
                    </Slogo>
                    <Slabel>
                        <p>Messages</p>
                    </Slabel>
                </Slinkcontainer>
                <Slinkcontainer  onMouseEnter={()=> setNotificationcolor(true)} onMouseLeave={()=>setNotificationcolor(false)}>
                    <Slogo>
                    <Notification color={Notificationcolor?primarycolor:secondarycolor}/>
                      
                    </Slogo>
                    <Slabel>
                        <p>Notification</p>
                    </Slabel>
                </Slinkcontainer>
                <Slinkcontainer  onMouseEnter={()=> setMatchescolor(true)} onMouseLeave={()=>setMatchescolor(false)}>
                    <Slogo>
                    <Matches color={Matchescolor?primarycolor:secondarycolor}/>
                       
                    </Slogo>
                    <Slabel>
                        <p>Matches</p>
                    </Slabel>
                </Slinkcontainer>
                <Slinkcontainer  onMouseEnter={()=> setSettingcolor(true)} onMouseLeave={()=>setSettingcolor(false)}>
                    <Slogo>
                    <Setting color={Settingcolor?primarycolor:secondarycolor}/>
                       
                    </Slogo>
                    <Slabel>
                        <p>Setting</p>
                    </Slabel>
                </Slinkcontainer>
                <Slinkcontainer  onMouseEnter={()=> setsubscriptioncolor(true)} onMouseLeave={()=>setsubscriptioncolor(false)}>
                    <Slogo>
                    <Subscription color={Subscriptioncolor?primarycolor:secondarycolor}/>
                      
                    </Slogo>
                    <Slabel>
                        <p>Subscription</p>
                    </Slabel>
                </Slinkcontainer>
                <Slinkcontainer onMouseEnter={()=> setFAQcolor(true)} onMouseLeave={()=>setFAQcolor(false)}>
                    <Slogo>
                    <FAQ color={FAQcolor?primarycolor:secondarycolor}/>
                        
                    </Slogo>
                    <Slabel>
                        <p>FAQs</p>
                    </Slabel>
                </Slinkcontainer>
                <Slinkcontainer onMouseEnter={()=> setTestimonialcolor(true)} onMouseLeave={()=>setTestimonialcolor(false)}>
                    <Slogo>
                    <Testimonial color={Testimonialcolor?primarycolor:secondarycolor}/>
                        
                    </Slogo>
                    <Slabel>
                        <p>Testimonial</p>
                    </Slabel>
                </Slinkcontainer>
                <Slinkcontainer>
                    <Slogo>
                 <Menu color='black'/>
                    </Slogo>
                    <Popover content={content}  >

                    <Slabel >
                        <p style={{color:'black'}}>More</p>
                    </Slabel>
                    </Popover>
                </Slinkcontainer>
            </Sidebarwrapper>

        </>
    )
}
const Morecontent=styled.div`
padding: 10px 25px;

border: 1px solid #DDDDDD;
border-radius:10px;
color: #7B7F91;
P{
    padding:0px;
    font-size:16px;
    cursor: pointer;
}


`
const Sidebarwrapper = styled.div `
width:300px;
height:100vh;
// position:fixed;
background-color:white;
border-right:1px solid #E2E2E2;
`
const Mainlogo = styled.div `
display:flex;
align-items:center;
width:100%;
justify-content:center;
padding:20px;
img{
    height:100px;
    width:110px;
}
`
const Slinkcontainer = styled.div `
display:flex;
align-items:center;
gap:20px;
padding:0px 80px;
cursor: pointer;
&:hover{
    p{
        color:
        #A8580F;
    }
}



`

const Slogo = styled.div `

`
const Slabel = styled.div `
p{
    font-size:16px;
    color:#7B7F91;
}
`
