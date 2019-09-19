import { ADD_TO_MY_LIST, REMOVE_FROM_MY_LIST } from "./constants"

export const addToMylist = movie => ({
  type: ADD_TO_MY_LIST,
  movie
})

export const removeFromMylist = movie => ({
  type: REMOVE_FROM_MY_LIST,
  movie
})
