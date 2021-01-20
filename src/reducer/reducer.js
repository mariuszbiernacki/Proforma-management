import { actionsTypes } from "../actions/actionsTypes";
import { proformaArray } from "../localData/localData";

const initialState = {
  proformaList: [...proformaArray],
  filteredProformaList: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionsTypes.ADD_PROFORMA:
      return {
        ...state,
        proformaList: [...state.proformaList, payload],
      };
    case actionsTypes.DELETE_PROFORMA:
      const UpdatedProformaList = state.proformaList.filter(
        (proforma) => proforma.proformaNumber !== payload
      );
      return {
        ...state,
        proformaList: [...UpdatedProformaList],
      };
    case actionsTypes.FILTER_PROFORMA_LIST_BY_NAME:
      const chosenProformas = state.proformaList.filter((proforma) =>
        proforma.companyName.includes(payload)
      );

      return {
        ...state,
        filteredProformaList: [...chosenProformas],
      };
    default: {
      return state;
    }
  }
};

export default reducer;
