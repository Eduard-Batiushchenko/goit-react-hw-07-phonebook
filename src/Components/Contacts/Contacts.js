import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  getContactsOperation,
  deleteContactOperation,
} from '../../redux/operations/contactsOperations';
import {
  getFilterValue,
  getFilteredItems,
} from '../../redux/selectors/contacts-selectors';
import style from './Contacts.module.css';

class Contacts extends Component {
  componentDidMount() {
    this.props.reloadPage(this.props.items);
  }
  render() {
    const { deleteContact, state } = this.props;
    const filterInpurt = getFilteredItems(state);
    return (
      <ul className={style.list}>
        {filterInpurt.map(el => {
          return (
            <li key={el.id} className={style.item}>
              {el.name}: {el.number}
              <button
                type="button"
                className={style.button}
                onClick={() => deleteContact(el.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

Contacts.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  filter: getFilterValue(state),
  state: state,
});
const mapDispatchToProps = dispatch => ({
  deleteContact: id => dispatch(deleteContactOperation(id)),
  reloadPage: data => dispatch(getContactsOperation(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
