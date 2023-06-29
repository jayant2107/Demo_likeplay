import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {Modal} from "antd";
import MatchesCard from "../../Components/MatchesCard";
// import data from "../../Feautres/Matches/Matches_JSON";
// import search from "../../Assets/Images/Matches Image/search.png";
import DatingDetailModal from "../../Modals/DatingDetailModal";
import {getMatchedUsers} from "Services/collection";
import Loader from "Components/Loader";
import {AiOutlineClose} from "react-icons/ai";
import {object} from "yup";

const Matches = () => {
    const [detailModal, setDetailModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [Data, setdata] = useState([]);
  const [itemArray,setitemArray]=useState([])
    
    const [Searchbar, setSearchbar] = useState(false);
    const [Searchtext, setsearchtext] = useState()

    const closeDetailModal = () => {
        setDetailModal(false);
    };

    const searchdata = (e) => {
        setsearchtext(e.target.value) 
       
        const FilterData = itemArray?.filter((val) =>val?.partner_data?.name.toLowerCase().includes(e?.target.value.toLowerCase()))
    

        if(e.target.value.length>0){
          setdata(FilterData)}
        else{
          matcheduser()
        } 
    }


    let matcheduser = async () => {
        setLoading(true);

        let attributeStatus = 3;
        let req = await getMatchedUsers(attributeStatus);
        if (req?.status === 200) {
            if (req?.data == null) {
                setLoading(false);
             
            } else {
                setdata(req?.data?.user_data);
                setitemArray(req?.data?.user_data)
                
                setLoading(false);
            }
        } else {
            setLoading(false);
          
        }
    };
    useEffect(() => {
        matcheduser();
    }, []);


    return (
        <MatchesStyle>
            <div className="Header">
                <div className="HDiv">
                    {
                    Searchbar ? (
                        <div className="search">
                            <input className="search-input" placeholder="Search..."
                                onChange={searchdata}></input>
                            <AiOutlineClose style={
                                    {fontSize: '20px'}
                                }
                                onClick={
                                    () => setSearchbar(false)
                                }/>
                        </div>
                    ) : (
                        <div className="Match">
                            <p className="Matches">Matches</p>
                            {/* <img src={search}
                                onClick={
                                    () => setSearchbar(true)
                                }
                                alt=""
                                className="SLogo"/> */}
                        </div>
                    )
                } </div>
            </div>
            {
            loading ? (
                <Loader/>) : (
                <div className="Main">
                    <div className="Tips">
                        <p onClick={
                            () => {
                                setDetailModal(true);
                            }
                        }>
                            Online dating Tips?
                        </p>
                        {
                        detailModal && (
                            <Modal open={detailModal}
                                onCancel={closeDetailModal}
                                close={closeDetailModal}
                                maskClosable={true}
                                footer={null}
                                width="80%"
                                style={
                                    {top: 20}
                                }
                                prefixCls="matcheduser-modal">
                                <DatingDetailModal/>
                            </Modal>
                        )
                    } </div>
                    {
                    Data?.length===0 ? (
                        <Nodata className="No Data">
                            <p>No Data Found
                            </p>
                        </Nodata>
                    ) : (
                        <div className="Cards">
                            {
                            Data?.map((value) => (
                                <MatchesCard key={
                                        value.id
                                    }
                                    props={value}/>
                            ))
                        } </div>
                    )
                } </div>
            )
        } </MatchesStyle>
    );
};

export default Matches;

const MatchesStyle = styled.div `
  width: 100%;
  height: 100%;
  .Main {
    width: 100%;
    margin: 20px auto;
  }
  .Header {
    /* width: 100%;
    height: 88px;
    background: rgb(240, 240, 240);
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: end;
    align-items: end;
    padding: 20px; */
  }

  .Cards {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    padding: 20px 8px;

    @media (max-width: 950px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 750px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 500px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  .Tips {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    display: flex;
    align-items: center;
    justify-content: end;
    text-decoration-line: underline;
    text-transform: capitalize;
    color: #ff384d;
    padding: 0 20px;
    cursor:pointer;
  }
  .HDiv {
    width: 100%;
    height: 88px;
    background: rgb(240, 240, 240);
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: end;
    align-items: end;
    padding: 20px;
  }
  .Match{
    display:flex;
    align-items:end;
    justify-content: space-between;
    width:100%;

  }
  .search{
    display:flex;
    align-items:end;
    justify-content: space-between;
    width:100%;
  }
  .search-input{
    width:60%;
    border-radius:10px;
    border:none;
    padding:10px;
    outline:none;
    &:focus{
      outline:none;
    }
  }

  .Matches {
    letter-spacing: 0.05em;
    color: #a8580f;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }
  .SLogo {
    height: 17.49px;
    width: 17.49px;
  }
`;
const Nodata = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 140px);
  p {
    color: #242424;
    letter-spacing: 0.05em;
    font-size: 18px;
  }
`;
