import axios from 'axios'
import {
  CARD_ONE,
  CARD_TWO,
  CARD_THREE,
  CUSTOMERS
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

const baseUrl = `http://localhost:9500`

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
      })
      .catch((err) => console.log(err));
  }
}