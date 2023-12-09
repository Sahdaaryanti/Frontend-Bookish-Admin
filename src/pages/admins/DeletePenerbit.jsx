import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPenerbitById, deletePenerbit } from '../../modules/fetch/admins/penerbit';

const PenerbitDelete = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPenerbitDetails = async () => {
      try {
        const penerbit = await getPenerbitById(id);
        if (!window.confirm(`Are you sure you want to delete the penerbit: ${penerbit.nama}?`)) {
          navigate('/admins/dashboard-penerbit');
        }
      } catch (error) {
        console.error('Error fetching penerbit details:', error.message);
      }
    };

    fetchPenerbitDetails();
  }, [id, navigate]);

  const deletePenerbitEntry = async () => {
    try {
      await deletePenerbit(id);
      navigate('/admins/dashboard-penerbit');
    } catch (error) {
      console.error('Error deleting penerbit:', error.message);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Delete Penerbit</h2>
      <button onClick={deletePenerbitEntry} className="bg-red-500 text-white p-2">
        Confirm Delete
      </button>
    </div>
  );
};

export default PenerbitDelete;
