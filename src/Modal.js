import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useCustomHook } from './context';
const Modal = () => {
  const { isModalOpen, closeModal } = useCustomHook();
  return (
    <div
      className={`${
        isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'
      }`}
    >
      <div className='modal-container'>
        <h3>modal content</h3>
        <button className='close-modal-btn' onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
