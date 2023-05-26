import React from 'react'
import ResgistPage1 from '../../Auth/RegistrationPage/Rest_page1';
import ResgistPage2 from '../../Auth/RegistrationPage/Rest_page2';
import ResgistPage3 from '../../Auth/RegistrationPage/Rest_page3';
import ResgistPage4 from '../../Auth/RegistrationPage/Rest_page4';
import ResgistPage5 from '../../Auth/RegistrationPage/Rest_page5';
import ResgistPage6 from '../../Auth/RegistrationPage/Rest_page6';
import ResgistPage7 from '../../Auth/RegistrationPage/Rest_page7';
import ResgistPage8 from '../../Auth/RegistrationPage/Rest_page8';
import ResgistPage9 from '../../Auth/RegistrationPage/Rest_page9';
import ResgistPage10 from '../../Auth/RegistrationPage/Rest_page10';
import ResgistPage11 from '../../Auth/RegistrationPage/Rest_page11';
import ResgistPage12 from '../../Auth/RegistrationPage/Rest_page12';
import ResgistPage13 from '../../Auth/RegistrationPage/Rest_page15';
import ResgistPage14 from '../../Auth/RegistrationPage/Rest_page16';
import ResgistPage15 from '../../Auth/RegistrationPage/Rest_page17';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Countvalue } from "../../Redux/SliceOfRedux/EditProfile";

export default function EditPofileDetails() {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const countValue=useSelector((e)=>e?.EditProfile?.count)
    console.log(countValue,"cccccccc")
 
    const Nextpage = () => dispatch(Countvalue(countValue+1))
   
    const Backpage=()=>navigate(-1)


    return (<>
        {countValue === 1 && <ResgistPage1 Next={Nextpage} Back={Backpage} />}
         {countValue === 2 && <ResgistPage2 Next={Nextpage} Back={Backpage} />}
        {countValue  === 3 && <ResgistPage3 Next={Nextpage} Back={Backpage} />}
        {countValue  === 4 && <ResgistPage4 Next={Nextpage} Back={Backpage} />}
        {countValue  === 5 && <ResgistPage5 Next={Nextpage} Back={Backpage} />}
        {countValue === 6 && <ResgistPage6 Next={Nextpage} Back={Backpage} />}
        {countValue=== 7 && <ResgistPage7 Next={Nextpage} Back={Backpage} />}
        {countValue=== 8 && <ResgistPage8 Next={Nextpage} Back={Backpage} />} 
        {countValue === 9 && <ResgistPage9 Next={Nextpage} Back={Backpage} />} 
        {countValue=== 10 && <ResgistPage10 Next={Nextpage} Back={Backpage} />} 
        {countValue=== 11 && <ResgistPage11 Next={Nextpage} Back={Backpage} />} 
        {countValue === 12 && <ResgistPage12 Next={Nextpage} Back={Backpage} />} 
        {countValue === 13 && <ResgistPage13 Next={Nextpage} Back={Backpage} />} 
        {countValue=== 14 && <ResgistPage14 Next={Nextpage} Back={Backpage} />} 
        {countValue=== 15 && <ResgistPage15 Next={Nextpage} Back={Backpage} />}  

    </>)
}
