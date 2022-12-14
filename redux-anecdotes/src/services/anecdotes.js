import axios from 'axios';

const baseUrl = 'http://localhost:3001/anecdotes';

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const createAnecdote = async (content) => {
  const response = await axios.post(baseUrl, { content, votes: 0 });
  return response.data;
};

const addVote = async anecdote => {
  const newAnecdote = {
    ...anecdote, votes: anecdote.votes + 1
  };
  const response = await axios.put(`${baseUrl}/${anecdote.id}`, newAnecdote);
  return response.data;
};

export default {
  getAll,
  createAnecdote,
  addVote
};