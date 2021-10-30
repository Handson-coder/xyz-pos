// reducer here
import {
  CARD_ONE,
  CARD_TWO,
  CARD_THREE,
  CUSTOMERS
} from "../keys";
const initialState = {
  cardOne: {},
  cardTwo: {},
  cardThree: {},
  customers: []
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case CARD_ONE:
      return { ...state, cardOne: action.payload };
    case CARD_TWO:
      return { ...state, cardTwo: action.payload };
    case CARD_THREE:
      return { ...state, cardThree: action.payload };
    case CUSTOMERS:
      return { ...state, customers: action.payload };
    default:
      return state;
  }
}

export default reducer;
