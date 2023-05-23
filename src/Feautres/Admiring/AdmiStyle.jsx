import styled from 'styled-components'
export const Admiringsdiv = styled.div`

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
    align-items: center;
    letter-spacing: 0.05em;
    text-transform: capitalize;
    padding: 25px;
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
    margin: 45px 8px 10px 9px;
    display: flex;
    flex-wrap: wrap;
    gap: 39px 14px;
    
}
span.search_icon {
    font-size: 30px;
}`

export const AdmiringCard = styled.div`
width: 200px;
position: relative;

.admiring_card_img {
    width: 100%;
    height: 190px;
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
    font-size: 16px;
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
    font-size: 26px;
    line-height: 30px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    letter-spacing: 0.05em;
    margin: 18px 0px;

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
