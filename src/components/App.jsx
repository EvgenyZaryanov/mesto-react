import '../index.css';
import React from 'react';
import Header from './Header.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';
import PopupWithForm from './PopupWithForm.jsx';
import ImagePopup from './ImagePopup.jsx';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleClickCard(card) {
    setImagePopupOpen(true);
    setSelectedCard(card);
  }

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setImagePopupOpen(false);
  };

  return (
    <div className="page__content">
      <div className="page">
        <Header />
        <Main
          onEditProfile={() => setIsEditProfilePopupOpen(true)}
          onAddPlace={() => setIsAddPlacePopupOpen(true)}
          onEditAvatar={() => setIsEditAvatarPopupOpen(true)}
          onCard={handleClickCard}
        />
        <Footer />
        <PopupWithForm
          name="add-form"
          title="Редактировать профиль"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          buttonText="Сохранить"
          children={
            <>
              <input
                className="popup__input"
                name="profileName"
                id="profileName-input"
                placeholder="Имя"
                type="text"
                minLength="2"
                maxLength="40"
                required
              />
              <p className="popup__span-paragraph"></p>
              <span className="popup__input-error"></span>
              <input
                className="popup__input"
                name="profileDetails"
                id="profileDetails-input"
                placeholder="О себе"
                type="text"
                minLength="2"
                maxLength="200"
                required
              />
              <p className="popup__span-paragraph"></p>
              <span className="popup__input-error"></span>
            </>
          }
        />
        <PopupWithForm
          name="new-card"
          title="Новое место"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          buttonText="Создать"
          children={
            <>
              <input
                name="item-name"
                className="popup__input"
                id="newCardName-input"
                placeholder="Название"
                type="text"
                minLength="2"
                maxLength="30"
                required
              />
              <p className="popup__span-paragraph"></p>
              <span className="popup__input-error"></span>
              <input
                name="item-link"
                className="popup__input popup__input_url_card"
                id="newCardLink-input"
                placeholder="Ссылка на картинку"
                type="url"
                required
              />
              <p className="popup__span-paragraph"></p>
              <span className="popup__input-error"></span>
            </>
          }
        />
        <PopupWithForm
          name="avatarEdit"
          title="Обновить аватар"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          buttonText="Сохранить"
          children={
            <>
              <input
                className="popup__input popup__input_url_avatar"
                name="inputAvatar"
                placeholder="Ссылка на аватар"
                id="popup__newAvatar"
                type="url"
                required
              />
              <span className="popup__span popup__span_avatar-url-error" id="avatar-link"></span>
            </>
          }
        />
        <PopupWithForm
          className="popup__form popup__form-delete-card"
          name="deleteCard"
          title="Вы уверены?"
          children={
            <button className="popup__submit-button" type="submit">
              Да
            </button>
          }
        />
        <ImagePopup
          name="scale-image"
          selectedCard={selectedCard}
          onClose={closeAllPopups}
          isOpen={isImagePopupOpen}
        />
      </div>
    </div>
  );
}

export default App;
