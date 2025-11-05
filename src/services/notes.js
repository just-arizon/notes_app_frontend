import axios from 'axios';

const baseUrl = '/api/notes';

const notesService = {
  getAll: async () => {
    const response = await axios.get(baseUrl);
    const nonExisting = {
      id: 10000,
      content: 'This note is not saved to server',
      important: true,
    };
    return response.data.concat(nonExisting);
  },

  create: async (newObject) => {
    const response = await axios.post(baseUrl, newObject);
    return response.data;
  },

  update: async (id, newObject) => {
    const response = await axios.put(`${baseUrl}/${id}`, newObject);
    return response.data;
  },
};

export default notesService;
