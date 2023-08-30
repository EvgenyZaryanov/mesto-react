import React from 'react';
import PopupWithForm from './PopupWithForm';

function ConfirmDeletePopup({ isOpen, onClose, onDeleteCard }) {
  const [isLoading, setIsLoading] = React.useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    onDeleteCard();
  }

  return (
    <PopupWithForm
      // className="popup__form popup__form-delete-card"
      name="deleteCard"
      title="Вы уверены?"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText={isLoading ? 'Удаление...' : 'Да'}
    />
  );
}

export default ConfirmDeletePopup;
