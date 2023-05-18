import Check from "../Assets/Images/Akshay/Fill 4.svg";
import styled from "styled-components";   
const GridType = () =>{
    return(
    <>


<Wrapper>
        <div className="HeaderFlex">
          <div className="firstdiv"></div>
          <Flex Direction="column">
            <div>
              <img src={Check} alt="Something WRong" />
            </div>
            <div className="Size">Size</div>
          </Flex>
          <Flex Direction="column">
            <div>
              <img src={Check} alt="Something WRong" />
            </div>
            <div className="Size">Size</div>
          </Flex>
          <Flex Direction="column">
            <div>
              <img src={Check} alt="Something WRong" />
            </div>
            <div className="Size">Size</div>
          </Flex>
          <Flex Direction="column">
            <div>
              <img src={Check} alt="Something WRong" />
            </div>
            <div className="Size">Size</div>
          </Flex>
        </div>
        <div className="flex">
          <div>Complimentary: 5 Free Days upon Sign-Up</div>
          <div>
            <img src={Check} alt="" />
          </div>
          <div>
            <img src={Check} alt="" />
          </div>
          <div>
            <img src={Check} alt="" />
          </div>
          <div>
            <img src={Check} alt="" />
          </div>
        </div>
      </Wrapper>
    
      </>
      );
}

export default GridType;
const Wrapper = styled.div`
  width: 100%;
  padding: 1%;

  .flex {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .flex > div {
    width: 25%;
  }
  .firstdiv {
    border-right: 1px solid;
  }
  .flex > div:not(:first-child) {
    /* display: flex;
    align-items: center;
    justify-content: center; */
    text-align: center;
  }
  .HeaderFlex {
    display: flex;
    align-items: center;
  }
  .HeaderFlex > div {
    width: 25%;
    align-items: center;
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: ${({ align }) => align | "none"};
  justify-content: ${({ content }) => content || "none"};
  flex-direction: ${({ Direction }) => Direction || "none"};
  .Size {
    font-size: 18px;
  }
`;