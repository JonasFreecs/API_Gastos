import React from 'react';
import Routes from './src/routes';
import { StatusBar } from 'react-native';


export default function App() {
  console.log = () => { };
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <Routes />
    </ >
  );
}

