function PopupWithForm(props) {
  const { name, title, children, isOpen, onClose, onSubmit, buttonText } = props;

  return (
    <div
      className={`popup popup_for_${name} ${isOpen ? 'popup_opened' : ''}`}
      onClick={evt => {
        if (evt.target.classList.contains('popup_opened')) {
          onClose();
        }
      }}
    >
      <div className="popup__container">
        <button
          className="popup__close-button"
          onClick={onClose}
          aria-label="Закрыть"
          type="button"
        ></button>
        <form className="popup__form" onSubmit={onClose} name={name} noValidate>
          <h2 className="popup__title">{title}</h2>
          {children}
          <button
            type="submit"
            className="popup__submit-button popup__submit-button_disabled"
            disabled
            onClick={onSubmit}
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
