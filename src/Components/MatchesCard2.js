import React from 'react'
import styled from 'styled-components';
import img1 from "../Assets/Images/Matches Image/logo1 (2).png"

const MatchesCard2 = ({props}) => {
  return (
    <MatchesCard2Style>
        <div className='Main'>
            <div className='Div1'>
                <div className='Div2'>
                <p className='Name'>{props.Name}</p>
                <p className="Common"> {props.Age} <span className='dot'></span> {props.City} <span className='dot'/> {props.County}</p>
                </div>
                <div className='Div3'>
                    <button className='button'>Entering my eye</button>
                    <button className='button1'> <img src={img1} alt="" className='img'/> Waive</button>
                </div>
            </div>
            <div className='Div4'>
                <p className='about'>About</p>
                <p className='About1'> {props.About}</p>               
            </div>
            <p className="Images"> Images </p>
            <div className='Div5'>
               
                {props.Photos.map((Photo) =>(
                     <img src={Photo} alt='' className='img1' />
                ))

                }
            </div>
            <div className='Div6'>
                <div className='TDiv1'>
                <p className='Tag'>Status</p>
                <p className='Tag1'>{props.Status}</p>
                <p className='Tag'>Height</p>
                <p className='Tag1'>{props.Height}</p>
                <p className='Tag'>Employment</p>
                <p className='Tag1'>{props.Employment}</p>

                </div>
                <div className='TDiv2'>
                <p className='Tag'>Body Type</p>
                <p className='Tag1'>{props.Body_Type}</p>
                <p className='Tag'>Education</p>
                <p className='Tag1'>{props.Education}</p>
                <p className='Tag'>Interests</p>
                <p className='Tag1'>{props.Interests}</p>

                </div>
            </div>
            <div className='Div7'>
                <div className='TDiv1'>
                <p className='Tag'>Country of Residence</p>
                <p className='Tag1'>{props.Country_of_Residence}</p>
                <p className='Tag'>City</p>
                <p className='Tag1'>{props.City}</p>
                <p className='Tag'>Religion</p>
                <p className='Tag1'>{props.Religion}</p>

                </div>
                <div className='TDiv2'>
                <p className='Tag'>State</p>
                <p className='Tag1'>{props.State}</p>
                <p className='Tag'>Nationality</p>
                <p className='Tag1'>{props.Nationality}</p>

                </div>
                </div>
            <div className='Div8'>
                <div className='TDiv1'>
                <p className='Tag'>Age Range preferred to date</p>
                <p className='Tag1'>{props.Age_Range_Preferred_to_Date}</p>
                <p className='Tag'>Looking for</p>
                <p className='Tag1'>{props.Looking_For}</p>

                </div>
                <div className='TDiv2'>
                <p className='Tag'>Tribe to date</p>
                <p className='Tag1'>{props.Tribe_Preferred_to_Date}</p>

                </div>
            </div>
            <div className='space'></div>
        </div>
    </MatchesCard2Style>
  )
}

export default MatchesCard2;


const MatchesCard2Style = styled.div`
width:100%;
height:100%;
.Main{
    /* width: 90%; */
    /* margin: auto; */
    /* position: relative; */
    /* top: 3rem; */

}
*{
    margin: 0%;
    padding: 0%;
    box-sizing: border-box;
    border: none;;
}
.Name{
    font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 27px;
align-items: center;
letter-spacing: 0.05em;
color: #242424;  
}
.Common{
    font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 18px;
color: #7B7F91;
margin-top: 5px;
}
.dot {
  height: 4px;
  width: 4px;
  background-color: #242424;
  border-radius: 50%;
  display: inline-block;
  align-items: center;
  margin:3px;
}
.button{
    width: 127px;
height: 32px;
background: linear-gradient(268.55deg, #FF483C 0%, #FF2C5A 100%);
border-radius: 5px;
font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 800;
font-size: 13px;
line-height: 20px;
color: #FFFFFF;
}
.button1{
    width: 107px;
height: 32px;
background: #F2F2F2;
border-radius: 5px;
font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 800;
font-size: 13px;
line-height: 20px;
align-items: center;
margin-left: 1rem;
}
.Div1{
 display: flex;
 justify-content: space-between;
}
.Div4{
    margin-top: 2rem;
}
.about{
    font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 20px;
letter-spacing: 0.05em;
color: #242424;
}
.About1{
max-width:100%;
font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
align-items: center;
letter-spacing: 0.05em;
color: #7B7F91;
}
.Images{
    font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 20px;
letter-spacing: 0.05em;
color: #242424;
margin-top: 2rem;


}
.Div5{
width: 100%;
display: flex;
justify-content: space-between;

}
.Div6{
    background: #F8F8F8;
border-radius: 10px;
margin-top: 3rem;
display : flex;
justify-content: space-between;
width: 100%;

}
.img1{
width: 112px;
height: 160px;
border-radius: 10px;
margin-top: 0.5rem;


}
.Photo{
    width: 100%;
    height: 100%;
}
.Tag{
    font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 20px;
letter-spacing: 0.05em;
color: #242424;
padding: 4px 20px ;
margin-top: 0.5rem;
}
.Tag1{
    font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
display: flex;
align-items: center;
letter-spacing: 0.05em;
color: #7B7F91;
padding: 4px 20px 10px;
}
.Div7{
display: flex;
justify-content: space-between;
background: #F8F8F8;
border-radius: 10px;
margin-top: 1rem;
width: 100%;
}
.Div8{
    display: flex;
    justify-content: space-between;
    background: #F8F8F8;
border-radius: 10px;
margin-top: 1rem;
width: 100%;
}
.TDiv1{
    width: 50%;
}
.TDiv2{
width: 50%;
}
.space{
    margin-top: 5rem;
}
`;
