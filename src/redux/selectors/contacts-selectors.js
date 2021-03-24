import { createSelector } from 'reselect';

const getAllContacts = state => state.contacts.items;
const getFilterValue = state => state.contacts.filter;

const getFilteredItems = createSelector(
  [getAllContacts, getFilterValue],
  (items, filter) => {
    return items.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);

export { getAllContacts, getFilterValue, getFilteredItems };
