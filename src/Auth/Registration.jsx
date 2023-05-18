import React, { useState } from 'react';
import ResgistPage1 from './RegistrationPage/Rest_page1';
import Resgistpage2 from './RegistrationPage/Rest_page2';
import Resgistpage3 from './RegistrationPage/Rest_page3';
import Resgistpage4 from './RegistrationPage/Rest_page4';
import ResgistPage5 from './RegistrationPage/Rest_page5';
import ResgistPage6 from './RegistrationPage/Rest-page6';
import ResgistPage7 from './RegistrationPage/Rest_page7';
import ResgistPage8 from './RegistrationPage/Rest_page8';





const Registration = () => {
    const [count, setCount] = useState(1);
    const Nextpage = () => (count === 8)?setCount(7):setCount(count + 1)
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
     


    </>)
}

export default Registration;