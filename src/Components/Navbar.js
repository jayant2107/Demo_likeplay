import { opensidebar } from "Redux/SliceOfRedux/Sidebar";
import { sidebarimage } from "Utils/Images";
import { Menu, Messanger } from "Utils/Logo";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const [openbar, setopenbar] = useState(true);

  const profileimg = useSelector(
    (e) => e?.LoginSlice?.data?.user_images_while_signup[0]?.image_url
  );

  const onclickhandle = () => {
    setopenbar(!openbar);
    dispatch(opensidebar(openbar));
  };
  console.log(openbar, "openbar");
  return (
    <Main>
      <div className="menu-btn">
        <a onClick={onclickhandle}>
          <Menu color={"#242424"} />
        </a>
      </div>
      <div>
        <img src={sidebarimage} alt="" style={{ width: "40px" }} />
      </div>
      <div className="messanger-section">
        <Messanger />
        <img src={process.env.REACT_APP_BASEURL_IMAGE + profileimg} alt="" onClick={()=>navigate("/Layout/MyProfile")}/>
      </div>
    </Main>
  );
}
const Main = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 10px;
  align-items: center;

  .menu-btn {
    display: flex;
    align-items: center;
    justify-content: end;
    width: ${({ openbar }) => (openbar ? "150px" : "30px")};
  }
  .messanger-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
  }
`;
