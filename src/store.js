export const initialStore=()=>{
  return{
    message: null,
    contact: []
  }
}

export default function storeReducer(store, action = {}) {
  if (action.type === "load_contact") {
    return {
      ...store,
      store: action.store,
    };
  }

  if (action.type === "edit_contact") {
    const contactIdx = store.contact.findIndex(
      (contact) => contact.id === action.contact.id
    );
    const newContact = store.contact.toSpliced(contactIdx, 1, action.book);

    return {
      ...store,
      contact: newContact,
    };
  }

  if (action.type === "delete_contact") {
    const contactIdx = store.contact.findIndex(
      (book) => contact.id === action.id
    );
    const newContact = store.contact.toSpliced(contactIdx, 1);

    return {
      ...store,
      contact: newContact,
    };
  }

  return store;
}