//@ts-nocheck
import React, { useState } from 'react';
import Modal from "./Modal"

export default function ParentComponent() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <button onClick={openModal}>Open Modal</button>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <h2>Modal Title</h2>
          <p>This is some content inside the modal.</p>
        </Modal>
      )}
    </>
  );
}