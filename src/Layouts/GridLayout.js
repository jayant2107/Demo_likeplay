import vector from '../Assets/Icons/diamondAk (1).svg'
import vector1 from '../Assets/Icons/VectorAk.svg';
import vector2 from '../Assets/Icons/VectorAk1.svg';
import vector3 from '../Assets/Icons/VectorAk2.svg';
import styled from "styled-components";   
import { subitems } from "../Services/Subscriptionsjson";
const GridType = () =>{
const buttonss = [ "1 month - 1,500", "1 month - 2,200", "1 month - 3,000", "1 month - 5,000"]
const buttonss1 = [ "1 month - 2,200", "1 month - 3,000", "1 month - 5,000", "1 month - 1,500"]
const buttonss2 = [ "1 month - 3,000", "1 month - 5,000", "1 month - 1,500", "1 month - 2,200"]
const buttonss3 = [ "1 month - 5,000", "1 month - 1,500", "1 month - 2,200", "1 month - 3,000"]

    return(
    <>


<Wrapper>
<p className='Select-subscription'>Select Subscription</p>
            <div className='hr1'></div>
        <div className="HeaderFlex">
          <div className="firstdiv"></div>
          <Flex Direction="column" align="center">
            <div className="head1">
              <img src={vector} alt="Something WRong"  className="diamond1"/>
            </div>
            <div className="Size"><h4>Basic</h4></div>
            <div className='hr2'><hr/></div>
            {/* <div className="Button"><h2 className="BUY-1">Buy</h2></div> */}
          </Flex>
          <Flex Direction="column">
            <div className="head1">
              <img src={vector1} alt="Something WRong"  className="diamond2"/>
            </div>
            <div className="Size"><h4>Standard</h4></div>
            <div className='hr3'><hr/></div>
            {/* <div className="Button"><h2 className="BUY-1">Buy</h2></div> */}
          </Flex>
          <Flex Direction="column">
            <div className="head1">
              <img src={vector2} alt="Something WRong" className="diamond3" />
            </div>
            <div className="Size"><h4>GOLD</h4></div>
            <div className='hr4'><hr/></div>
            {/* <div className="Button"><h2 className="BUY-1">Buy</h2></div> */}
          </Flex>
          <Flex Direction="column">
            <div className="head1">
              <img src={vector3} alt="Something WRong" className="diamond4"/>
            </div>
            <div className="Size"><h4>PLATINUM</h4></div>
            <div className='hr5'><hr/></div>
            {/* <div className="Button"><h2 className="BUY-1">Buy</h2></div> */}
          </Flex>
        </div>
        <div className='wrae'>
        {subitems.map((e)=>{
            return(
                <>
        <div className="flex"  >
          <div className='par153'>
          <div className='para159'>{e.p}</div> </div>
          <div className='checkimg'>
            <img src={e.pic} alt="" />
            <p className="para0">{e.p1}</p>
          </div>
          <div className='checkimg'>
            <img src={e.pic1} alt="" />
            <p className="para01">{e.p2}</p>
          </div>
          <div className='checkimg'>
            <img src={e.pic2} alt="" />
            <p className="para03">{e.p3}</p>
          </div>
          <div className='checkimg'>
            <img src={e.pic3} alt="" />
            <p className="para04">{e.p4}</p>
          </div>
        </div>
                </>
            )
        })}
        </div>
        <div className="btn">
        <div className="Options_but">
            <select className='btn-1'>
               {
                buttonss.map((e)=>{
                    return(
                        <>
                        <option>{e}</option>
                        </>
                    )
                })
               }
            </select>
            <select className='btn-1'>
               {
                buttonss1.map((e)=>{
                    return(
                        <>
                        <option>{e}</option>
                        </>
                    )
                })
               }
            </select>
            <select className='btn-1'>
               {
                buttonss2.map((e)=>{
                    return(
                        <>
                        <option>{e}</option>
                        </>
                    )
                })
               }
            </select>
            <select className='btn-1'>
               {
                buttonss3.map((e)=>{
                    return(
                        <>
                        <option>{e}</option>
                        </>
                    )
                })
               }
            </select>
            </div>
               </div>
        <div className="Button1">
        <div className="Button"><h2 className="BUY-1">Buy</h2></div>
        <div className="Button"><h2 className="BUY-1">Buy</h2></div>
        <div className="Button"><h2 className="BUY-1">Buy</h2></div>
        <div className="Button"><h2 className="BUY-1">Buy</h2></div>
        </div>
     
      
      </Wrapper>
    
      </>
      );
}

export default GridType;
const Wrapper = styled.div`
  width: 100%;
  padding: 1%;

  .hr1 {
    z-index: 100;
    position: absolute;
    top: 0px;
    height: 102vh;
    border: 1px solid #E2E2E2;
    left: 21%;
    width: 1.5px;
  }
  .hr2 {
    width: 75%;
}
.hr3{
  width: 85%;
}
.hr4{
  width: 88%;
}
.hr5{
  width: 88%;
}
.wrae{
  margin-top: 20px;
}
.Select-subscription {
    z-index: 100;
    position: absolute;
    top: 38rem;
}
.checkimg{
  display: flex;
  justify-content: center;
  align-items: center
}
  .flex {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    background: #F7F7F7;
border-radius: 4px;
line-height  :30px ;
}


  .flex > div {
    width: 25%;
  }
  /* .firstdiv {
    border-right: 1px solid;
  } */
  .flex > div:not(:first-child) {
    /* display: flex;
    align-items: center;
    justify-content: center; */
    text-align: center;
  }

  .Size{
    /* border-bottom: 2px solid #E2E2E2; */
  }
  .Button{
    width: 10%;
    background: linear-gradient(268.55deg, #FF483C 0%, #FF2C5A 100%);
border-radius: 10px;
width: 160px;
margin: auto;
height: 48px;
  }
  .Button1{
    display: flex;
    gap: 40px;
    justify-content: center;
    flex-direction: row;
align-items: center;
padding: 20px 1rem;
margin-left: 21%;
  }
  .BUY-1 {
    color: white;
    text-align: center;
    margin-top: 8px;
}

  .HeaderFlex {
    display: flex;
    align-items: center;
  } 
  .HeaderFlex > div {
    width: 20%;
    align-items: center;
  }
  .Options_but {
    display: grid;
    grid-template-columns: 36% 34% 34% 30%;
    gap: 4%;
    margin-left: 23%;
    color: #7B7F91;
 
}
.btn-1{
  font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    margin-top: 15px;
    display: flex;
    /* width: 100%; */
    background: #FFFFFF;
    border: 1px solid #E2E2E2;
    border-radius: 10px;
    width: 100px;
    height: 44px;
}
.par153{
    width: 20%;
    font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 12px;
align-items: center;
line-height: 18px;
color: #242424;
}
.btn {
    display: flex;
    gap: 9%;
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