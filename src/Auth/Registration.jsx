import React from 'react';
import ResgistPage1 from './RegistrationPage/Rest_page1';
import Resgistpage2 from './RegistrationPage/Rest_page2';
import Resgistpage3 from './RegistrationPage/Rest_page3';
import Resgistpage4 from './RegistrationPage/Rest_page4';
import ResgistPage5 from './RegistrationPage/Rest_page5';
import ResgistPage6 from './RegistrationPage/Rest_page6';
import ResgistPage7 from './RegistrationPage/Rest_page7';
import ResgistPage8 from './RegistrationPage/Rest_page8';
import ResgistPage9 from './RegistrationPage/Rest_page9';
import ResgistPage10 from './RegistrationPage/Rest_page10';
import ResgistPage11 from './RegistrationPage/Rest_page11';
import ResgistPage12 from './RegistrationPage/Rest_page12';
import ResgistPage13 from './RegistrationPage/Rest_page13';
import ResgistPage14 from './RegistrationPage/Rest_page14';
import ResgistPage15 from './RegistrationPage/Rest_page15';





const Registration = () => {
    const [count, setCount] = React.useState(1);
    const Nextpage = () => (count === 14)?setCount(13):setCount(count + 1)
    const Backpage = () => (count === 0)?setCount(1):setCount(count - 1)


    return (<>
        {count === 1 && <ResgistPage1 Next={Nextpage} Back={Backpage} />}
        {count === 2 && <Resgistpage2 Next={Nextpage} Back={Backpage} />}
        {count === 3 && <Resgistpage3 Next={Nextpage} Back={Backpage} />}
        {count === 4 && <Resgistpage4 Next={Nextpage} Back={Backpage} />}
        {count === 5 && <ResgistPage5 Next={Nextpage} Back={Backpage} />}
        {count === 6 && <ResgistPage6 Next={Nextpage} Back={Backpage} />}
        {count === 7 && <ResgistPage7 Next={Nextpage} Back={Backpage} />}
        {count === 8 && <ResgistPage8 Next={Nextpage} Back={Backpage} />} 
        {count === 9 && <ResgistPage9 Next={Nextpage} Back={Backpage} />} 
        {count === 10 && <ResgistPage10 Next={Nextpage} Back={Backpage} />} 
        {count === 11 && <ResgistPage11 Next={Nextpage} Back={Backpage} />} 
        {count === 12 && <ResgistPage12 Next={Nextpage} Back={Backpage} />} 
        {count === 13 && <ResgistPage13 Next={Nextpage} Back={Backpage} />} 
        {count === 15 && <ResgistPage15 Next={Nextpage} Back={Backpage} />} 
        {count === 14 && <ResgistPage14 Next={Nextpage} Back={Backpage} />} 

    </>)
}

export default Registration;