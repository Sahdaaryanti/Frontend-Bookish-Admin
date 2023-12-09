// PenulisList.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllPenulis } from '../../modules/fetch/admins/penulis';

const PenulisList = () => {
  const [penulisList, setPenulisList] = useState([]);

  useEffect(() => {
    const fetchPenulis = async () => {
      try {
        const penulisData = await getAllPenulis();
        setPenulisList(penulisData);
      } catch (error) {
        console.error('Error fetching penulis list:', error.message);
      }
    };

    fetchPenulis();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Daftar Penulis</h2>
      <ul>
        {penulisList.map((penulis) => (
          <li key={penulis.id}>
            <Link to={`/admins/dashboard-penulis/edit/${penulis.id}`}>{penulis.nama}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PenulisList;
