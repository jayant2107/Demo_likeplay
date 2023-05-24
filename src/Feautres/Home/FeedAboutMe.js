import React from "react";
import styled from "styled-components";

//Image
import editIcon from "../../Assets/Images/editIcon.png";

//FakeData
import { Images, AboutUser } from "./DataPage";
<<<<<<< HEAD
import EditPofileDetails from "./EditPofileDetails";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Countvalue } from "../../Redux/SliceOfRedux/EditProfile";

const FeedAboutMe = () => {
  const dispatch=useDispatch()
  const navigate = useNavigate()
=======
import { useSelector } from "react-redux";

const FeedAboutMe = () => {
  const profile_data = useSelector((e) => e.LoginSlice.data);

>>>>>>> 8b3049f3f037155b1c30b21d83dbdc16e17b4f75
  return (
    <FeedAboutMeCss>
      <div className="aboutMe">
        <div className="edit-div">
          <p>About me</p>
          <img src={editIcon} alt="editicon" onClick={() =>{dispatch(Countvalue(6)); navigate('/MyProfileEdit')}} />
        </div>
        <span>{profile_data?.about_me}</span>
      </div>

      <div className="imagesDiv">
        <div className="edit-div">
          <p>Images</p> <img src={editIcon} alt="editicon" onClick={() =>{dispatch(Countvalue(1)); navigate('/MyProfileEdit')}} />
        </div>
        <div className="pics">
          {profile_data?.user_images_while_signup.map((val, index) => {
            return (
              <div className="picsDiv">
                <img src={process.env.REACT_APP_BASEURL_IMAGE+val?.image_url} alt="img" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Aboutuser */}
<<<<<<< HEAD
      {AboutUser.FullName !== undefined && (
=======
      {/* {AboutUser.FullName !== undefined && ( */}
>>>>>>> 8b3049f3f037155b1c30b21d83dbdc16e17b4f75
        <div className="detailsBox">
          <div className="boxDiv">
            <div>
              <p>Full Name</p>
<<<<<<< HEAD
              <span>{AboutUser.FullName}</span>
            </div>
            <div>
              <p>Age</p>
              <span>{AboutUser.Age}</span>
=======
              <span>{profile_data.user_name}</span>
            </div>
            <div>
              <p>Age</p>
              <span>{profile_data.age}</span>
>>>>>>> 8b3049f3f037155b1c30b21d83dbdc16e17b4f75
            </div>
          </div>
          <div className="boxDiv">
            <div>
              <p>Gender</p>
<<<<<<< HEAD
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
=======
              <span>{profile_data.gender==="0"?"Male":"Female"}</span>
            </div>
            <div>
              <p>Interested In</p>
              <span>{profile_data.interested_in==="1"?"Female":"Male"}</span>
            </div>
          </div>
          <img className="editImgIcon" src={editIcon} alt="editicon" />
        </div>
      {/* )} */}
>>>>>>> 8b3049f3f037155b1c30b21d83dbdc16e17b4f75
      {/* UserDetails */}
      <div className="detailsBox">
        <div className="boxDiv">
          <div>
            <p>Status</p>
            <span>{profile_data?.status}</span>
          </div>
          <div>
            <p>Body Type</p>
            <span>{profile_data?.body_type}</span>
          </div>
        </div>
        <div className="boxDiv">
          <div>
            <p>Height</p>
            <span>{profile_data?.height}</span>
          </div>
          <div>
            <p>Education</p>
            <span>{profile_data?.education}</span>
          </div>
        </div>
        <div className="boxDiv">
          <div>
            <p>Employment</p>
            <span>{profile_data?.employment}</span>
          </div>
        </div>
        <img className="editImgIcon" src={editIcon} alt="editicon" onClick={() =>{dispatch(Countvalue(3)); navigate('/MyProfileEdit')}}  />
      </div>

      {/* residence */}
      <div className="detailsBox">
        <div className="boxDiv">
          <div>
            <p>Country of Residence</p>
            <span>{profile_data?.residence_country}</span>
          </div>
          <div>
            <p>State</p>
            <span>{profile_data?.state}</span>
          </div>
        </div>
        <div className="boxDiv">
          <div>
            <p>City</p>
            <span>{profile_data?.city}</span>
          </div>
          <div>
            <p>Nationality</p>
            <span>{profile_data?.nationality}</span>
          </div>
        </div>
        <div className="boxDiv">
          <div>
            <p>Religion</p>
            <span>{profile_data?.religion}</span>
          </div>
          <div>
            <p>Tribe to date</p>
            <span>{profile_data?.tribe_to_date}</span>
          </div>
        </div>
        <img className="editImgIcon" src={editIcon} alt="editicon"  onClick={() =>{dispatch(Countvalue(4)); navigate('/MyProfileEdit')}} />
      </div>

      {/* age */}
      <div className="detailsBox">
        <div className="boxDiv">
          <div>
            <p>Age Range preferred to date</p>
            <span>{profile_data?.age_range_for_date}</span>
          </div>
          <div>
            <p>Tribe to date</p>
            <span>{profile_data?.tribe_to_date}</span>
          </div>
        </div>
        <div className="boxDiv">
          <div>
            <p>Looking for</p>
            <span>{profile_data?.looking_for}</span>
          </div>
          <div>
            <p>Education</p>
            <span>{profile_data?.education}</span>
          </div>
        </div>
        <div className="boxDiv">
          <div>
            <p>Employment</p>
            <span>{profile_data?.employment}</span>
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
