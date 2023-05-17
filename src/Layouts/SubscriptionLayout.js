// import React from 'react'
// import styled from 'styled-components'
// import { subitems } from '../Services/Subscriptionsjson'
// import Headersubcription from './Headersubcription'

import { subitems } from "../Services/Subscriptionsjson";

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
const data = [
    { name: "Anom", age: 19, gender: "Male" },
    { name: "Megha", age: 19, gender: "Female" },
    { name: "Subham", age: 25, gender: "Male"},
  ]
    
  function App() {
    return (
      <div className="App">
        <table>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
          </tr>
          {subitems.map((val, key) => {
            return (
              <tr key={key}>
                <td><img src={val.pic} /></td>
                <td><img src={val.pic1}/></td>
                <td><img src={val.pic2} /></td>
                <td><p>{val.p1}</p></td>
                <td><p>{val.p2}</p></td>
                <td><p>{val.p3}</p></td>
                <td><p>{val.p4}</p></td>
              </tr>
            )
          })}
        </table>
      </div>
    );
  }
    
  export default App;