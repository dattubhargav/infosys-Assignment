import { GET_MOVIES_SUCCESS, ADD_TO_MY_LIST, REMOVE_FROM_MY_LIST } from "../actions/constants"
const defaultState = {
  mylist: [],
  recommendations: []
}

function moviesReducer(previousState = defaultState, action) {
  switch (action.type) {
    case GET_MOVIES_SUCCESS: {
      const nextState = Object.assign({}, previousState, action.response)
      return nextState
    }

    case ADD_TO_MY_LIST: {
      const currentRecommendations = previousState.recommendations
      const newRecommendations = []
      currentRecommendations.forEach(eachMovie => {
        if (eachMovie.id !== action.movie.id) {
          newRecommendations.push(eachMovie)
        }
      })
      return Object.assign({},
        previousState,
        {
          recommendations: newRecommendations,
          mylist: [...previousState.mylist, action.movie]
        }
      )
    }

    case REMOVE_FROM_MY_LIST: {
      const currentMylist = previousState.mylist
      const newMyList = []
      currentMylist.forEach(eachMovie => {
        if (eachMovie.id !== action.movie.id) {
          newMyList.push(eachMovie)
        }
      })

      return Object.assign({},
        previousState,
        {
          recommendations: [...previousState.recommendations, action.movie],
          mylist: newMyList
        }
      )
    }

    default:
      return previousState
  }
}

export default moviesReducer
