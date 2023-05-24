import React from "react";
import styled from "styled-components";

//Image
import editIcon from "../../Assets/Images/editIcon.png";

//FakeData
import { Images, AboutUser } from "./DataPage";
import EditPofileDetails from "./EditPofileDetails";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Countvalue } from "../../Redux/SliceOfRedux/EditProfile";

const FeedAboutMe = () => {
  const dispatch=useDispatch()
  const navigate = useNavigate()
  return (
    <FeedAboutMeCss>
      <div className="aboutMe">
        <div className="edit-div">
          <p>About me</p>
          <img src={editIcon} alt="editicon" onClick={() =>{dispatch(Countvalue(6)); navigate('/MyProfileEdit')}} />
        </div>
        <span>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled.
        </span>
      </div>

      <div className="imagesDiv">
        <div className="edit-div">
          <p>Images</p> <img src={editIcon} alt="editicon" onClick={() =>{dispatch(Countvalue(1)); navigate('/MyProfileEdit')}} />
        </div>
        <div className="pics">
          {Images.map((val, index) => {
            return (
              <div className="picsDiv">
                <img src={val} alt="img" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Aboutuser */}
      {AboutUser.FullName !== undefined && (
        <div className="detailsBox">
          <div className="boxDiv">
            <div>
              <p>Full Name</p>
              <span>{AboutUser.FullName}</span>
            </div>
            <div>
              <p>Age</p>
              <span>{AboutUser.Age}</span>
            </div>
          </div>
          <div className="boxDiv">
            <div>
              <p>Gender</p>
              <span>{AboutUser.Gender}</span>
            </div>
            <div>
              <p>Interested In</p>
              <span>{AboutUser.InterestedIn}</span>
            </div>
          </div>
          <img className="editImgIcon" src={editIcon} alt="editicon"  onClick={() =>{dispatch(Countvalue(2)); navigate('/MyProfileEdit')}}  />
        </div>
      )}
      {/* UserDetails */}
      <div className="detailsBox">
        <div className="boxDiv">
          <div>
            <p>Status</p>
            <span>single</span>
          </div>
          <div>
            <p>Body Type</p>
            <span>Average</span>
          </div>
        </div>
        <div className="boxDiv">
          <div>
            <p>Height</p>
            <span>Medium</span>
          </div>
          <div>
            <p>Education</p>
            <span>Ordinary National Diploma</span>
          </div>
        </div>
        <div className="boxDiv">
          <div>
            <p>Employment</p>
            <span>Infomation Technology</span>
          </div>
        </div>
        <img className="editImgIcon" src={editIcon} alt="editicon" onClick={() =>{dispatch(Countvalue(3)); navigate('/MyProfileEdit')}}  />
      </div>

      {/* residence */}
      <div className="detailsBox">
        <div className="boxDiv">
          <div>
            <p>Country of Residence</p>
            <span>Nigeria</span>
          </div>
          <div>
            <p>State</p>
            <span>Abuja</span>
          </div>
        </div>
        <div className="boxDiv">
          <div>
            <p>City</p>
            <span>Bamburu</span>
          </div>
          <div>
            <p>Nationality</p>
            <span>Nigerian</span>
          </div>
        </div>
        <div className="boxDiv">
          <div>
            <p>Religion</p>
            <span>Christian</span>
          </div>
          <div>
            <p>Tribe to date</p>
            <span>Hausa</span>
          </div>
        </div>
        <img className="editImgIcon" src={editIcon} alt="editicon"  onClick={() =>{dispatch(Countvalue(4)); navigate('/MyProfileEdit')}} />
      </div>

      {/* age */}
      <div className="detailsBox">
        <div className="boxDiv">
          <div>
            <p>Age Range preferred to date</p>
            <span>24-30</span>
          </div>
          <div>
            <p>Tribe to date</p>
            <span>Hausa</span>
          </div>
        </div>
        <div className="boxDiv">
          <div>
            <p>Looking for</p>
            <span>Something serious & Permanent</span>
          </div>
          <div>
            <p>Education</p>
            <span>Ordinary National Diploma</span>
          </div>
        </div>
        <div className="boxDiv">
          <div>
            <p>Employment</p>
            <span>Infomation Technology</span>
          </div>
        </div>
        <img className="editImgIcon" src={editIcon} alt="editicon" onClick={() =>{dispatch(Countvalue(5)); navigate('/MyProfileEdit')}}  />
      </div>
    </FeedAboutMeCss>
  );
};

export default FeedAboutMe;

const FeedAboutMeCss = styled.div`
  font-family: "Poppins", sans-serif;
  p {
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 0.3rem;
  }
  span {
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    color: #7b7f91;
  }

  .aboutMe {
    height: auto;
  }

  .edit-div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .imagesDiv {
    margin: 1rem 0;
  }
  .pics {
    display: grid;
    grid-template-columns: 18.5% 18.5% 18.5% 18.5% 18.5%;
    justify-content: space-between;
    width: 100%;
    height: 10rem;
  }
  .picsDiv {
    width: 100%;
    height: 10rem;
    img {
      border-radius: 0.5rem;
      width: 100%;
      height: 100%;
    }
  }

  .detailsBox {
    background: #f8f8f8;
    border-radius: 0.5rem;
    margin: 0.5rem 0;
    position: relative;
    padding: 0.4rem 0.8rem;
  }

  .boxDiv {
    padding: 0.5rem 0;
    display: grid;
    grid-template-columns: 50% 50%;
  }

  .editImgIcon {
    position: absolute;
    top: 0.8rem;
    right: 0.8rem;
  }
`;
