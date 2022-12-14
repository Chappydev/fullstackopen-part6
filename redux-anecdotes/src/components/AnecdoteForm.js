import { connect } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";
import { showNotification } from "../reducers/notificationReducer";

const AnecdoteForm = (props) => {
  const addAnecdote = async (e) => {
    e.preventDefault();
    const content = e.target.anecdote.value;
    e.target.anecdote.value = '';
    props.createAnecdote(content);
    props.showNotification(`You created '${content}'`, 5);
  };

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name='anecdote' /></div>
        <button type='submit'>create</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  createAnecdote,
  showNotification
};

const ConnectedAnecdoteForm = connect(
  null,
  mapDispatchToProps
)(AnecdoteForm);

export default ConnectedAnecdoteForm;