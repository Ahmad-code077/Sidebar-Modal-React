import React, { useContext } from 'react';
import { FaBars } from 'react-icons/fa';
import { useCustomHook } from './context';
const Home = () => {
  const { openModal, openSidebar } = useCustomHook();
  return (
    <main>
      <button className='sidebar-toggle' onClick={openSidebar}>
        <FaBars />
      </button>
      <button className='btn' onClick={openModal}>
        show Model
      </button>
    </main>
  );
};

export default Home;
