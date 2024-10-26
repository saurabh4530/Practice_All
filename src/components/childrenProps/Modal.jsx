import React from 'react';

export default function Modal({ children, onClose }) {
  return (
    <div className="modal">
      <button onClick={onClose}>Close</button>
      <div className="modal-content">{children}</div>
    </div>
  );
}