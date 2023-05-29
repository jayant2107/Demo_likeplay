import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { searchIcon } from "../../Utils/Images";
import data from "../Matches/Matches_JSON";
import MatchesCard from "../../Components/MatchesCard";
import AdmirerCards from "./AdmirerCards";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { admirersUsers } from "Services/collection";
import Loader from "Components/Loader";
import { Nodata } from "Components/Nodata";

export default function Admirers() {
  const [loading, setLoading] = useState(false);
  const [Data, setData] = useState();
  const [datafound, setdatafound] = useState(false);
  const [Searchbar, setSearchbar] = useState(false);

  const getadmireslisting = async () => {
    setLoading(true);
    const req = await admirersUsers();
    if (req?.status === 200) {
      if(req?.data.length==0){
        setdatafound(true)
        setLoading(false)
      }
      else{

        setData(req?.data);
        setLoading(false);
      }
    } else {
      setLoading(false);
      setdatafound(true)
    }
  };
  const searchdata =(e)=>{
    const filterData=Data?.filter((val)=>val?.AdmireBy?.name.toLowerCase().includes(e?.target.value.toLowerCase()))
    if(e.target.value.length>0){
      setData(filterData)
    }
    else{
      getadmireslisting()
    }


  }
  console.log(Data)
  useEffect(() => {
    getadmireslisting();
  }, []);
  return (
    <div>
      <AdmirerHeader>
        {Searchbar?(<div className="header">
          <div>
            <p>
              Admires <span>(They Want Me, I Dey Enter Their Eye)</span>
            </p>
          </div>
          <div>
            <AiOutlineSearch  
              style={{
                width: "18px",
                height: "18px",
              }}
              onClick={()=>setSearchbar(false)}
            />
          </div>
        </div>):(    <div className="search">
                            <input className="search-input" placeholder="Search..."
                                onChange={searchdata}></input>
                            <AiOutlineClose style={
                                    {fontSize: '20px'}
                                }
                                onClick={
                                    () => setSearchbar(true)
                                }/>
                        </div>)}
        
        
    

      

      </AdmirerHeader>
      {loading ? (
        <Loader />
      ) : (<>
      {datafound?(<Nodata><p>No Data Found</p></Nodata>):(    <CardWrapper>
          {Data?.map((value) => (
            <AdmirerCards key={value.id} props={value} />
          ))}
        </CardWrapper>)}
      
  

      </>
       
      )}
    </div>
  );
}

const CardWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
  padding: 20px 8px;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const AdmirerHeader = styled.div`
  height: 88px;
  background: #f0f0f0;
  display: flex;
  align-items: end;
  .header {
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      font-size: 16px;
      font-family: "Poppins";
      font-weight: 500;
      color: #a8580f;
      letter-spacing: 0.05em;
      line-height: 24px;
    }
    span {
      color: #242424;
      font-size: 14px;
      font-family: "Poppins";
      font-weight: 400;
    }
  }
  .search{
    padding:20px;
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
`;
