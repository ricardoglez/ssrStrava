import { useRouter }  from 'next/router';
import React, {useState, useEffect , useContext } from 'react';
import MyLayout from '../components/MyLayout';
import Home from '../components/Home';
import Oauth from '../components/Oauth';
import { AppContext } from '../context/AppContext';

const Index = () => {
    const [state, dispatch] = useContext(AppContext)
    let [ isOauth, handleOauth  ] = useState(false); 
    let [ oauthCode, handleCode  ] = useState(null); 
    const router = useRouter();
    useEffect( () => {
        console.log(router);
       if( router.query.hasOwnProperty('code') ){
        handleOauth(true);
        handleCode(router.query.code);
       }
   }, [] )
   
   return (
       <MyLayout>
           {
               isOauth && !state.isAuth 
               ?
               <div>
                   <Oauth code={oauthCode} />
               </div>
               :
                <div>
                    <Home />
                </div>
           }
       </MyLayout>
    )
};

export default Index;