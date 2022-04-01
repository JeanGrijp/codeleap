import React from 'react';

import HomeContainer from './Home.style';
// import logo from '../../assets/SVG/logo.svg';
import Login from '../Login/Login';

export default function Home() {
  return (
    <HomeContainer>
      {/* <img src={logo} alt="codeleap" /> */}
      <Login />
    </HomeContainer>
  );
}
