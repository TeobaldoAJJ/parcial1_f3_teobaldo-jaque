import React, { useState } from 'react';

const Form = ({ onSubmit }) => {
  const [nombre, setNombre] = useState('');
  const [equipo, setEquipo] = useState('');
  const [error, setError] = useState('');

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid #007bff',
    padding: '20px',
    borderRadius: '5px',
    margin: '100px auto',
    width: '50%',
  };

  const inputStyle = {
    margin: '10px 0',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #007bff',
  };

  const errorStyle = {
    color: 'red',
    border: '1px solid red',
    padding: '10px',
    borderRadius: '5px',
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre.trim().length >= 3 && equipo.trim().length >= 3) {
      onSubmit({ nombre, equipo });
      setNombre('');
      setEquipo('');
      setError('');
    } else {
      setError('Por favor, revisa que la información sea correcta e ingrésala nuevamente Crack!');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <div>
        <input
          style={inputStyle}
          id="nombre"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div>
        <input
          style={inputStyle}
          id="equipo"
          placeholder="Equipo de Fútbol Favorito"
          value={equipo}
          onChange={(e) => setEquipo(e.target.value)}
        />
      </div>
      {error && <p style={errorStyle}>{error}</p>}
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;