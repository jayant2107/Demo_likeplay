import React, { useState } from 'react'
import styled from 'styled-components'

import {sidebarimage} from '../Utils/Images';
import { Admirers, Admiring, FAQ, Home, Matches, Menu, Messages, Notification, Setting, Subscription, Testimonial } from '../Utils/Logo';





export default function Sidebar() {
    const [colorsetting,setcolorsetting]=useState(false)
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
                <Slinkcontainer  onMouseEnter={()=> setcolorsetting(true)} onMouseLeave={()=>setcolorsetting(false)}>
                    <Slogo>
                    <Admiring color={colorsetting?primarycolor:secondarycolor}/>
                        
                    </Slogo>
                    <Slabel>
                        <p>Admiring</p>
                    </Slabel>
                </Slinkcontainer>
                <Slinkcontainer  onMouseEnter={()=> setcolorsetting(true)} onMouseLeave={()=>setcolorsetting(false)}>
                    <Slogo>
                    <Admirers color={colorsetting?primarycolor:secondarycolor}/>
                       
                    </Slogo>
                    <Slabel>
                        <p>Admirers</p>
                    </Slabel>
                </Slinkcontainer>
                <Slinkcontainer  onMouseEnter={()=> setcolorsetting(true)} onMouseLeave={()=>setcolorsetting(false)}>
                    <Slogo>
                    <Messages color={colorsetting?primarycolor:secondarycolor}/>
                        
                    </Slogo>
                    <Slabel>
                        <p>Messages</p>
                    </Slabel>
                </Slinkcontainer>
                <Slinkcontainer  onMouseEnter={()=> setcolorsetting(true)} onMouseLeave={()=>setcolorsetting(false)}>
                    <Slogo>
                    <Notification color={colorsetting?primarycolor:secondarycolor}/>
                      
                    </Slogo>
                    <Slabel>
                        <p>Notification</p>
                    </Slabel>
                </Slinkcontainer>
                <Slinkcontainer  onMouseEnter={()=> setcolorsetting(true)} onMouseLeave={()=>setcolorsetting(false)}>
                    <Slogo>
                    <Matches color={colorsetting?primarycolor:secondarycolor}/>
                       
                    </Slogo>
                    <Slabel>
                        <p>Matches</p>
                    </Slabel>
                </Slinkcontainer>
                <Slinkcontainer  onMouseEnter={()=> setcolorsetting(true)} onMouseLeave={()=>setcolorsetting(false)}>
                    <Slogo>
                    <Setting color={colorsetting?primarycolor:secondarycolor}/>
                       
                    </Slogo>
                    <Slabel>
                        <p>Setting</p>
                    </Slabel>
                </Slinkcontainer>
                <Slinkcontainer  onMouseEnter={()=> setcolorsetting(true)} onMouseLeave={()=>setcolorsetting(false)}>
                    <Slogo>
                    <Subscription color={colorsetting?primarycolor:secondarycolor}/>
                      
                    </Slogo>
                    <Slabel>
                        <p>Subscription</p>
                    </Slabel>
                </Slinkcontainer>
                <Slinkcontainer onMouseEnter={()=> setcolorsetting(true)} onMouseLeave={()=>setcolorsetting(false)}>
                    <Slogo>
                    <FAQ color={colorsetting?primarycolor:secondarycolor}/>
                        
                    </Slogo>
                    <Slabel>
                        <p>FAQs</p>
                    </Slabel>
                </Slinkcontainer>
                <Slinkcontainer onMouseEnter={()=> setcolorsetting(true)} onMouseLeave={()=>setcolorsetting(false)}>
                    <Slogo>
                    <Testimonial/>
                        
                    </Slogo>
                    <Slabel>
                        <p>Testimonial</p>
                    </Slabel>
                </Slinkcontainer>
                <Slinkcontainer>
                    <Slogo>
                 <Menu color='black'/>
                    </Slogo>
                    <Slabel>
                        <p style={{color:'black'}}>Menu</p>
                    </Slabel>
                </Slinkcontainer>
            </Sidebarwrapper>

        </>
    )
}
const Sidebarwrapper = styled.div `
width:300px;
height:100vh;
position:fixed;
background-color:white;
border-right:1px solid #E2E2E2
`
const Mainlogo = styled.div `
display:flex;
align-items:center
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
&:hover{
    color:"red"
}
`
const Slabel = styled.div `
p{
    font-size:16px;
    color:#7B7F91;
}
`
