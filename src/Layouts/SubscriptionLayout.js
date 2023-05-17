// import React from 'react'
// import styled from 'styled-components'
// import { subitems } from '../Services/Subscriptionsjson'
// import Headersubcription from './Headersubcription'

import { subitems } from "../Services/Subscriptionsjson";
import styled from "styled-components";
import tick from '../Assets/Icons/Vector.svg'
import tick1 from '../Assets/Icons/Vector (1).svg'
import tick2 from '../Assets/Icons/Vector (2).svg'
import tick3 from '../Assets/Icons/Vector (3).svg'


// const SubscriptionLayout = () => {
//     return (
//         <>
//             <StyledSubscription>
           
//            <Headersubcription/>
//                 <div className="slide-menu">
//                 {subitems.map((e)=>{
//                     return(
//                         <>
//                     <div className="nav flex-column nav-pills me-3" id="v-pills-tab" >
//                     <div className='cont'>
//                     <div className='Para1'>
//                         <p className='Complimentary'>{e.p}</p>
//                         </div>
//                         <div className='subcriptions-images'>
//                         <img src={e.pic} alt='' className='Complimentary1' />
//                         <img src={e.pic1} alt='' className='Complimentary1' />
//                         <img src={e.pic2} alt='' className='Complimentary1' />
//                         <img src={e.pic3} alt='' className='Complimentary1' />
//                         </div>
//                         <p className='Complimentary'>{e.p1}</p>
//                         <p className='Complimentary'>{e.p2}</p>
//                         <p className='Complimentary'>{e.p3}</p>
//                         <p className='Complimentary'>{e.p4}</p>
//                         </div>
//                         <div className='home1'>
                       
                       
//                     </div>
//                 </div>

//                         </>
//                     )
//                 })}
//                 </div>

//             </StyledSubscription>

//         </>
//     )
// }

// export default SubscriptionLayout
// const StyledSubscription = styled.div`
// .nav flex-column nav-pills me-3{
//     font-family: 'Poppins';
// font-style: normal;
// font-weight: 400;
// font-size: 12px;
// display: flex;
// align-items: center;
// color: #242424;
// border-left: 2px red solid;
// }
// .Complimentary{
// width: 85%;
// height: 40px;
// margin-left: 20px;
// }

// .slide-menu{
//     width: 45%;
// }
// .cont{
//     display: flex;
//     border-right: 2px solid red;
// }
// .subcriptions-images{
//     display: flex;
// }
// .para1{
//     border-right: 2px solid blue;
// }

// `

    
  function App() {
    return (
        <StyledTable>
      <div className="App">
        <table>
          <tr>
          <th></th>
          <div className="wrap-head">
            <th><div className="head">
            <img src={tick} alt="" className="head-img"/>
                <p>Basic</p>
            </div></th>
            <th>
            <div className="head">
            <img src={tick1} alt="" className="head-img"/>
            <p>Standard</p>
            </div></th>
            <th><div className="head">
            <img src={tick2} alt="" className="head-img"/>
            <p>GOLD</p>
            </div></th>
            <th><div className="head">
            <img src={tick3} alt="" className="head-img"/>
            <p>PLATINUM</p>
            </div></th>
            </div>
          </tr>
          {subitems.map((val) => {
            return (
              <tr key={val} >
              <td className="imges-head"><div className="paragraph1"><p className="para1">{val.p}</p>
              
              </div></td>
                <td className="imj"><img src={val.pic}/>
                <img src={val.pic1} />
                <img src={val.pic2} />
                <img src={val.pic3} />
                </td>
                {/* <td><img src={val.pic2} /></td>
                <td><img src={val.pic3} /></td>
                <td><img src={val.pic} /></td> */}

                {/* <td><div className="head1"><img src={val.pic} /></div></td> */}
                <td><p>{val.p1}</p></td>
                <td><p>{val.p2}</p></td>
                <td><p>{val.p3}</p></td>
                <td><p>{val.p4}</p></td>
              </tr>
            )
          })}
        </table>
      </div>
      </StyledTable>
    );
  }
    
  export default App;
  const StyledTable = styled.div`
  .paragraph1{
    border-right: 2px solid red;
    width: 100%;
  }
  .wrap-head {
    display: flex;
    gap: 20%;
}
.head{
    border-bottom: 2px solid;
}
.para1{
    width: 100%;
}
.imj{
    display: flex;
    justify-content: space-between;
}
p{
    width: 92px;
height: 26px;
}
img {
    margin: auto;
    margin-top: 20px;
}
  `