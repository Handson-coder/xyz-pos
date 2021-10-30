import axios from 'axios'
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

export function addToCardOne(payload) {
  return {
    type: CARD_ONE,
    payload,
  };
}
export function addToCardTwo(payload) {
  return {
    type: CARD_TWO,
    payload,
  };
}
export function addToCardThree(payload) {
  return {
    type: CARD_THREE,
    payload,
  };
}
export function addToCustomersLists(payload) {
  return {
    type: CUSTOMERS,
    payload,
  };
}
export function addToCustomerOne(payload) {
  return {
    type: CUSTOMER_ONE,
    payload,
  };
}
export function addToCustomerTwo(payload) {
  return {
    type: CUSTOMER_TWO,
    payload,
  };
}
export function addToCustomerThree(payload) {
  return {
    type: CUSTOMER_THREE,
    payload,
  };
}
export function addToCustomerFour(payload) {
  return {
    type: CUSTOMER_FOUR,
    payload,
  };
}
export function addToCustomerFive(payload) {
  return {
    type: CUSTOMER_FIVE,
    payload,
  };
}

const baseUrl = `https://handson-xyz-pos.herokuapp.com`

export const getCards = () => {
  return (dispatch) => {
    axios
      .get(`https://pay.tokomini.net/api/pricelist`)
      .then(({ data }) => {
        const cardOne = data.data[7]
        const cardTwo = data.data[1]
        const cardThree = data.data[3]
        dispatch(addToCardOne(cardOne))
        dispatch(addToCardTwo(cardTwo))
        dispatch(addToCardThree(cardThree))
      })
      .catch((err) => console.log(err));
  };
};

export const getAllCustomers = () => {
  return (dispatch) => {
    axios.get(`${baseUrl}/customers`)
      .then(({ data }) => {
        dispatch(addToCustomersLists(data))
        dispatch(addToCustomerOne(data[0]))
        dispatch(addToCustomerTwo(data[1]))
        dispatch(addToCustomerThree(data[2]))
        dispatch(addToCustomerFour(data[3]))
        dispatch(addToCustomerFive(data[4]))
      })
      .catch((err) => console.log(err));
  }
}