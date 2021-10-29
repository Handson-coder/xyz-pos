import axios from 'axios'
import {
  CARD_ONE,
  CARD_TWO,
  CARD_THREE
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