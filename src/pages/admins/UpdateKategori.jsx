import { useNavigate, useParams } from 'react-router-dom';
import CategoryForm from '../../components/admins/CategoryForm';
import { updateKategoris } from '../../modules/fetch/admins/kategori';

const UpdateCategoryPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleSubmitSuccess = (formData) => {
    updateKategoris(id, formData)
      .then(() => {
        console.log('Category updated successfully!');
        navigate('/admins/dashboard'); // Redirect to the dashboard after a successful update
      })
      .catch((error) => {
        console.error('Error updating category:', error);
      });
  };

  return (
    <div className="min-h-screen bg-white py-4">
      <div className="m-4">
        <h2 className="m-4 text-2xl font-bold mb-4">Update Category</h2>
        <CategoryForm initialData={{ id }} onSubmit={handleSubmitSuccess} />
      </div>
    </div>
  );
};

export default UpdateCategoryPage;
