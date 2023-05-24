
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import exit from "../Assets/Images/Matches Image/exit.png";


const CommentModal = ({ show, close, props }) => {
  const navigate = useNavigate();
  return (
    <>
    
      <div show={show} onHide={close}>
        <CommentModalStyle>
          {/* <div className="modal"> */}
            {/* <div className="modal-container"> */}
              {/* <div className="modal-content"> */}
                <div className="ExitButton">
                  {" "}
                  <img
                    src={exit}
                    alt=""
                    className="Exit"
                    onClick={close}
                  />{" "}
                </div>
                <div className="content-container">
                  <div className="MainDiv">
                    <div className="Left">
                      <img
                        src={props.Image}
                        alt=""
                        className="img112"
                        onClick={() =>
                          navigate("/Layout/MatchesDetail", {
                            state: { about: props.about },
                          })
                        }
                      />
                    </div>
                    <div className="Right">
                      <p className="Name">
                        <span
                          onClick={() =>
                            navigate("/Layout/MatchesDetail", {
                              state: { about: props.about },
                            })
                          }
                        >
                          {props.Name}
                        </span>
                      </p>
                      <p className="Common">
                        {" "}
                        {props.Age} <span className="dot"></span> {props.City}{" "}
                        <span className="dot" /> {props.Country}
                      </p>

                      <p className="Comment">
                        Comments <span className="Common1"> ( Optional )</span>
                      </p>
                      <textarea type="text" className="InputBox" />
                    </div>
                  </div>
                  <div className="ButtonDiv">
                   <button className="Button" onClick={()=>navigate("/Layout/Messages",{state:true})}>Admire</button>
                  </div>
                {/* </div> */}
              {/* </div> */}
            {/* </div> */}
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
  .ExitButton {
    text-align: end;
  }
  .Exit {
    position: absolute;
    top: -1.8rem;
    right: -1rem;
    width: 24px;
    height: 24px;
  }
  .Name {
    margin-top: 5px;
    &:hover {
      cursor: pointer;
    }
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
    margin: 17px 0 0 15px;
  }
  .MainDiv {
    display: flex;
    justify-items: left;
    gap: 20px;
  }
  .Left {
    width: 250px;
    height: 250px;
    background: #d9d9d9;
    border-radius: 9px;
  }
  .Right {
    margin-top: 7px;
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
    height: 157px;
    background: #ffffff;
    border: 1px solid #e2e2e2;
    border-radius: 10px;
    margin-top: 4px;
    padding: 10px;
    outline: none;
    font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 150%;
color: #242424;
  }
textarea {
  resize: none;
}
  .ButtonDiv {
    text-align: center;
    margin-top: 22px;


  }
  button {
      border-style: none;
      &:hover{
        cursor: pointer;
      }
    }

  .img112 {
    width: 100%;
    height: 100%;
    background: white;
    border: none;
    
    &:hover {
      cursor: pointer;
    }
  }
  .Common {
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #7b7f91;
    margin-top: -2px;
  }
  .Common1 {
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #7b7f91;
    margin-top: -2px;
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
    margin-top: 16px;
  }
 
`;


