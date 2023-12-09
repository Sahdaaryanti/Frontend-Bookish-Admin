import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllPenerbit } from '../../modules/fetch/admins/penerbit';

const PenerbitList = () => {
  const [penerbitList, setPenerbitList] = useState([]);

  useEffect(() => {
    const fetchPenerbit = async () => {
      try {
        const penerbitData = await getAllPenerbit();
        setPenerbitList(penerbitData);
      } catch (error) {
        console.error('Error fetching penerbit list:', error.message);
      }
    };

    fetchPenerbit();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Daftar Penerbit</h2>
      <ul>
        {penerbitList.map((penerbit) => (
          <li key={penerbit.id}>
            <Link to={`/admins/dashboard-penerbit/edit/${penerbit.id}`}>{penerbit.nama}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PenerbitList;
