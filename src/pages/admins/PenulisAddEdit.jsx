import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getPenulisById, createPenulis, updatePenulis } from '../../modules/fetch/admins/penulis';

const PenulisAddEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [nama, setNama] = useState('');

  useEffect(() => {
    if (id) {
      const fetchPenulisDetails = async () => {
        try {
          const penulis = await getPenulisById(id);
          setNama(penulis.nama);
        } catch (error) {
          console.error('Error fetching penulis details:', error.message);
        }
      };

      fetchPenulisDetails();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (id) {
        await updatePenulis(id, nama);
      } else {
        await createPenulis(nama);
      }

      navigate('/admins/dashboard-penulis');
    } catch (error) {
      console.error('Error submitting Penulis:', error.message);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{id ? 'Edit Penulis' : 'Tambah Penulis'}</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">Nama Penulis:</label>
        <input
          type="text"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          className="border border-gray-300 p-2 mb-4 w-full"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 mx-2">
          {id ? 'Update Penulis' : 'Tambah Penulis'}
        </button>
      </form>
    </div>
  );
};

export default PenulisAddEdit;
