import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPenulisById, deletePenulis } from '../../modules/fetch/admins/penulis';

const PenulisDelete = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPenulisDetails = async () => {
      try {
        const penulis = await getPenulisById(id);
        if (!window.confirm(`Are you sure you want to delete the penulis: ${penulis.nama}?`)) {
          navigate('/admins/dashboard-penulis');
        }
      } catch (error) {
        console.error('Error fetching penulis details:', error.message);
      }
    };

    fetchPenulisDetails();
  }, [id, navigate]);

  const deletePenulisEntry = async () => {
    try {
      await deletePenulis(id);
      navigate('/admins/dashboard-penulis');
    } catch (error) {
      console.error('Error deleting penulis:', error.message);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Delete Penulis</h2>
      <button onClick={deletePenulisEntry} className="bg-red-500 text-white p-2">
        Confirm Delete
      </button>
    </div>
  );
};

export default PenulisDelete;
