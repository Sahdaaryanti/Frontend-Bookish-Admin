import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPenerbitById, createPenerbit, updatePenerbit } from '../../modules/fetch/admins/penerbit';

const PenerbitAddEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [nama, setNama] = useState('');

  useEffect(() => {
    if (id) {
      const fetchPenerbitDetails = async () => {
        try {
          const penerbit = await getPenerbitById(id);
          setNama(penerbit.nama);
        } catch (error) {
          console.error('Error fetching penerbit details:', error.message);
        }
      };

      fetchPenerbitDetails();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (id) {
        await updatePenerbit(id, nama);
      } else {
        await createPenerbit(nama);
      }

      navigate('/admins/dashboard-penerbit');
    } catch (error) {
      console.error('Error submitting Penerbit:', error.message);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{id ? 'Edit Penerbit' : 'Tambah Penerbit'}</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">Nama Penerbit:</label>
        <input
          type="text"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          className="border border-gray-300 p-2 mb-4 w-full"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 mx-2">
          {id ? 'Update Penerbit' : 'Tambah Penerbit'}
        </button>
      </form>
    </div>
  );
};

export default PenerbitAddEdit;
