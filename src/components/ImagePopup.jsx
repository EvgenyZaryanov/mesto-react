function ImagePopup(props) {
  const { name, selectedCard, onClose, isOpen } = props;

  return (
    <div
      id="fullImagePopup"
      className={`popup popup_overlay_${name} ${isOpen ? 'popup_opened' : ''}`}
      onClick={evt => {
        if (evt.target.classList.contains('popup_opened')) {
          onClose();
        }
      }}
    >
      <div className="popup__container popup__container_zoom">
        <button
          className="popup__close-button popup__close-button_fullImage"
          onClick={onClose}
          aria-label="Закрытие формы"
          type="button"
        ></button>
        <img className="popup__fullImage" src={selectedCard.link} alt={selectedCard.name} />
        <figcaption className="popup__fullImageTitle">{selectedCard.name}</figcaption>
      </div>
    </div>
  );
}

export default ImagePopup;
