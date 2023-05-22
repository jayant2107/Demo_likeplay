import React from 'react'
import { Admiringsdiv, AdmiringCard } from './AdmiStyle'
import doteicon, { juli, natai, markg, iconchat } from "../../Utils/Admiring/Admiring"
import { AiOutlineSearch } from "react-icons/ai";




const data = [{
  photo: juli,
  newbtn: true,
  headname: "Julia Roberts",
  age: 21,
  country: "Nigeria",
  profession: "Teacher",
  admierd_btn: true,
  chat_btn: false,
  padding_btn: false,

}, {
  photo: natai,
  newbtn: true,
  headname: "Julia Roberts",
  age: 21,
  country: "Nigeria",
  profession: "Teacher",
  admierd_btn: false,
  chat_btn: true,
  padding_btn: false,

}, {
  photo: markg,
  newbtn: false,
  headname: "Julia Roberts",
  age: 21,
  country: "Nigeria",
  profession: "Teacher",
  admierd_btn: false,
  chat_btn: false,
  padding_btn: true,

},
{
  photo: juli,
  newbtn: true,
  headname: "Julia Roberts",
  age: 21,
  country: "Nigeria",
  profession: "Teacher",
  admierd_btn: true,
  chat_btn: false,
  padding_btn: false,

}, {
  photo: natai,
  newbtn: true,
  headname: "Julia Roberts",
  age: 21,
  country: "Nigeria",
  profession: "Teacher",
  admierd_btn: false,
  chat_btn: true,
  padding_btn: false,

}, {
  photo: markg,
  newbtn: false,
  headname: "Julia Roberts",
  age: 21,
  country: "Nigeria",
  profession: "Teacher",
  admierd_btn: false,
  chat_btn: false,
  padding_btn: true,

},
{
  photo: juli,
  newbtn: true,
  headname: "Julia Roberts",
  age: 21,
  country: "Nigeria",
  profession: "Teacher",
  admierd_btn: true,
  chat_btn: false,
  padding_btn: false,

}, {
  photo: natai,
  newbtn: true,
  headname: "Julia Roberts",
  age: 21,
  country: "Nigeria",
  profession: "Teacher",
  admierd_btn: false,
  chat_btn: true,
  padding_btn: false,

}, {
  photo: markg,
  newbtn: false,
  headname: "Julia Roberts",
  age: 21,
  country: "Nigeria",
  profession: "Teacher",
  admierd_btn: false,
  chat_btn: false,
  padding_btn: true,

}
]
const Admiring = () => {
  const [serc ,setSerc] = React.useState(false)
  const Search =()=>{setSerc(true)}
  

  return (<>
   

    <Admiringsdiv>
      <div className='search_bar'>
        {!serc && <p className='text_search'><span className='spnaAddmi'>Admiring</span> Those I am Admiring whey de enter my eye</p> }
        {serc && <input type='Search' className='admiring_search' placeholder='text........'/>}
        <span className='search_icon' onClick={Search}><AiOutlineSearch /></span>
      </div>
      <div className='admiring_content'>
        {data.map((el) => {
          return (<>
            <AdmiringCard>
              <div className='admiring_card_img'>
                {el.newbtn && <button className='admiring_new_btn'>New</button>}
                <img src={el.photo} className='admiring_card_img_tag' alt='empty'></img>
              </div>
              <div className='admiring_text_conten'>
                <h5 className='admiring_name_heading'>{el.headname}</h5>
                <div className='admiring_name'>
                  <p>{el.age}</p>
                  <div className='admiring_dote_text'>
                    <img src={doteicon} alt='' />

                  </div>
                  <p>{el.country}</p>
                  <div className='admiring_dote_text'>
                    <img src={doteicon} alt='' s/>

                  </div>
                  <p>{el.profession}</p>
                </div>
              </div>
              {el.admierd_btn && <button className='admired_btn_cart_bottom'>Admired</button>}
              {el.padding_btn && <button className='admired_btn_cart_bottom_padding'>Pending</button>}
              {el.chat_btn && <div>
                <img className='chating_icon'  src={iconchat} alt="" />
                <select className='admired_btn_cart_select'>

                  <option value="a">chat</option>
                </select>
              </div>}

            </AdmiringCard>

          </>)
        })}

      </div>


    </Admiringsdiv>
  </>
  )
}

export default Admiring

