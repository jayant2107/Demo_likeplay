import { Button, Modal } from "antd";
import { useState } from "react";
import GridType from "../Layouts/GridLayout";
import styled from "styled-components";

const ModalLayout = ({ open, handleClose }) => {
  return (
    <>
      <Modal
        centered
        open={open}
        onOk={handleClose}
        onCancel={handleClose}
        width={1100}
        footer={null}
        style={{ top: 40 }}
      >
        <GridType />
        <StyledLayout>
          {/* <div className='footersub'>
           <SubscriptionFooter/>
           </div> */}
        </StyledLayout>
      </Modal>
    </>
  );
};
export default ModalLayout;
const StyledLayout = styled.div`
  .footersub {
    width: 100%;
  }
`;
