import styled from 'styled-components'
export const Admiringsdiv = styled.div`
min-height:100vh;
 .search{
    height:88px;
    background:#f0f0f0;
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

 .search_bar {
    width: 100%;
    background: #f0f0f0;
    display: flex;
    justify-content: space-between;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    align-items: end;
    letter-spacing: 0.05em;
    text-transform: capitalize;
   height:88px;
   padding:20px;
    color: #242424;
 }

span.spnaAddmi {
    color: #a8580f;

}
.admiring_search{
    width: 100%;
    background: #f0f0f0;
    outline: none;
    border: none;
    padding: 10px;
}
.admiring_content {
   
    display:grid;
    grid-template-columns:repeat(4,1fr);
    justify-content:center;
    gap:20px;
    width: 97.6%;
    margin: auto;
    margin-top: 45px;
   

    @media(max-width:1200px){
        grid-template-columns:repeat(3,1fr);

    }

}
   
    
}
span.search_icon {
    font-size: 20px;
}`

export const AdmiringCard = styled.div`

position: relative;

.admiring_card_img {
    width: 100%;
    height: 175px;
    border-radius: 11px;
}

.admiring_card_img_tag{
    width: 100%;
    height: 100%;
    border-radius: 11px;
}
.admiring_text_conten {
    margin: 10px 0;
}
.admiring_name {
    display: flex;
    -webkit-box-pack: start;
    justify-content: start;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: #7B7F91;
}
.admiring_dote_text {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 6px;
}

button.admiring_new_btn {
    position: absolute;
    position: absolute;
    left: 7px;
    top: 10px;
    color: white;
    background: linear-gradient(268.55deg, #FF483C 0%, #FF2C5A 100%);
    padding: 2px;
    width: 45px;
    border-radius: 11px;
    border: none;

}


button.admired_btn_cart_bottom {
    border-radius: 6px;
    width: 99%;
    text-align: center;
    padding: 10px;
    border: none;
    margin: 1px;
    background: linear-gradient(268.55deg, #FF483C 0%, #FF2C5A 100%);
    color: white;
}
.admiring_name_heading{
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    letter-spacing: 0.05em;
 

}
.admired_btn_cart_select{
    border-radius: 6px;
    width: 99%;
    text-align: center;
    padding: 10px;
    border: none;
    margin: 1px;
    background: rgb(242 242 242);
    color: #242424;
    position: relative;
    top: -23px;
    outline: none;
}
img.chating_icon {
    position: relative;
    left: 7px;
    top: 7px;
    z-index: 1;
    left: 32px;
}
.admired_btn_cart_bottom_padding{
    border-radius: 6px;
    width: 99%;
    text-align: center;
    padding: 10px;
    border: none;
    margin: 1px;
    background: rgb(242 242 242);
    color: #7b7f91;
    }
`
