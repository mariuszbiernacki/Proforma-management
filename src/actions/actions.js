import { actionsTypes } from "./actionsTypes";

export const addProforma = (newProforma) => {
  return {
    type: actionsTypes.ADD_PROFORMA,
    payload: newProforma,
  };
};

export const deleteProforma = (proformaNumber) => {
  return {
    type: actionsTypes.DELETE_PROFORMA,
    payload: proformaNumber,
  };
};

export const filterProformaListByName = (companyName) => {
  return {
    type: actionsTypes.FILTER_PROFORMA_LIST_BY_NAME,
    payload: companyName,
  };
};
