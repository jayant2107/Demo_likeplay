import React from 'react'
import styled from 'styled-components'

export const SubscriptionFooter = () => {
  return (
    <Footer>
    <div className='conatiner234'>
        <div className='Privacy-Policy'>
            <h5 className='priv'>Privacy Policy</h5>
            <h5 className='terms-and-condition'>Terms and condition</h5>
            <h5 className='refund-policy'>Refund Policy</h5>
        </div>
    </div>
    </Footer>
  )
}
const Footer = styled.div`

    .Privacy-Policy {
    text-transform: uppercase;
    display: flex;
    text-decoration: underline;
    justify-content: space-between;
    /* height: 56px; */
    align-items: center;
    color: white;
    background: rgba(0, 0, 0, 0.4);
    padding: 1rem 4rem;
    /* margin-top: 32%;
    margin-left: -19px; */
    margin-right: -19px;

    /* margin-top: -39px; */
    position: relative;
    z-index: 2;
    min-height: 94%;
    min-width: 1000px;
    width: 100%;
    height: auto;
    position: relative;
    top: -83px;
    left: 0;
}

`
