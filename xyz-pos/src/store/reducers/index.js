// reducer here
import {
  CARD_ONE,
  CARD_TWO,
  CARD_THREE,
  CUSTOMERS,
  CUSTOMER_ONE,
  CUSTOMER_TWO,
  CUSTOMER_THREE,
  CUSTOMER_FOUR,
  CUSTOMER_FIVE
} from "../keys";
const initialState = {
  cardOne: {},
  cardTwo: {},
  cardThree: {},
  customers: [],
  customerOne: {},
  customerTwo: {},
  customerThree: {},
  customerFour: {},
  customerFive: {},
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
    case CUSTOMER_ONE:
      return { ...state, customerOne: action.payload };
    case CUSTOMER_TWO:
      return { ...state, customerTwo: action.payload };
    case CUSTOMER_THREE:
      return { ...state, customerThree: action.payload };
    case CUSTOMER_FOUR:
      return { ...state, customerFour: action.payload };
    case CUSTOMER_FIVE:
      return { ...state, customerFive: action.payload };
    default:
      return state;
  }
}

export default reducer;
