import styled from 'styled-components'
export const Admiringsdiv = styled.div`
    border: 5px rgb(240, 240, 240) solid;

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
.admiring_search{
    width: 100%;
    background: #f0f0f0;
    outline: none;
    border: none;
    padding: 10px;
}
.admiring_content {
    margin: 38px 4px;
    display: flex;
    flex-wrap: wrap;
    column-gap: 42px;
    row-gap: 40px;
    
}`

export const AdmiringCard = styled.div`
width: 160px;
position: relative;

.admiring_card_img {
    width: 100%;
    height: 160px;
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
    left: 5%;
    top: 3%;
    position: absolute;
    left: 5%;
    top: 3%;
    color: white;
    background: linear-gradient("268.55deg, #FF483C 0%, #FF2C5A 100%");
    padding: 2px;
    width: 45px;
    border-radius: 11px;
    border: none;

}


button.admired_btn_cart_bottom {
    border-radius: 6px;
    width: 99%;
    text-align: center;
    padding: 7px;
    border: none;
    margin: 1px;
    background: #ff3154;
    color: white;
}
.admiring_name_heading{
  font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 30px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    letter-spacing: 0.05em;
    margin: 4px 0px;
}
.admired_btn_cart_select{
    border-radius: 6px;
    width: 99%;
    text-align: center;
    padding: 7px;
    border: none;
    margin: 1px;
    background: rgb(242 242 242);
    color: #242424;

}
.admired_btn_cart_bottom_padding{
    border-radius: 6px;
    width: 99%;
    text-align: center;
    padding: 7px;
    border: none;
    margin: 1px;
    background: rgb(242 242 242);
    color: #7b7f91;
    }
`
