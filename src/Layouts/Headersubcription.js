import React from 'react'
import styled from 'styled-components'
import vector from '../Assets/Icons/Vector.svg'
import vector1 from '../Assets/Icons/Vector (1).svg'
import vector2 from '../Assets/Icons/Vector (2).svg'
import vector3 from '../Assets/Icons/Vector (3).svg'
const Headersubcription = () => {
  return (
    <>
                <StyledSubscription>
            <div className='diam'>
                <div className='diamonds'>
                    <img src={vector} alt='' className='vector'/>
                    <h2 className='diamonds-head'>Basic</h2>
                </div>
                <div className='diamonds1'>
                    <img src={vector1} alt='' className='vector1'/>
                    <h2 className='Standard'>Standard</h2>
                </div>
                <div className='diamonds2'>
                    <img src={vector2} alt='' className='vector2'/>
                    <h2 className='GOLD'>GOLD</h2>
                </div>
                <div className='diamonds3'>
                    <img src={vector3} alt='' className='vector3'/>
                    <h2 className='PLATINUM'>PLATINUM</h2>
                </div>
                </div>
                
                </StyledSubscription>
    </>
  )
}

export default Headersubcription
const StyledSubscription = styled.div`
.diamonds-head{
    font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 26px;
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 26px;
align-items: center;
margin-left: -6px;
letter-spacing: 0.05em;
color: #242424;
}
.Standard{
    font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 26px;
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 26px;
align-items: center;
margin-left: -6px;
letter-spacing: 0.05em;
color: #242424;
}
.GOLD{
    font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 26px;
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 26px;
align-items: center;
margin-left: -6px;
letter-spacing: 0.05em;
color: #242424;
}
.PLATINUM{
    font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 26px;
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 26px;
align-items: center;
margin-left: -6px;
letter-spacing: 0.05em;
color: #242424;
}

.diamonds {
    border-bottom: 2px solid #E2E2E2;
}
.diamonds1 {
    border-bottom: 2px solid #E2E2E2;
}
.diamonds2 {
    border-bottom: 2px solid #E2E2E2;
}
.diamonds3 {
    border-bottom: 2px solid #E2E2E2;
    margin-right: 3%;
}
.diam{
    display: flex;
    justify-content: center;
    gap: 10%;
    margin-top: 30px;
}
.vector {
    margin-left: 10px;
}
.vector1 {
    margin-left: 16px;
}
.vector3 {
    margin-left: 6px;
}
.PLATINUM {
    margin-left: -35px;
}
`