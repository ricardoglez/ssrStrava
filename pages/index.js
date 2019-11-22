import { useRouter }  from 'next/router';
import React, {useState, useEffect , useContext } from 'react';
import MyLayout from '../components/MyLayout';
import Home from '../components/Home';
import Oauth from '../components/Oauth';
import { AppContext } from '../context/AppContext';

const Index = () => {
    const [state, dispatch] = useContext(AppContext) 
    const router = useRouter();
   return (
       <MyLayout>
            <Home />
       </MyLayout>
    )
};

export default Index;