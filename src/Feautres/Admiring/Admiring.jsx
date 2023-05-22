import React from 'react'
import { Admiringsdiv,AdmiringCard } from './AdmiStyle'
import doteicon, {juli,natai,markg}from "../../Utils/Admiring/Admiring"



const data = [{
  photo:juli,
  newbtn:true,
  headname:"Julia Roberts",
  age:21,
  country:"Nigeria",
  profession:"Teacher",
  admierd_btn:true,
  chat_btn:false,
  padding_btn:false,

},{
photo:natai,
newbtn:true,
headname:"Julia Roberts",
age:21,
country:"Nigeria",
profession:"Teacher",
admierd_btn:false,
chat_btn:true,
padding_btn:false,

},{
photo:markg,
newbtn:false,
headname:"Julia Roberts",
age:21,
country:"Nigeria",
profession:"Teacher",
admierd_btn:false,
chat_btn:false,
padding_btn:true,

}
]
const Admiring= () => {
  return (<>

    <Admiringsdiv>
      <div className='search_bar'>
        <input type='Search' className='admiring_search' placeholder='Admiring (Those I am Admiring whey de enter my eye)' />
        <span className='search_icon'>0</span>
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
                    <img src={doteicon} alt='' />

                  </div>
                  <p>{el.profession}</p>
                </div>
              </div>
              {el.admierd_btn && <button className='admired_btn_cart_bottom'>Admired</button>}
              { el.padding_btn && <button className='admired_btn_cart_bottom_padding'>Pending</button>}
              { el.chat_btn &&<select className='admired_btn_cart_select'>
                <option value="a">cheat</option>
              </select>}

            </AdmiringCard>

          </>)
        }) }

      </div>
      

    </Admiringsdiv>
  </>
  )
}

export default Admiring

