import { instance } from '../../../axios/index';

// Create a new file buku
const createFileBuku = async (FormData) => {
  try {
    const response = await instance.post('/file-buku', FormData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Update an existing file buku
const updateFileBuku = async (id, FormData) => {
  try {
    const response = await instance.put(`/file-buku/${id}`, FormData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Get all file buku
const getAllFileBuku = async () => {
  try {
    const response = await instance.get('/file-buku/all');
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const deleteFileBuku = async (id) => {
  try {
    const response = await instance.delete(`/file-buku/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export { createFileBuku, updateFileBuku, getAllFileBuku, deleteFileBuku };