import React from 'react';

function Card(props) {
  const { name, link, likesAmount, onCardClick } = props;

  return (
    <article className="element">
      <img
        className="element__image"
        onClick={() => onCardClick(props)}
        src={link}
        title={name}
        alt={name}
      />
      <button
        className="element__delete-button element__delete-button_active"
        aria-label="Удалить"
        type="button"
      ></button>
      <div className="element__place">
        <h3 className="element__place-name">{name}</h3>
        <div className="element__like-attributes">
          <button className="element__like-button" aria-label="Лайк" type="button"></button>
          <p className="element__likes-counter">{likesAmount}</p>
        </div>
      </div>
    </article>
  );
}

export default Card;
