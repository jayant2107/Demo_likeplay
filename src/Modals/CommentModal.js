import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import exit from "../Assets/Images/Matches Image/exit.png"

const CommentModal = ({ show, close, props }) => {
  const navigate = useNavigate();
  return (
    <>
      <div show={show} onHide={close}>
        <CommentModalStyle>
    
          <div className="modal">
            <div className="modal-container">
           
              <div className="modal-content">
              <div className="ExitButton">  <img src={exit} alt="" className="Exit" onClick={close}/> </div>
                <div className="content-container">
                  <div className="MainDiv">
                    <div className="Left">
                      <img src={props.Image} alt="" className="img" />
                    </div>
                    <div className="Right">
                      <p onClick={()=>navigate('/Layout/MatchesDetail')} >{props.Name}</p>
                      <p className="Common">
                        {" "}
                        {props.Age} <span className="dot"></span> {props.City}{" "}
                        <span className="dot" /> {props.Country}
                      </p>

                      <p className="Comment">
                        Comments <span className="Common"> ( Optional )</span>
                      </p>
                      <textarea type="text" className="InputBox" />
                    </div>
                  </div>
                  <div className="ButtonDiv">
                    <button className="Button">Admire</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CommentModalStyle>
      </div>
    </>
  );
};

export default CommentModal;

export const CommentModalStyle = styled.div`
  .modal-container {
    width: 100%;
    height: 100vh;
    background-color: rgb(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 2;
  }
  .ExitButton{
text-align: end;
  }
  .Exit{
    position: relative;
    top: -1.8rem;
    right: -1rem;
    width: 24px;
    height: 24px;
    
  }

  .modal-content {
    width: 585px;
    height: 381px;
    border: 1px solid transparent;
    border-radius: 12px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 20px 0px;
    margin: auto;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .content-container {
    padding: 12px;
  }
  .MainDiv {
    display: flex;
    justify-items: left;
    gap: 1rem;
  }
  .Left {
    width: 250px;
    height: 250px;
    background: #d9d9d9;
    border-radius: 9px;
  }
  .Right {
  }
  .Button {
    width: 168px;
    height: 56px;
    background: linear-gradient(268.55deg, #ff483c 0%, #ff2c5a 100%);
    border-radius: 10px;
    color: #ffffff;
  }
  .InputBox {
    width: 284px;
    height: 130px;
    background: #ffffff;
    border: 1px solid #e2e2e2;
    border-radius: 10px;
    margin: 0%;
    padding: 0%;
  }
  .ButtonDiv {
    text-align: center;
    margin-top: 2rem;
  }

  .img {
    width: 100%;
    height: 100%;
  }
  .Common {
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #7b7f91;
    margin-top: 5px;
  }
  .dot {
    height: 4px;
    width: 4px;
    background-color: #242424;
    border-radius: 50%;
    display: inline-block;
    align-items: center;
    margin: 3px;
  }
  .Comment {
    margin-top: 2rem;
  }
`;
