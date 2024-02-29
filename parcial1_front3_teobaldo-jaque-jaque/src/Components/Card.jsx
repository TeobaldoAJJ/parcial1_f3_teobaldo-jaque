const Card = ({ data }) => {
  const cardStyle = {
    border: '2px solid green',
    padding: '20px',
    borderRadius: '5px',
    textAlign: 'center',
    fontSize: '1.2em',
    margin: '20px auto',
    width: 'fit-content',
  };

  return (
    <div style={cardStyle}>
      <p>Hola {data.nombre}, sabemos que eres fanático del equipo {data.equipo}. ¡Éxito Crack!</p>
    </div>
  );
};

export default Card;