import styled from "styled-components";



 const CommentModal=({show, close ,props})=> {
  return (
    <>
     <div show={show} onHide={close}>
      <CommentModalStyle>
        <div className="modal">
          <div className="modal-container">
            <div className="modal-content">
              <div className="content-container">
               <div className="MainDiv">
                    <div className="Left">
                    <img src={props.Image} alt='' className="img"/>
                    </div>
                    <div className="Right">
                        <p>{props.Name}</p>
                        <p className="Common"> {props.Age} <span className='dot'></span> {props.City} <span className='dot'/> {props.Country}</p>

                        <p className="Comment">Comments <span className="Common"> ( Optional )</span></p>
                        <textarea type="text" className="InputBox"/>
                    </div>
               </div>
               <div className="ButtonDiv">   
               <button  className="Button">Admire</button>                   
                </div>
              </div>
            </div>
          </div>
        </div>
      </CommentModalStyle>
      </div>
    </>
  );
}

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
  .MainDiv{
    display: flex;
    justify-items: left;
    gap: 1rem;

  }
  .Left{
    width: 250px;
   height: 250px;
   background: #D9D9D9;
   border-radius: 9px;

  }
  .Right{


  }
  .Button {
 width: 168px;
height: 56px;
background: linear-gradient(268.55deg, #FF483C 0%, #FF2C5A 100%);
border-radius: 10px;
color: #FFFFFF;


  }
  .InputBox{
    width: 284px;
height: 130px;
background: #FFFFFF;
border: 1px solid #E2E2E2;
border-radius: 10px;
margin: 0%;
padding: 0%;
  }
  .ButtonDiv{
    text-align: center;
    margin-top:2rem ;
  
  }

.img{
    width: 100%;
    height: 100%;

}
.Common{
    font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 18px;
color: #7B7F91;
margin-top: 5px;
}
.dot {
  height: 4px;
  width: 4px;
  background-color: #242424;
  border-radius: 50%;
  display: inline-block;
  align-items: center;
  margin:3px;
}
.Comment{
    margin-top: 2rem;
}


 
`;
