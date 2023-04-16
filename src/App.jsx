import React from 'react';
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div className='max-w-full mx-auto'>
      <Header/>
      <Outlet/>
    </div>
  );
};

export default App;