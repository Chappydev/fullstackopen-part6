import { useDispatch, useSelector } from "react-redux";
import { voteFor } from "../reducers/anecdoteReducer";
import { showNotification } from "../reducers/notificationReducer";


const AnecdoteList = (props) => {
  const anecdotes = useSelector(state => {
    return state.anecdotes
      .filter(a => a.content.includes(state.filter));
  });
  const dispatch = useDispatch();

  const vote = (anecdote) => {
    dispatch(voteFor(anecdote));
    dispatch(showNotification(`You voted for '${anecdote.content}'`, 5));
  };

  return (
    <div>
      {
        anecdotes
          .slice()
          .sort((a, b) => b.votes - a.votes)
          .map(anecdote =>
            <div key={anecdote.id}>
              <div>
                {anecdote.content}
              </div>
              <div>
                has {anecdote.votes}
                <button onClick={() => vote(anecdote)}>vote</button>
              </div>
            </div>
          )
      }
    </div>
  );
};

export default AnecdoteList;