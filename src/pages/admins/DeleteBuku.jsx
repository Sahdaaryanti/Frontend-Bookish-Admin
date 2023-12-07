// DeleteBuku.jsx
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { deleteBuku, getBukuById } from "../../modules/fetch/admins/buku";

const DeleteBuku = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch book details when the component mounts
    fetchBookDetails();
  },);

  const fetchBookDetails = async () => {
    try {
      const book = await getBukuById(id);
      if (!window.confirm(`Are you sure you want to delete the book: ${book.judul}?`)) {
        // Redirect to the dashboard if the user cancels the delete operation
        navigate("/admins/dashboard");
      }
    } catch (error) {
      console.error("Error fetching book details:", error.message);
    }
  };

  useEffect(() => {
    // Delete the book when the component mounts
    deleteBook();
  },);

  const deleteBook = async () => {
    try {
      // Call the deleteBuku function to delete the book
      await deleteBuku(id);
      // Redirect to the dashboard after successful deletion
      history.push("/dashboard-buku");
    } catch (error) {
      console.error("Error deleting book:", error.message);
    }
  };

  return (
    <div className="min-h-screen bg-white py-4">
      <div className="m-4">
        <h2 className="m-4 text-2xl font-bold mb-4">Delete Buku</h2>
        {/* You can add a loading spinner or message here if needed */}
      </div>
    </div>
  );
};

export default DeleteBuku;
