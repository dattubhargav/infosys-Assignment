import { GET_MOVIES_SUCCESS } from "./constants"
import { GET_MOVIES_URL } from "../config/URLs"

export const requestAPIResponse = () => dispatch => {
  fetch(GET_MOVIES_URL)
    .then(response => response.json())
    .then((jsonResponse) => {
      dispatch(apiResponseReceived(jsonResponse))
    })
};

export const apiResponseReceived = response => ({
  type: GET_MOVIES_SUCCESS,
  response
})
