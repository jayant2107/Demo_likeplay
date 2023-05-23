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
    <Panel header="How do I upload my picture?" key="1" style={panelStyle}>
      <p>{text}</p>
    </Panel>
    <Panel header="Why can't see my profile picture?" key="2" style={panelStyle}>
      <p>{text}</p>
    </Panel>
    <Panel header="What is the purpose of Newsletter?" key="3" style={panelStyle}>
      <p>{text}</p>
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
