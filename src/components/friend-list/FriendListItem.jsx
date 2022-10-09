//import PropTypes from 'prop-types';
// import Friend from './FriendListItem.module.css';


export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
      <li className="item">
              <span className={isOnline}></span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
              <p className="name">{name}</p>
      </li>
  );
};
