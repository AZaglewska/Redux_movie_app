import { actionsTypes } from "../actions/actionsTypes";

const initialState = {
  pageNumber: 1,
};

const pagesReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case actionsTypes.INCREASE_PAGE_NUMBER:
      return {
        ...state,
        pageNumber: state.pageNumber + 1,
      };

    case actionsTypes.DECREASE_PAGE_NUMBER:
      return {
        ...state,
        pageNumber: state.pageNumber - 1,
      };

    default:
      return state;
  }
};

export default pagesReducer;
