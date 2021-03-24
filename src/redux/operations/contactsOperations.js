import axios from 'axios';
import {
  addItemRequest,
  addItemSuccess,
  addItemError,
  setByReloadRequest,
  setByReloadSuccess,
  setByReloadError,
  deleteItemRequest,
  deleteItemSuccess,
  deleteItemError,
} from '../actions/contactsActions/itemsActions';

axios.defaults.baseURL = 'http://localhost:5000';
const options = {
  headers: {
    'Content-Type': 'application/json',
  },
};

const addContactsOperation = item => dispatch => {
  dispatch(addItemRequest());
  axios
    .post('/contacts', item, options)
    .then(({ data }) => dispatch(addItemSuccess(data)))
    .catch(() => dispatch(addItemError()));
};

const getContactsOperation = () => dispatch => {
  dispatch(setByReloadRequest());
  axios
    .get('/contacts')
    .then(({ data }) => dispatch(setByReloadSuccess(data)))
    .catch(() => dispatch(setByReloadError()));
};

const deleteContactOperation = id => dispatch => {
  dispatch(deleteItemRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteItemSuccess(id)))
    .catch(() => dispatch(deleteItemError()));
};

export { addContactsOperation, getContactsOperation, deleteContactOperation };
