import vector from '../Assets/Icons/diamondAk (1).svg'
import vector1 from '../Assets/Icons/VectorAk.svg';
import vector2 from '../Assets/Icons/VectorAk1.svg';
import vector3 from '../Assets/Icons/VectorAk2.svg';
import styled from "styled-components";   
import { subitems } from "../Services/Subscriptionsjson";
const GridType = () =>{
const buttonss = [ "1 Month - 1,500", "1 month - 2,200", "1 month - 3,000", "1 month - 5,000"]
const buttonss1 = [ "1 month - 2,200", "1 month - 3,000", "1 month - 5,000", "1 Month - 1,500"]
const buttonss2 = [ "1 month - 3,000", "1 month - 5,000", "1 Month - 1,500", "1 month - 2,200"]
const buttonss3 = [ "1 month - 5,000", "1 Month - 1,500", "1 month - 2,200", "1 month - 3,000"]

    return(
    <>


<Wrapper>
        <div className="HeaderFlex">
          <div className="firstdiv"></div>
          <Flex Direction="column">
            <div className="head1">
              <img src={vector} alt="Something WRong"  className="diamond1"/>
            </div>
            <div className="Size"><h4>Basic</h4></div>
            {/* <div className="Button"><h2 className="BUY-1">Buy</h2></div> */}
          </Flex>
          <Flex Direction="column">
            <div className="head1">
              <img src={vector1} alt="Something WRong"  className="diamond2"/>
            </div>
            <div className="Size"><h4>Standard</h4></div>
            {/* <div className="Button"><h2 className="BUY-1">Buy</h2></div> */}
          </Flex>
          <Flex Direction="column">
            <div className="head1">
              <img src={vector2} alt="Something WRong" className="diamond3" />
            </div>
            <div className="Size"><h4>GOLD</h4></div>
            {/* <div className="Button"><h2 className="BUY-1">Buy</h2></div> */}
          </Flex>
          <Flex Direction="column">
            <div className="head1">
              <img src={vector3} alt="Something WRong" className="diamond4"/>
            </div>
            <div className="Size"><h4>PLATINUM</h4></div>
            {/* <div className="Button"><h2 className="BUY-1">Buy</h2></div> */}
          </Flex>
        </div>
        {subitems.map((e)=>{
            return(
                <>
        <div className="flex"  >

          <div className='par153'>{e.p} </div>
          <div>
            <img src={e.pic} alt="" />
            <p className="para0">{e.p1}</p>
          </div>
          <div>
            <img src={e.pic1} alt="" />
            <p className="para01">{e.p2}</p>
          </div>
          <div>
            <img src={e.pic2} alt="" />
            <p className="para03">{e.p3}</p>
          </div>
          <div>
            <img src={e.pic3} alt="" />
            <p className="para04">{e.p4}</p>
          </div>
        </div>
                </>
            )
        })}
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

  .Size{
    border-bottom: 2px solid #E2E2E2;
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
margin-left: 20%;
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
    grid-template-columns: 15% 15% 15% 15%;
    gap: 19%;
    /* width: 65%; */
    margin-left: 22%;
    color: #7B7F91;
    margin-top: -30px;
 
}
.btn-1{
    border: none;
    font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px;
margin-top: 15px;
display: flex;
width: fit-content;
background-color: whitesmoke;
}
.par153{
    border-right: 2px solid #E2E2E2;
    width: 20%;
    font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 12px;
display: flex;
align-items: center;
color: #242424;
}
.btn {
    display: flex;
    gap: 9%;
}
.para0{
  margin-top: -8px;
}
.para01{
  margin-top: -8px;
}
.para02{
  margin-top: -8px;
}
.para03{
  margin-top: -8px;
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