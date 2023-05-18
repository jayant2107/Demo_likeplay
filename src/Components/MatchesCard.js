import React from 'react'
import styled from 'styled-components';
import logo1 from "../Assets/Images/Matches Image/logo1 (1).png"
import logo2 from "../Assets/Images/Matches Image/logo1 (2).png"


const MatchesCard = ({props}) => {
  return (
    <MatchesCardStyle>
     <div className="MainDiv" >
       
       <img src={props.Image} alt='' className="img"/>
       {
        props.Type && 
           <div className='type'><p>{props.Type}</p></div>

       }
       <p className='Name'>{props.Name}</p>
       <div className='Div1'>
       <p className='common'>{props.Age}</p>
       <span className='dot'></span>
       <p className='common'>{props.City} </p>
       <span className='dot'></span>
       <p className='common'>{props.Country}</p>
     </div>
     </div>
     <div className='MainDiv2'>
    <button className='Button1'><img src={logo1} alt=''/></button>
    <button className='Button2'><img src={logo2} alt=''/></button>
     </div>
    </MatchesCardStyle>
  )
}

export default MatchesCard;

const MatchesCardStyle = styled.div`
width: 145px;
height: 300px;
*{
    border: none;
    margin: 0%;
    padding: 0%;
    box-sizing: border-box;
}

.type{
position: absolute;
top: 4%;
left: 4%;
width: 41px;
height: 16px;
background: linear-gradient(268.55deg, #FF483C 0%, #FF2C5A 100%);
border-radius: 10px;
}
.type p{
font-size: 12px;
text-align: center;


color: #FFFFFF;
}
.MainDiv{
    position: relative;
}
.img{
background: url(.jpg), #D9D9D9;
border-radius: 9px;
}
.Name{
    font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
display: flex;
align-items: center;
letter-spacing: 0.05em;
color: #242424;
}
.common{
    font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 18px;
display: flex;
align-items: center;
color: #7B7F91;
}
.Div1{
    display: flex;
    justify-content: space-around;

}
.dot{
    
    border: 1px solid #7B7F91 ;
    border-radius: 5rem;
    background: #7B7F91;
    width: 4px;
    height: 4px;
    margin: auto;
}
.Button1{
width: 67.5px;
height: 24px;
background: linear-gradient(268.55deg, #FF483C 0%, #FF2C5A 100%);
border-radius: 5px;
z-index: 0;
}
.Button2{
width: 67.5px;
height: 24px;
background: #F2F2F2;
border-radius: 5px;
/* z-index: 0; */
}
.MainDiv2{
    display: flex;
    justify-content: space-between;
    margin-top: 0.5rem;
}

`;
