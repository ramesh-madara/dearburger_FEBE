import React from 'react';
import './Modal.css'; // Assuming you have this CSS file for styles

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-over">
      <div className="modal-content-c">
        {children}
      </div>
    </div>
  );
};

export default Modal;
