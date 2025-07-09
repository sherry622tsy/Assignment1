import axios from 'axios';

export const fetchTodos = () => {
  return axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5');
};
