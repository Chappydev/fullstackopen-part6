import { useDispatch, useSelector } from "react-redux";
import { voteFor } from "../reducers/anecdoteReducer";
import { hideNotification, showNotification } from "../reducers/notificationReducer";


const AnecdoteList = (props) => {
  const anecdotes = useSelector(state => {
    return state.anecdotes
      .filter(a => a.content.includes(state.filter));
  });
  const dispatch = useDispatch();

  const vote = (id) => {
    const votedForAnecdote = anecdotes.find(a => a.id === id);
    dispatch(voteFor(id));
    dispatch(showNotification(`You voted for '${votedForAnecdote.content}'`));
    setTimeout(() => {
      dispatch(hideNotification());
    }, 5000)
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
                <button onClick={() => vote(anecdote.id)}>vote</button>
              </div>
            </div>
          )
      }
    </div>
  );
};

export default AnecdoteList;