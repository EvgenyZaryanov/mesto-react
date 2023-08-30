import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = React.useRef();
  const [isLoading, setIsLoading] = React.useState(false);

  function handleChangeAvatar(e) {
    avatarRef.current.value = e.target.value;
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    onUpdateAvatar({
      avatar: avatarRef.current.value
    });
  }

  return (
    <PopupWithForm
      name="avatarEdit"
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText={isLoading ? 'Сохранение...' : 'Сохранить'}
    >
      <input
        className="popup__input popup__input_url_avatar"
        placeholder="Ссылка на картинку"
        type="url"
        name="inputAvatar"
        ref={avatarRef}
        onChange={handleChangeAvatar}
        id="popup__newAvatar"
        required
      />
      <span className="popup__span popup__span_avatar-url-error" id="avatar-link" />
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
