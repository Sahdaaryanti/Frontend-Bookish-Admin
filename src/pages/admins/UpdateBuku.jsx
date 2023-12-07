import { useParams, useNavigate } from 'react-router-dom';
import BookForm from '../../components/admins/BukuForm';

const UpdateBuku = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleSuccess = () => {
    // Redirect to the dashboard after a successful update
    navigate('/admins/dashboard');
  };

  return (
    <div className="min-h-screen bg-white py-4">
      <div className="m-4">
        <h2 className="m-4 text-2xl font-bold mb-4">Update Buku</h2>
        {/* Pass bookId and onSubmitSuccess callback to BukuUpdateForm */}
        <BookForm bookId={id} onSubmitSuccess={handleSuccess} />
      </div>
    </div>
  );
};

export default UpdateBuku;
