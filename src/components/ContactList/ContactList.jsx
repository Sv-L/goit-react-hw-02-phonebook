import css from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDeleteContact }) => {
  return contacts.length > 0 ? (
    <ul className={css['contacts-list']}>
      {contacts.map(({ id, name, number }) => (
        <li className={css['contacts-item']} key={id}>
          <p className={css['contacts-name']}>{name}</p>
          <p className={css['contacts-number']}>{number}</p>
          <button
            type="button"
            className={css['delete-btn']}
            onClick={() => onDeleteContact(id)}
          >
            X
          </button>
        </li>
      ))}
    </ul>
  ) : (
    <p className={css['contacts-text']}>There is no contacts</p>
  );
};
export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};
