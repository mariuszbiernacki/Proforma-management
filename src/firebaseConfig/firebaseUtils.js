import { firestore } from "./firebaseConfig";

export const baseCollection = firestore.collection("proformaBaza");

export const getDocumentsFormCollection = (doc) => {
  return {
    id: doc.id,
    ...doc.data(),
  };
};

export const deleteProforma = (id) => {
  baseCollection
    .doc(id)
    .delete()
    .then((response) => console.log(response))
    .catch((error) => console(error));
};
