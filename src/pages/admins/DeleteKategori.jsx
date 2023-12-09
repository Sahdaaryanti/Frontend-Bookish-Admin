import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { deleteKategoris, getKategorisById } from '../../modules/fetch/admins/kategori';

const DeleteCategoryPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Mengambil detail kategori ketika komponen dipasang
    fetchCategoryDetails();
  }, []);

  const fetchCategoryDetails = async () => {
    try {
      const category = await getKategorisById(id);
      if (!window.confirm(`Are you sure you want to delete the category: ${category.nama}?`)) {
        // Redirect ke dashboard jika pengguna membatalkan operasi penghapusan
        navigate('/admins/dashboard-kategori');
      }
    } catch (error) {
      console.error('Error fetching category details:', error.message);
    }
  };

  useEffect(() => {
    // Menghapus kategori ketika komponen dipasang
    deleteCategory();
  }, []);

  const deleteCategory = async () => {
    try {
      // Memanggil fungsi deleteKategoris untuk menghapus kategori
      await deleteKategoris(id);
      // Redirect ke dashboard setelah penghapusan berhasil
      navigate('/admins/dashboard-kategori');
    } catch (error) {
      console.error('Error deleting category:', error.message);
    }
  };

  return (
    <div className="min-h-screen bg-white py-4">
      <div className="m-4">
        <h2 className="m-4 text-2xl font-bold mb-4">Delete Category</h2>
        {/* Anda dapat menambahkan spinner atau pesan di sini jika diperlukan */}
      </div>
    </div>
  );
};

export default DeleteCategoryPage;
