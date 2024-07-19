import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Atomns/Button';

function ButtonApi() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      if (!response.ok) throw new Error('Ocurrió un error');
      const result = await response.json();
      setData(result.results);
      console.log(result.results.map(item => ({
        name: item.name,
        status: item.status,
        species: item.species
      })));  // Mostrar en consola
      navigate('/Tablas', { state: { data: result.results } });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <Button onClick={handleClick} />
    </div>
  );
}

export default ButtonApi;
