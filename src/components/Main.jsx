import React from 'react';
import { api } from '../utils/Api';
import Card from './Card';

function Main(props) {
  const { onEditAvatar, onEditProfile, onAddPlace, onCard } = props;

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getUserInfo()
      .then(info => {
        setUserName(info.name);
        setUserDescription(info.about);
        setUserAvatar(info.avatar);
      })
      .catch(err => {
        console.log(err);
      });

    api
      .getCards()
      .then(item => {
        setCards(...cards, item);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <main className="main">
      <section className="profile">
        <a
          onClick={onEditAvatar}
          href="#"
          aria-label="Аватар"
          id="profile__avatar-button"
          className="profile__avatar"
          style={{ backgroundImage: `url(${userAvatar})` }}
          alt="Аватар"
        ></a>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button
            onClick={onEditProfile}
            aria-label="Открыть"
            type="button"
            className="profile__edit-button"
          ></button>
          <p className="profile__details">{userDescription}</p>
        </div>
        <button
          onClick={onAddPlace}
          aria-label="Открыть"
          type="button"
          className="profile__add-button"
        ></button>
      </section>
      <section className="elements" aria-label="Карточки с изображениями">
        {cards.map(card => (
          <Card
            key={card._id}
            name={card.name}
            link={card.link}
            likesAmount={card.likes.length}
            onCardClick={onCard}
          />
        ))}
      </section>
    </main>
  );
}
export default Main;
