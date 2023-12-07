import { instance } from '../../../axios/index';

const getAllKategoris = async () => {
  try {
    const response = await instance.get(`/kategori`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Something went wrong");
  }
};
  
  export { getAllKategoris };