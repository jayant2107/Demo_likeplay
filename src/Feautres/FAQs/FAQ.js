import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import styled from 'styled-components'
import { Collapse, Space ,theme} from 'antd';


export default function FAQ() {
    const { Panel } = Collapse;
    const { token } = theme.useToken();
    const text='hlo like and play'
    const panelStyle={
        marginBottom: 24,
        background: '#F0F0F0',
        borderRadius:'10px',
        border:'none',
        padding:'5px 0px'
    
    }
  return (
   <Mainwrapper>
    <FAQheadder>
        <div className='faq-headder'>

        <div>
            <p>FAQs</p>

        </div>
        <div>
        <AiOutlineSearch/>
        </div>
        </div>

    </FAQheadder>
    <Questionsection>
        <div className='warning-msg'>
            <p>** Live Chat is Available Only from 9:00 Am -6:00 Pm Wat please Be Sure to Watch Our How it Works Video to also Make it Easier to Understand And Enjoy Our Platform**
            </p>
        </div>
        <div className='accordion'>
        <Collapse   bordered={false} expandIconPosition='end'  style={{
        background: token.colorBgContainer,
      }}>
    <Panel header="How do I upload my pictures?" key="1" style={panelStyle}>
      <p>Depending on your subscription level, you will be limited to the number of pictures you can upload. To upload your picture, click on the + sign, and you can browse in the picture will go in for Review. At this time, you may not have access to your profile, as it will be "In Review" status until approved. Forease of approval, please ensure that your upload checks all the boxesof a profile picture. </p>
    </Panel>
    <Panel header="Why can't see my profile picture?" key="2" style={panelStyle}>
      <p>You might notice that after you upload your photo it does not show up on your dating profile. This is because we have to review each photo uploaded on LikePlay-LikePlay.com to ensure authenticity and quality. Rest assured that once we've thoroughly reviewed your photo, it will immediately show up on your profile.</p>
    </Panel>
    <Panel header="How does the Refer 5 friends work?" key="3" style={panelStyle}>
      <p>You can refer five friends at a minimum who sign up using your referral code. The status of sign-up does not matter, so long as they are signed up, using your code which is immediately provided once you use the Refer 5 friends, you will be allowed a standard subscription the following month. There are no cash refunds for this feature.</p>
    </Panel>
    <Panel header="What is the purpose of Newsletter?" key="4" style={panelStyle}>
      <p>Our newsletter allows you an opportunity to enjoy the stories we feature on our Take the Floor, Pick the Mic"</p>
    </Panel>
    <Panel header="Who is a Super-User?" key="5" style={panelStyle}>
      <p>To reward  those who participate, and draw in conversations, we created a Super-User class. These are folks who on a weekly basis are making a minimum of twenty-one comments or posting per week. </p>
    </Panel>
    <Panel header="How can I upgrade my subscription?" key="6" style={panelStyle}>
      <p>Click on Subscription located in the profile section of your screen. Select your desired membership type. Please note that the 5-Day trial will only be offered once. Then select Upgrade and your NEW subscription level, and then enter all the necessary payment details to start enjoying our upgraded features.</p>
      </Panel>
      <Panel header="How can I cancel my subscription?" key="7" style={panelStyle}>
        <p>Our subscription policy offers no refund. You can still contact us to cancel your current subscription, through Customer Support through Email or Live Support.</p>
      </Panel>
      <Panel header="How can I get a refund?" key="8" style={panelStyle}>
        <p>If you wish to get a refund , please review our Refund Policy. If qualified: Go to Contact Us.</p>
      </Panel>
      <Panel header="How can I report a user if there is an incident?" key="9" style={panelStyle}>
        <p>Go to the member's profile that you wish to report. Click on Report User. Select the reason for your report, then click Submit Report.</p>
        <p>A member of our client services team will have to review your report and do the appropriate action.</p>
      </Panel>
      <Panel header='How can I chat with someone that I Admire who dey "Enter my eye?"'  key="10" style={panelStyle}>
        <p>If someone is entering your eye on your match list, then go ahead and click the check mark pink box. If they respond back by Admiring you, then it's a match. You need that mutual Admiration before you can chat with the member.</p>
      </Panel>
      <Panel header="I have a Standard subscription, but my Match wants to video call, What happens?" key="11" style={panelStyle}>
        <p>Unfortunately, because you do not have an upgraded subscription, they cannot video call you. You are encouraged to get an upgraded subscription to be able to video call one another, however; you both can Chat since you have a Standard subscription. </p>
      </Panel>
      <Panel header="I choose physical attributes ONLY for my match list, but I want to re-do it. What should I do?" key="12" style={panelStyle}>
        <p>You can go to your Settings page and select Edit Profile. It will allow you start afresh and you Edit will return again for Approval before it is Live again.</p>
      </Panel>
      <Panel header="I live in Ghana and I am Ghanaian but want to check out guys in Congo. What is the way to do it?" key="13" style={panelStyle}>
        <p>This is the reason we are here. If you wish to date other Africans, then select the country you wish to date from, andyou have to create a new profile, and be re-approved for that country as well as pay a new subscription. Once approved, you can start browsing from that country</p>
      </Panel>
      <Panel header="I am attracted to 2 guys on this platform, I can say I am seeing both of them. One has asked me to sign-off from the platform. If I delete my profile, can I come back if it does not work out What happens??" key="14" style={panelStyle}>
        <p>Well Congratulations! We ask you to maintain your profile, even if you have to reduce subscription level.</p>
        <p>However, you need to know that by going to your settings, you can delete the app, and re-sign up if things do not pan as expected. Good luck! Remember to post a Testimonial.</p>
      </Panel>
  </Collapse>
        </div>

    </Questionsection>
   </Mainwrapper>
  )
}
const Mainwrapper=styled.div`
`
const FAQheadder=styled.div`
background:#F0F0F0;
.faq-headder{
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:20px;
}



`
const Questionsection=styled.div`
padding:20px;
.warning-msg{
    p{
        color: #FF384D;
        line-height:24px;
        letter-spacing:2px;

    }

}
.accordion{
    padding:20px 0px;
    .ant-collapse-header-text{
        color: black;
        font-weight:400;
        font-size:16px;
        letter-spacing:1px;

    }
}

`
