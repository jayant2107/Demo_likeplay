// import React, { useState } from 'react'
// import styled from 'styled-components'
// import GridType from '../Layouts/GridLayout'
// import exit from '../Assets/Icons/exitAk.svg'
// import { SubscriptionFooter } from '../Feautres/Subscription/SubscriptionFooter'
// const ModalLayout = () => {
//   const [modal, setModal] = useState(false);
//   return (
//     <>

//     <StyledLayout>
   
//     <div className="outer">
   
//         <div className="inner">
//         <div className='delete-icon' >
//         <img src={exit} alt="" onClick={()=>setModal()}/>
//         </div>
//         <div className='inner-subscription'>
//         <GridType/>
//         </div>
//         </div>
//         <div className='footersub'>
//           <SubscriptionFooter/>
//           </div>

//       </div>
       
//       </StyledLayout>
//     </>
//   )
// }

// export default ModalLayout
// const StyledLayout = styled.div`
// .outer{
//   width: 100%;
//   background-color: rgb(0,0,0,0.5);
//   position: absolute;
//   top: 0;
//   left: 0;
//   bottom: 0;
//   right: 0;
//   height: 140%;
//   z-index: 2;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   /* height: 100vh; */
//   padding: 2%;
// }

// .inner{
//   width: 85%;
//   /* height: 100vh; */
//   background-color: white;
//   box-shadow: rgba(0,0,0,0.5) 0px 1px 20px 0px;
//   margin: auto;
//   position: absolute;
//   top:52%;
//   border-radius: 10px;
//   border: 1px solid #E2E2E2;
//   left: 53%;
//   transform: translate(-50% , -50%);
// }
// .delete-icon{
//   width: 25px;
//   height: 25px;
//   border-radius: 50%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 12px;
//   font-weight: 600;
//   cursor: pointer;
//   position: absolute;
//   top: -30px;
//   right: -14px;
// }
// .footersub{
//   width: 100%;
// }
// `

import { Button, Modal } from 'antd';
import { useState } from 'react';
import GridType from '../Layouts/GridLayout';
import styled from 'styled-components'
import { SubscriptionFooter } from '../Feautres/Subscription/SubscriptionFooter';
const App = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Button
      </Button>
      <Modal
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1100}
        footer={null}
        style={{top: 40}}
        
      >
        <GridType/>
<StyledLayout>
        {/* <div className='footersub'>
           <SubscriptionFooter/>
           </div> */}
           </StyledLayout>

      </Modal>
    </>
  );
};
export default App;
const StyledLayout = styled.div`
 .footersub{
   width: 100%;
 }
 `