import anecdoteService from '../services/anecdotes';

// const getId = () => (100000 * Math.random()).toFixed(0)

// const asObject = (anecdote) => {
//   return {
//     content: anecdote,
//     id: getId(),
//     votes: 0
//   }
// }

const anecdoteReducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch (action.type) {
    case 'VOTE':
      return state.map(anecdote => {
        return anecdote.id === action.data.id ? 
          { ...anecdote, votes: anecdote.votes + 1 } :
          anecdote
      });
    case 'NEW_ANECDOTE':
      return [ ...state, action.data ];
    case 'SET_ANECDOTES':
      return action.data;
    default:
      return state;
  }
}

export const voteFor = (id) => {
  return {
    type: 'VOTE',
    data: { id }
  };
};

export const appendAnecdote = (anecdote) => {
  return {
    type: 'NEW_ANECDOTE',
    data: anecdote
  };
};

export const setAnecdotes = (anecdoteArray) => {
  return {
    type: 'SET_ANECDOTES',
    data: anecdoteArray
  };
};

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll();
    dispatch(setAnecdotes(anecdotes));
  };
};

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createAnecdote(content);
    dispatch(appendAnecdote(newAnecdote));
  };
};

export default anecdoteReducer;