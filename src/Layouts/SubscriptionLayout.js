import { subitems } from "../Services/Subscriptionsjson";
import styled from "styled-components";
import tick from '../Assets/Icons/Vector.svg'
import tick1 from '../Assets/Icons/Vector (1).svg'
import tick2 from '../Assets/Icons/Vector (2).svg'
import tick3 from '../Assets/Icons/Vector (3).svg'




    
  function Subscriptions() {
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
              
                <td className="imj">
                <p className="para4">{val.p1}</p>
                <img src={val.pic}/> 
                <p className="para4">{val.p3}</p>
                <img src={val.pic1} />
                {/* <p className="para4">{val.p4}</p> */}
                <img src={val.pic2} />
                <p className="para4">{val.p2}</p>
                <img src={val.pic3} />
                <p className="para4">{val.p4}</p>
                </td>
                {/* <td><img src={val.pic2} /></td>
                <td><img src={val.pic3} /></td>
                <td><img src={val.pic} /></td> */}

                {/* <td><div className="head1"><img src={val.pic} /></div></td> */}
                {/* <td className="para-2"><p>{val.p1}</p></td>
                <td ><p>{val.p2}</p></td>
                <td><p>{val.p3}</p></td>
                <td><p>{val.p4}</p></td> */}
              </tr>
            )
          })}
        </table>
      </div>
      </StyledTable>
    );
  }
    
  export default Subscriptions;
  const StyledTable = styled.div`
  .App{
    padding: 0 1rem;
  }
  .paragraph1{
    border-right: 2px solid red;
    width: 100%;
  }
  .wrap-head {
    display: grid;
    margin-left: 5%;
    grid-template-columns: 25% 25% 25% 32%;
}
.head{
    border-bottom: 2px solid #E2E2E2;
    width: 70%;
}
.para1{
    width: 100%;
}
.imj{
    display: flex;
    line-height: 20px;
    grid-template-columns: 25% 25% 25% 25% ;
    justify-content: space-between;
    margin: auto;
}
.imges-head{
    width: 15%;
    line-height: 25px;
}
img {
    /* margin: auto; */
    /* width: -webkit-fill-available; */
    width: 4%;
}
/* .para4{
    margin: auto;
    width: 20%;
} */

  `