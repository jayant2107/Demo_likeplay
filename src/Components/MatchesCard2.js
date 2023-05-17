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
                <p className="Age"> {props.Age}</p>
                <span></span>
                <p className='city'> {props.City}</p>
                <span></span>
                <p className='Country'>{props.Country} </p>
                </div>
                <div className='Div3'>
                    <button className='button'>Entering my eye</button>
                    <button className='button1'> <img src={img1} alt="" className='img'/> Waive</button>
                </div>
            </div>
            <div className='Div4'>
                <p className='about'>About</p>
                <p className='About'> {props.About}</p>               
            </div>
            <div className='Div5'>
                <p className="Images"> Images </p>
                {props.Photos.map((Photo) =>(
                     <img src={Photo} alt='' className='img1' />
                ))

                }
            </div>
        </div>
    </MatchesCard2Style>
  )
}

export default MatchesCard2;


const MatchesCard2Style = styled.div`
*{
    margin: 0%;
    padding: 0%;
    box-sizing: border-box;
    border: none;;
}
.Div5{
width: 100%;

}
.img1{
    padding: 1rem;
}
.Photo{
    width: 100%;
    height: 100%;
}
`;
